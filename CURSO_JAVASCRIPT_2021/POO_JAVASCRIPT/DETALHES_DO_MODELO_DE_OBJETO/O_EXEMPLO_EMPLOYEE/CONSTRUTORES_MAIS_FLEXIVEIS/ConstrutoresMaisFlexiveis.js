/**
 * * CONSTRUTORES MAIS FLEXIVEIS
 * 
 *  As funções construtoras mostradas até agora não permitem especificar valores de propriedade ao criar uma instância. Como com Java, você pode fornecer argumentos para construtores para inicializar valores de propriedade para instâncias. A figura a seguir mostra uma maneira de fazer isso.
*/

//função construtora define um tipo de objeto
function Employee(name, dept) {
    this.propNome = name || "";
    this.propDept = dept || "general";
}

//função construtora define um tipo de objeto
function WorkerBee(projs) {
    this.propProjects = projs || [];
}

//herança prototipada em java script
//definindo o prototipo do construtor
//o objeto prototipo(pai), e definido no prototipo propriedade do construtor do filho
WorkerBee.prototype = new Employee;

function Enginner(mach) {
    this.propDept = "engineering";
    this.propMachine = mach || "";
}

Enginner.prototype = new WorkerBee;

/**
 * Essas definições de JavaScript usam um idioma especial para definir os valores padrão:
 
    this.name = name || ""; 

 *
 * O operador OR lógico do JavaScript (||) avalia seu primeiro argumento. Se esse argumento for convertido em verdadeiro, o operador o retornará. Caso contrário, o operador retorna o valor do segundo argumento. Portanto, essa linha de código testa para ver se name tem um valor útil para a name propriedade. Em caso afirmativo, ele define this.name esse valor. Caso contrário, ele é definido this.name como uma string vazia. Este capítulo usa essa expressão por brevidade; no entanto, pode ser confuso à primeira vista.
 * 
 * Nota: Isso pode não funcionar como esperado se a função construtora for chamada com argumentos que são convertidos em false(like 0(zero) e string vazia ( ""). Neste caso, o valor padrão será escolhido.
 * 
 * Com essas definições, ao criar uma instância de um objeto, você pode especificar valores para as propriedades definidas localmente. Você pode usar a seguinte instrução para criar um novo Engineer:
*/

var jane = new Enginner("belau");
//as propriedades do objeto jane são
//jane.name == "";
//jane.dept == "enginnering";
//jane.projects == [];
//jane.machine == "belau";

/**
 * Observe que, com essas definições, você não pode especificar um valor inicial para uma propriedade herdada, como name. Se você deseja especificar um valor inicial para propriedades herdadas em JavaScript, você precisa adicionar mais código à função do construtor.
 * 
 * Até agora, a função construtora criou um objeto genérico e, em seguida, especificou propriedades e valores locais para o novo objeto. Você pode fazer com que o construtor adicione mais propriedades chamando diretamente a função do construtor para um objeto superior na cadeia de protótipo. A figura a seguir mostra as novas definições.
 * 
 * Vejamos uma dessas definições em detalhes. Esta é a nova definição para o Engineer construtor:
*/

//função construtora que define um novo objeto
function Enginner(name, projs, mach) {
    //objeto base prototipo de Enginner, classe pai, classe Base de Enginner 
    this.base = WorkerBee;
    //chama a função constrututora do tipo de objeto WorkBee
    //base e considerada uma funçaõ em java script, por chama a funçaõ construtora de objeto WorkBee
    //isso não define a herança, somente faz o objeto Enginner começar com as caracteristicas especificadas
    this.base(name, "engineering", projs);
    this.machine = mach || "";
}

/**
 * Suponha que você crie um novo Engineer objeto da seguinte maneira: 
*/

var jane = new Enginner("Doe, Jane", ["navigator", "javascript"], "belau");

/**
 * JavaScript segue estas etapas:
 
  1. O new operador cria um objeto genérico e define sua __proto__ propriedade como Engineer.prototype.
  
  2. O new operador passa o novo objeto para o Engineer construtor como o valor da this palavra - chave.

  3. O construtor cria uma nova propriedade chamada base para esse objeto e atribui o valor do WorkerBee construtor à base propriedade. Isso torna o WorkerBee construtor um método do Engineer objeto. O nome da base propriedade não é especial. Você pode usar qualquer nome de propriedade legal; base é simplesmente evocativo de seu propósito.

  4. O construtor chama o base método, passando como seus argumentos dois dos argumentos passados ​​para o construtor ( "Doe, Jane"e ["navigator", "javascript"]) e também a string "engineering". Usar explicitamente "engineering" no construtor indica que todos os Engineer objetos têm o mesmo valor para a dept propriedade herdada e esse valor substitui o valor herdado de Employee.

  5. Porque base é um método de Engineer, dentro da chamada para base, JavaScript vincula a this palavra-chave ao objeto criado na Etapa 1. Assim, a WorkerBee função, por sua vez, passa os argumentos "Doe, Jane"e "engineering" para a Employee função construtora. Ao retornar da Employee função construtora, a WorkerBee função usa o argumento restante para definir a projects propriedade.

  6. Ao retornar do base método, o Engineer construtor inicializa a machine propriedade do objeto para "belau".

  7. Ao retornar do construtor, JavaScript atribui o novo objeto à jane variável.

 * 
 * Você pode pensar que, tendo chamado o WorkerBee construtor de dentro do Engineer construtor, configurou a herança de forma apropriada para os Engineer objetos. Este não é o caso. Chamar o WorkerBee construtor garante que um Engineer objeto comece com as propriedades especificadas em todas as funções do construtor que são chamadas. No entanto, se você adicionar propriedades posteriormente aos protótipos Employee ou WorkerBee, essas propriedades não serão herdadas pelo Engineer objeto. Por exemplo, suponha que você tenha as seguintes declarações:
 
  function Engineer (name, projs, mach) {
    this.base = WorkerBee;
    this.base(name, "engineering", projs);
    this.machine = mach || "";
  }
  var jane = new Engineer("Doe, Jane", ["navigator", "javascript"], "belau");

 * 
 * 
*/

Employee.prototype.specialty = "none";

/**
 * O jane objeto não herda a specialty propriedade. Você ainda precisa configurar explicitamente o protótipo para garantir a herança dinâmica. Suponha que, em vez disso, você tenha estas declarações:
 
  function Engineer (name, projs, mach) {
    this.base = WorkerBee;
    this.base(name, "engineering", projs);
    this.machine = mach || "";
  }

  Engineer.prototype = new WorkerBee;
  
  var jane = new Engineer("Doe, Jane", ["navigator", "javascript"], "belau");

  Employee.prototype.specialty = "none";

 * 
 * Agora, o valor da propriedade janedo objeto specialtyé "nenhum".
 * 
 * Outra maneira de herdar é usando os métodos call()/ apply(). Abaixo são equivalentes:
*/

function Engineer (name, projs, mach) {
    this.base = WorkerBee;
    this.base(name, "engineering", projs);
    this.machine = mach || "";
}

function Engineer (name, projs, mach) {
    WorkerBee.call(this, name, "engineering", projs);
    this.machine = mach || "";
}

/**
 * Usar o call()método javascript torna uma implementação mais limpa porque o basenão é mais necessário. 
*/