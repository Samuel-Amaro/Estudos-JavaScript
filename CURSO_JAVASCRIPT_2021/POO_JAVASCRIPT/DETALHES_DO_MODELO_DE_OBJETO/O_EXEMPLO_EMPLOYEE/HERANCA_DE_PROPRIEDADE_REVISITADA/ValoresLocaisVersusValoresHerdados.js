/**
 * * HERANÇA DE PROPRIEDADE REVISITADA
 * 
 *  As seções anteriores descreveram como os construtores e protótipos JavaScript fornecem hierarquias e herança. Esta seção discute algumas sutilezas que não foram necessariamente aparentes nas discussões anteriores.
 * 
 * * VALORES LOCAIS VERSUS VALORES HERDADOS
 * 
 * Quando você acessa a propriedade de um objeto, o JavaScript executa estas etapas, conforme descrito anteriormente neste capítulo:
 
    1. Verifique se o valor existe localmente. Em caso afirmativo, retorne esse valor.

    2. Se não houver um valor local, verifique a cadeia de protótipos (usando a __proto__ propriedade).

    3. Se um objeto na cadeia de protótipo tiver um valor para a propriedade especificada, retorne esse valor.

    4. Se nenhuma propriedade for encontrada, o objeto não possui a propriedade.

 *  
 * O resultado dessas etapas depende de como você define as coisas ao longo do caminho. O exemplo original tinha estas definições:
*/

//função construtora que define um tipo de objeto
function Employee() {
    //propriedades do objeto com valor padrão
    this.name = "";
    this.dept = "general";
}

//função construtora que define um tipo de objeto
function WorkerBee() {
    //propriedade do objeto com um valor padrão
    this.projects = [];
}

//definindo um objeto prototipo(pai) para a função construtora de WorkBee, atraves da propriedade prototipo, herança em java script
WorkerBee.prototype = new Employee;

/**
 * Com essas definições, suponha que você crie amycomo uma instância de WorkerBee com a seguinte instrução:
*/

//cria um novo objeto WorkrBee
var amy = new WorkerBee;

/**
 * O amy objeto possui uma propriedade local projects,. Os valores das propriedades name e dept não são locais para amy e, portanto, são obtidos amy da __proto__ propriedade do objeto . Portanto, amy tem estes valores de propriedade: 
 
    amy.name == "";
    amy.dept == "general";
    amy.projects == [];

 *
 * Agora, suponha que você altere o valor da name propriedade no protótipo associado a Employee:
*/

Employee.prototype.name = "Unknown";

/**
 * À primeira vista, você pode esperar que esse novo valor se propague para todas as instâncias de Employee. No entanto, isso não acontece.
 * 
 * Quando você cria qualquer instância do Employee objeto, essa instância obtém um valor local para a name propriedade (a string vazia). Isso significa que quando você define o WorkerBee protótipo, criando um novo Employeeobjeto, WorkerBee.prototypetem um valor local para a name propriedade. Portanto, quando JavaScript procura a name propriedade do amy objeto (uma instância de WorkerBee), JavaScript encontra o valor local para essa propriedade em WorkerBee.prototype. Portanto, não parece mais para cima na cadeia Employee.prototype.
 * 
 * Se você deseja alterar o valor de uma propriedade do objeto em tempo de execução e fazer com que o novo valor seja herdado por todos os descendentes do objeto, você não pode definir a propriedade na função construtora do objeto. Em vez disso, você o adiciona ao protótipo associado ao construtor. Por exemplo, suponha que você altere o código anterior para o seguinte:
*/

//função construtora que define um tipo de objeto
function Employee() {
    this.dept = "general";
}

//adiciona a propriedade name ao construtor Employee
Employee.prototype.name = "";

//função construtora que define um tipo de objeto
function WorkerBee() {
    this.projects = [];
}

//add um objeto prototipo(pai) para a função construtora WorkerBee.
//herança em java script
WorkerBee.prototype = new Employee;

//cria um novo objeto, ja com as propriedades dos objetos WorkerBee e Employee 
var amy = new WorkerBee;

//dando um novo valor para a propriedade nome, esse valor vai ser recebido por todos os objetos ja criados e que vão ser criados, inclusive na cadeia hierarquica para cima na herança
Employee.prototype.name = "Desconhecida";

/**
 * Nesse caso, a namepropriedade de amytorna-se "Desconhecida". 
 * 
 * Como esses exemplos mostram, se você deseja ter valores padrão para as propriedades do objeto e deseja alterar os valores padrão em tempo de execução, deve definir as propriedades no protótipo do construtor, não na própria função do construtor.
 * 
 * 
 * 
 * 
*/
