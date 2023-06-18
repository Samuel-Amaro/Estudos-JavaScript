/**
 * * PROPRIEDADES DO OBJETO
 * 
 * Esta seção discute como objetos herdam propriedades de outros objetos na cadeia de protótipos e o que acontece quando você adiciona uma propriedade em tempo de execução.
*/

//FUNÇÕES CONSTRUTURAS QUE DEFINE UM TIPO DE OBJETO

function Employee() {
    this.name = "";
    this.dept = "general";
}

function Manager() {
    Employee.call(this);
    //propriedade do objeto Manager
    this.reports = [];
}

Manager.prototype = Object.create(Employee.prototype);

function WorkeBee() {
    Employee.call(this);
    //propriedade de WorkBee
    this.projects = [];
}

//HERANÇA - DEFININDO OBJETO(PAI) DE PROTOTIPO
WorkeBee.prototype = Object.create(Employee.prototype);

function SalesPerson() {
    WorkeBee.call(this);
    this.dept = "sales";
    this.quota = 100;
}

SalesPerson.prototype = Object.create(WorkeBee.prototype);

function Enginner() {
    WorkeBee.call(this);
    this.dept = "engineering";
    this.machine = "";
}

Enginner.prototype = Object.create(WorkeBee.prototype);

//propriedades do objeto que ja vem com valores padrão
//jim.nem is ''
//jim.dept is 'general'
var jim = new Employee;

//sally.name is ''
//sally.dept is 'general'
//sally.reports is []
var sally = new Manager;

//mark.name is ''
//mark.dept is 'general'
//mark.projects is []
var mark = new WorkeBee;

//fred.name is ''
//fred.dept is 'sales'
//fred.projects is []
//fred.quota is 100
var fred = new SalesPerson;

//jane.name is ''
//jane.dept is 'enginnering'
//jane.projects is []
//jane.machine is ''
var jane = new Enginner;

/**
 * * HERDANDO PROPRIEDADES
 * 
 *  Suponha que você criou o objeto mark como um WorkerBee com a seguinte declaração:
 
  var mark = new WorkerBee;

 * 
 * Quando o JavaScript vê o operador new, ele cria um novo objeto genérico e implicitamente define o valor da propriedade interna [[Protótipo]] para o valor de WorkerBee.prototype passando este novo objeto como o valor da palavra-chave this para a função construtora de WorkerBee. A propriedade interna [[__proto__]] determina a cadeia de protótipos usada para retornar os valores das propriedades. Uma vez que essas propriedades são definidas, o JavaScript retorna o novo objeto e a declaração de atribuição define a variável mark para este objeto.
 * 
 * Este processo não põe explicitamente valores no objeto mark (valores locais) para as propriedades que mark herdou da cadeia de protótipo. Quando você solicita o valor de uma propriedade, o JavaScript primeiro verifica se o valor existe nesse objeto. Caso exista, esse valor é retornado. Se o valor não existe localmente, JavaScript verifica a cadeia de protótipos (usando a propriedade  interna __proto__). Se um objeto na cadeia de protótipos possui um valor para a propriedade, este valor é retornado. Se nenhuma propriedade é encontrada, o Javascript avisa que o objeto não possui a propriedade. Deste modo, o objeto mark possui as seguintes propriedades e valores: 
 
  mark.name = "";
  mark.dept = "general";
  mark.projects = [];

 * 
 * O mark objeto herda valores para as propriedades name e dept do objeto prototípico em mark.__proto__. É atribuído um valor local para a projects propriedade pelo WorkerBee construtor. Isso dá a você a herança de propriedades e seus valores em JavaScript
 * 
 * Como esses construtores não permitem que você forneça valores específicos da instância, essas informações são genéricas. Os valores das propriedades são os padrões compartilhados por todos os novos objetos criados a partir WorkerBee. Você pode, é claro, alterar os valores de qualquer uma dessas propriedades. Portanto, você pode fornecer informações específicas para mark o seguinte:
*/

mark.name = "Doe, Mark";
mark.dept = "admin";
mark.projects = ["navigator"];

/**
 * * ADICIONANDO PROPRIEDADES
 * 
 *  Em JavaScript, você pode adicionar propriedades a qualquer objeto em tempo de execução. Você não está obrigado a usar apenas as propriedades fornecidas pela função construtora. Para adicionar uma propriedade específica a um único objeto, você atribui um valor ao objeto, da seguinte maneira:
*/

//add uma nova propriedade, mas somente na objeto mark
mark.bonus = 3000;

/**
 * Agora, o mark objeto tem uma bonuspropriedade, mas nenhum outro WorkerBee tem essa propriedade.
 * 
 * Se você adicionar uma nova propriedade a um objeto que está sendo usado como protótipo para uma função de construtor, você adiciona essa propriedade a todos os objetos que herdam propriedades do protótipo. Por exemplo, você pode adicionar uma specialty propriedade a todos os funcionários com a seguinte declaração:
*/

//add uma nova propriedade aos Objetos Employee
Employee.prototype.specialty = "none";

/**
 * Assim que o JavaScript executa essa instrução, o mark objeto também tem a specialty propriedade com o valor de "none".  
*/