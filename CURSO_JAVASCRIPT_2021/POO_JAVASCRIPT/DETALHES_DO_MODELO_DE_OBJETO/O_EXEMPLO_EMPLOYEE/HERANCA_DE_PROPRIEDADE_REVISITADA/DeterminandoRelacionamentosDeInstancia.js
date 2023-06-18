/**
 * * DETERMINANDO RELACIONAMENTOS DE INSTÂNCIA
 * 
 * A pesquisa de propriedade em JavaScript procura nas próprias propriedades de um objeto e, se o nome da propriedade não for encontrado, procura na propriedade especial do objeto __proto__. Isso continua recursivamente; o processo é denominado "pesquisa na cadeia de protótipos".
 * 
 * A propriedade especial __proto__ é definida quando um objeto é construído; é definido com o valor da prototype propriedade do construtor Portanto, a expressão new Foo() cria um objeto com __proto__ == Foo.prototype.  Conseqüentemente, as alterações nas propriedades de alteram a pesquisa de propriedade para todos os objetos que foram criados por  new Foo().
 * 
 * Todo objeto tem uma __proto__ propriedade de objeto (exceto Object); cada função tem uma prototype propriedade de objeto. Portanto, os objetos podem ser relacionados por 'herança de protótipo' a outros objetos. Você pode testar a herança comparando um objeto com um objeto de __proto__ função prototype. JavaScript fornece um atalho: o instanceof operador testa um objeto em relação a uma função e retorna true se o objeto herdar do protótipo da função. Por exemplo,
 */

var f = new Foo();
//O operador instanceof retorna verdadeiro se o objeto especificado for do tipo de objeto especificado.
var eVerdadeiro = (f instanceof Foo);

function Employee() {
    this.name = "";
    this.dept = "general";
}

function WorkeBee() {
    Employee.call(this);
    //propriedade de WorkBee
    this.projects = [];
}

//HERANÇA - DEFININDO OBJETO(PAI) DE PROTOTIPO
WorkeBee.prototype = Object.create(Employee.prototype);

function Enginner() {
    WorkeBee.call(this);
    this.dept = "engineering";
    this.machine = "";
}

Enginner.prototype = Object.create(WorkeBee.prototype);

/**
 * Para um exemplo mais detalhado, suponha que você tenha o mesmo conjunto de definições mostrado em Propriedades de herança . Crie um Engineer objeto da seguinte maneira:
*/ 

var chris = new Enginner("Pigman, Chris", ["jsd"], "fiji");

/***
 * Com este objeto, as seguintes afirmações são todas verdadeiras: 
*/

//Enginer.prototype; prototipo da função construtura de Enginer
chris.__proto__ == Engineer.prototype; 
//Enginner.prototype; objeto prototipo(pai) da função construtora Enginner
chris.__proto__.__proto__ == WorkerBee.prototype;
//WorkerBee.prototype; objeto prototipo(pai) da função construtora de WorkerBee;
chris.__proto__.__proto__.__proto__ == Employee.prototype;
//Employee.prototype; objeto prototipo(pai) da função construtura de Employee
chris.__proto__.__proto__.__proto__.__proto__ == Object.prototype;
//Object.prototype; objeto prototipo(pai) da função construtora de Object
chris.__proto__.__proto__.__proto__.__proto__.__proto__ == null;

/**
 * Diante disso, você poderia escrever uma instanceOf função da seguinte maneira: 
*/

function instanceOf(object, constructor) {
    object = object.__proto__;
    while(object != null) {
        if(object == constructor.prototype) {
            return true;
        }
        //O operador typeof retorna uma string indicando o tipo do operando sem avaliação. operando é uma string, variável, palavra-chave ou objeto cujo tipo deve ser retornado.
        if(typeof object == 'xml') {
            return constructor.prototype == XML.prototype;
        }
        object = object.__proto__;
    }
    return false;
}

/**
 * Nota: A implementação acima verifica o tipo de objeto em relação a "xml" para contornar uma peculiaridade de como os objetos XML são representados em versões recentes de JavaScript
 * 
 *  Usando a instanceOf função definida acima, essas expressões são verdadeiras:
*/

instanceOf(chris, Enginner); //true
instanceOf(chris, WorkeBee); //true
instanceOf(chris, Employee); //true
instanceOf(chris, Object); //true

/**
 * Mas a seguinte expressão é falsa: 
*/

instanceOf(chris, SalesPerson); //false

