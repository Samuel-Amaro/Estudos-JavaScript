/**
 * * COMEÇANDO
 * 
 * Digamos que quiséssemos criar uma classe Teacher, como a que descrevemos em nossa definição inicial orientada a objetos, que herda todos os membros de Person, mas também inclui:
 
    1. Uma nova propriedade, Assunto — isso irá conter o assunto que o professor ensina.

    2. Um método saudacao() atualizado, que soa um pouco mais formal do que o método padrão  saudacao() — mais adequado para um professor que se dirige a alguns alunos da escola.

 *
 * * DEFININDO UMA FUNÇÃO CONSTRUTORA Teacher()
 * 
 * A primeira coisa que precisamos fazer é criar um construtor Teacher() — adicione o seguinte abaixo do código existente:
*/

//criando uma função construtura que vai definir as propriedades de um Professor, a função vai ser o molde uma classe Professor, porem com uma especialização

function Professor(primeiro, ultimo, idade, sexo, interesses, assunto) {
    //FuncaoConstrutora.call(this,...n) -> chama a função construtora definida em Pessoa, passando a referencia ao objeto atual(este objeto, ) e os outros paramentros definidos pelo dev;
    Pessoa.call(this, primeiro, ultimo, idade, sexo, interesses);

    //propriedade da classe Professor
    this.assunto = assunto;
}

/**
 * Isto parece similar ao construtor Pessoa de várias maneiras, mas há algo estranho aqui que nós não vimos antes — a função call(). Esta função basicamente permite chamar uma função definida em outro lugar, mas no contexto atual. O primeiro parâmetro especifica o valor this que você deseja usar ao executar a função, e os outros parâmetros são aqueles que devem ser passados para a função quando ela é invocada. 
 * 
 * Nós queremos que o construtor Professor() pegue os mesmos parâmetros que o construtor Pessoa() de onde ele está herdando, então especificamos todos eles como parâmetros na chamada call().
 * 
 * A última linha dentro do construtor simplesmente define a nova propriedade Assunto que os professores terão, que pessoas genéricas não possuem.
 * 
 * * HERDANDO DE UM CONSTRUTOR SEM PARÂMETROS
 * 
 * Observe que, se o construtor do qual você está herdando não tomar seus valores de propriedade de parâmetros, não será necessário especificá-los como argumentos adicionais em call(). Então, por exemplo, se você tivesse algo realmente simples assim:
*/

//função construtora sem paramentro, 
//uma classe tijolo - generalizada
function Tijolo() {
    //propriedades da classe, ja inicializadas
    this.largura = 10;
    this.altura = 20;
}

/**
 * Você pode herdar as propriedades width(largura) e height(altura) fazendo isso (assim como as outras etapas descritas abaixo, é claro):
*/

//uma função construtora especializada
//em um tipo de tijolo, que herda da classe
//tijolo
function tijoloVidroAzul() {
    //chamando a função construtora pai 
    //tijolo, e passando a referncia de este objeto
    //FunctionConstructor.call(this, listArgs) -> Chama um método de um objeto, substituindo outro objeto pelo objeto atual.;
    Tijolo.call(this);   
    this.opacidade = 0.5;
    this.cor = 'blue';
}

/**
 * Observe que apenas especificamos this dentro de call() — nenhum outro parâmetro é necessário, já que não estamos herdando propriedades do pai que são configuradas por meio de parâmetros.
 * 
 * * DEFININDO O PROTÓTIPO E REFERÊNCIA DE CONSTRUTOR DO TEACHER()
 * 
 *  Tudo está bem até agora, mas nós temos um problema. Nós definimos um novo construtor, e ele tem uma propriedade  prototype, que por padrão apenas contém uma referência à própria função construtora. Ele não contém os métodos da propriedade prototype do construtor Pessoa. Para ver isso, insira Object.getOwnPropertyNames(Teacher.prototype) no campo de entrada de texto ou no seu console JavaScript. Em seguida, insira-o novamente, substituindo Teacher por Person. O novo construtor também não herda esses métodos. Para ver isso, compare as saídas de Person.prototype.greeting e Teacher.prototype.greeting. Precisamos obter Teacher() para herdar os métodos definidos no protótipo Person(). Então, como fazemos isso?
*/

