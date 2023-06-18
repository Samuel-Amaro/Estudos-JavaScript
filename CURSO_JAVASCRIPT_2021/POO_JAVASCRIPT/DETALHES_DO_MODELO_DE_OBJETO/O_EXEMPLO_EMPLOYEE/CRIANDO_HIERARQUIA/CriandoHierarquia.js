/**
 * * CRIANDO HIERARQUIA
 * 
 *  As seguintes definições JavaScript Employee.
*/

/**
 * Função construtura de um tipo de Objeto Chamado Employee, inicialmente não precisa de parametros, mas esse objeto ja possui duas propriedades com valores padrões definidos
 */
function Employee() {
    this.name = "";
    this.dept = "general";
}

/**
 * As definições Manager e WorkerBee mostram a diferença na forma de especificar o próximo objeto mais alto na cadeia de herança. Em JavaScript, você adiciona uma instância prototípica como o valor da propriedade prototype da função construtora. Você pode fazer isso a qualquer momento depois de definir o construtor. 
*/

//função costrutura que define um tipo de objeto
function Manager() {
    //(método) Function.call (this: Function, thisArg: any, ... argArray: any []): any
    //Chama um método de um objeto, substituindo outro objeto pelo objeto atual.
    //@param thisArg - O objeto a ser usado como o objeto atual.
    //@param argArray - Uma lista de argumentos a serem passados ​​para o método.
    Employee.call(this);
    //propriedade do objeto Manager
    this.reports = [];
}

//o tipo Manager vai ter seus objetos criados, tendo como base a classe Employerr, e tipo herança, so que da maneira que o javascript oferece, Manager vai ter objetos baseados em Employer vai herdar as propriedades e metodos, para isso basta definir um objeto prototipo no prototype do construtor de Manager, cria um objeto e add ele como prototipo na função costrutura, novos objetos criados ja vão ser baseados em employear com especialização Manager, os novos e os ja exisitentes
Manager.prototype = Object.create(Employee.prototype);

//função construtura que define um tipo de objeto
function WorkeBee() {
    Employee.call(this);
    //propriedade de WorkBee
    this.projects = [];
}

//herança no javascript
//definindo um objeto prototipo pai que vai fornecer propiredade e metodos a um objeto especializado
//Workbee e um objeto filho e Objeto emploe criado com o create e o objeto prototipo pai
WorkeBee.prototype = Object.create(Employee.prototype);

/**
  * As definições Engineer e SalesPerson criam objetos que descendem de WorkerBee e consequentemente de Employee. Objetos destes tipos tem propriedades de todos os objetos acima de sua cadeia. Em adição, estas definições substituem o valor herdado da propriedade dept com novos valores específicos para esses objetos. 
*/

//função cosntrutura que cria um tipo de objeto
function SalesPerson() {
    WorkeBee.call(this);
    this.dept = "sales";
    this.quota = 100;
}

//definindo um objeto prototipo para a função construtura de SalesPerson
//herança WorkeBee(pai) para Objeto SalesPerson(FIlho)
SalesPerson.prototype = Object.create(WorkeBee.prototype);

//função costrutora que define um tipo de objeto
function Enginner() {
    WorkeBee.call(this);
    this.dept = "engineering";
    this.machine = "";
}

//definindo um objeto prototipo para a função construtura de Enginner
//herança do objeto WorkBee(pai) para Objeto Enginner(FIlho)
Enginner.prototype = Object.create(WorkeBee.prototype);

/**
 * Usando estas definições, você pode criar instâncias desses objetos que obterão valores padrão para suas propriedades. A próxima imagem mostra o uso destas definições JavaScript para criar novos objetos e mostrar os valores das propriedades dos novos objetos.  
 * 
 * Note: O termo instancia   tem significado específicamente técnico em linguagens baseadas em classe. Nessas linguagens, uma instância é uma instanciação individual de uma classe e é fundamentalmente diferente de uma classe. Em JavaScript, "instância" não tem esse significado técnico porque JavaScript não tem essa diferença entre classes e instâncias. No entanto, falando sobre JavaScript, "instância" pode ser usada informalmente para significar um objeto criado usando uma função construtora particular. Então, neste exemplo, você pode informalmente dizer que jane é uma instância de Engineer. Similarmente, embora os termos parent, child, ancestor, e descendant não tenham significados formais em JavaScript; você pode usá-los informalmente para referir a objetos altos ou baixos na cadeia de protótipos.
 * 
 * 
*/

/**
 * * CRIANDO OBJETOS COM DEFINIÇÕES SIMPLES
 * 
 *  Objetos individuais = Jim, Sally, Mark, Fred, Jane, etc. "Instancias" criadas a partir do construtor.
 * 
*/

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