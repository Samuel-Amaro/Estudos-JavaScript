/**
 * * INFORMAÇÕES GLOBAIS EM CONSTRUTORES
 * 
 *  Ao criar construtores, você precisa ter cuidado ao definir informações globais no construtor. Por exemplo, suponha que você deseja que uma ID exclusiva seja atribuída automaticamente a cada novo funcionário. Você pode usar a seguinte definição para Employee:
*/

var idCounter = 1;

function Employee(name, dept) {
    this.name = name || "";
    this.dept = dept || "general";
    this.id = idCounter++;
}

/**
 * Com essa definição, ao criar um novo Employee, o construtor atribui a ele o próximo ID em sequência e, a seguir, incrementa o contador de ID global. Portanto, se sua próxima declaração for a seguinte, victoria.id é 1 e harry.id é 2: 
*/

var victoria = new Employee("Pigbert, Victoria", "pubs");
var harry = new Employee("Tschopik, Harry", "sales");

/**
 * À primeira vista, isso parece bom. No entanto, idCounter é incrementado sempre que um Employee objeto é criado, para qualquer propósito. Se você criar toda a Employee hierarquia mostrada neste capítulo, o Employee construtor será chamado sempre que você configurar um protótipo. Suponha que você tenha o seguinte código:
 * 
*/

function Manager(name, dept, reports) { }
//define o objeto prototipo(pai) da função construtora Manager
PushManager.prototype = new Employee; //cria novo objeto id = 3

function WorkerBee(name, dept, projs) { }
//mesma coisa
WorkerBee.prototype = new Employee; //cria novo objeto id = 4

function Enginner(name, projs, mach) { }
//mesma coisa
Enginner.prototype = new WorkerBee;

function SalesPerson(name, projs, quota) { }
SalesPerson.prototype = new WorkerBee;

//id = 5
var mac = new Enginner("Wood, Mac");

/**
 * Além disso, assuma que as definições omitidas aqui têm a base propriedade e chame o construtor acima delas na cadeia de protótipo. Nesse caso, no momento em que o mac objeto é criado, mac.id é 5. 
 * 
 * Dependendo da aplicação, pode ou não importar que o contador tenha sido incrementado essas vezes extras. Se você se preocupa com o valor exato desse contador, uma solução possível envolve o uso do seguinte construtor:
*/

function Employee (name, dept) {
    this.name = name || "";
    this.dept = dept || "general";
    if (name)
       this.id = idCounter++;
}

/**
 * Ao criar uma instância de Employee para usar como protótipo, você não fornece argumentos ao construtor. Usando essa definição do construtor, quando você não fornece argumentos, o construtor não atribui um valor ao id e não atualiza o contador. Portanto, para que um Employee obtenha uma identificação atribuída, você deve especificar um nome para o funcionário. Neste exemplo, mac.id seria 1. 
 * 
*/