//Object.create(ObjParaUsarComoPrototipo) -> Cria um objeto que tem o protótipo especificado ou que tem protótipo nulo.
Professor.prototype = Object.create(Pessoa.prototype);

/**
 * Aqui nosso amigo create() vem para o resgate novamente. Nesse caso, estamos usando para criar um novo objeto e torná-lo o valor de Teacher.prototype. O novo objeto tem Person.prototype como seu protótipo e, portanto, herdará, se e quando necessário, todos os métodos disponíveis no Person.prototype.
 * 
 * Precisamos fazer mais uma coisa antes de prosseguirmos. Depois de adicionar a última linha, a propriedade constructor de Teacher.prototype agora é igual a Person(), porque apenas definimos Teacher.prototype para fazer referência a um objeto que herda suas propriedades de Person.prototype! Tente salvar seu código, carregar a página em um navegador e inserir Teacher.prototype.constructor no console para verificar.
 * 
 * Isso pode se tornar um problema, então precisamos definir isso corretamente. Você pode fazer isso voltando ao seu código-fonte e adicionando a seguinte linha na parte inferior:
 * 
*/

Object.defineProperty(Professor.prototype, 'constructor', {
    value: Professor,
    enumerable: false, // de modo que ele não apareça no loop 'for in'
    writable: true
});

/**
 * Agora, se você salvar e atualizar, entrar em Teacher.prototype.constructor deve retornar Teacher(), conforme desejado, além de estarmos herdando de Person()!
 * 
 * * DAR A Professor() uma nova função saudacao()
 * 
 *  Para finalizar nosso código, precisamos definir uma nova função saudacao() no construtor Professor()
 * 
 * A maneira mais fácil de fazer isso é defini-lo no protótipo do Professor() — adicione o seguinte na parte inferior do seu código:
 * 
*/

//definindo um metodo a classe Professor, pela propriedade prototype
//definindo um metodo ao construtor pelo prototipo do construtor
Professor.prototype.saudacao = function() {

    var prefix;

    if(this.sexo === 'masculino' || this.sexo === 'Masculino' || this.sexo === 'm' || this.sexo === 'M') {
        prefix = 'Senhor';
    }else if(this.sexo === 'feminino' || this.sexo === 'Feminino' || this.sexo === 'f' || this.sexo === 'F') {
        prefix = 'Senhores';
    }else{
        prefix = 'Senhores.';
    }

    alert('Ola. Meu nome e ' + prefix + ' ' + this.nome.primeiro + ', e sou professor ' + this.assunto + '.');
};

/**
 * Isso alerta a saudação do professor, que também usa um prefixo de nome apropriado para seu gênero, elaborado usando uma instrução condicional. 
 * 
 * * TESTANDO O EXEMPLO
 * 
 * Agora que você digitou todo o código, tente criar uma instância de objeto do Professor() colocando o seguinte na parte inferior do seu JavaScript (ou algo semelhante à sua escolha):
 * 
*/

var professor1 = new Professor('Dave', 'Griffinths', 31, 'masculino', ['football', 'cookery'], 'mathematics');

/**
 * Agora salve e atualize e tente acessar as propriedades e os métodos do novo objeto Professor1, por exemplo: 
 * 
 * A técnica que abordamos aqui não é a única maneira de criar classes herdadas em JavaScript, mas funciona bem e dá uma boa idéia sobre como implementar a herança em JavaScript.
 * 
 * Uma maneira comum é usar uma biblioteca JavaScript — a maioria das opções populares tem um conjunto fácil de funcionalidade disponível para fazer herança com mais facilidade e rapidez. CoffeeScript por exemplo, fornece class, extends, etc.
*/