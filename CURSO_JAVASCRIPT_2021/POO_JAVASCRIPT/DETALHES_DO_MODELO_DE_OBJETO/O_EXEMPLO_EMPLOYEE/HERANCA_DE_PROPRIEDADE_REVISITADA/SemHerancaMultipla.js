/**
 * * SEM HERANÇA MULTIPLA
 * 
 *  Algumas linguagens orientadas a objetos permitem herança múltipla. Ou seja, um objeto pode herdar as propriedades e os valores de objetos pais não relacionados. JavaScript não oferece suporte a herança múltipla.
 * 
 * A herança de valores de propriedade ocorre em tempo de execução por JavaScript pesquisando a cadeia de protótipo de um objeto para encontrar um valor. Como um objeto tem um único protótipo associado, o JavaScript não pode herdar dinamicamente de mais de uma cadeia de protótipo.
 * 
 * Em JavaScript, você pode fazer com que uma função de construtor chame mais de uma outra função de construtor dentro dela. Isso dá a ilusão de herança múltipla. Por exemplo, considere as seguintes declarações:
*/

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

//função construtura que define um tipo de objeto
function Hobbyist (hobby) {
    this.hobby = hobby || "scuba";
}

//função coonstrutora que define um tipo de objeto 
function Engineer (name, projs, mach, hobby) {
    this.base1 = WorkeBee;
    //chama a funçao construtora 
    this.base1(name, "engineering", projs);
    this.base2 = Hobbyist;
    //chama função construtura
    this.base2(hobby);
    this.machine = mach || "";
}

//herança em java script
//definindo um objeto prototipo(pai) na função construtora
Engineer.prototype = new WorkerBee;
 
//cria um novo objeto
var dennis = new Engineer("Doe, Dennis", ["collabra"], "hugo")

/**
 * Além disso, assuma que a definição de WorkerBee é a usada anteriormente neste capítulo. Nesse caso, o dennis objeto possui estas propriedades: 
 
  dennis.name == "Doe, Dennis"
  dennis.dept == "engineering"
  dennis.projects == ["collabra"] 
  dennis.machine == "hugo"
  dennis.hobby == "scuba"

 * 
 * O mesmo dennis acontece com a hobby propriedade do Hobbyist construtor. No entanto, suponha que você, em seguida, adicione uma propriedade ao Hobbyist protótipo do construtor:
*/

//add um propriedade a função construtora
Hobbyist.prototype.equipment = ["mask", "fins", "regulator", "bcd"];

/**
 * O dennis objeto não herda esta nova propriedade. 
*/