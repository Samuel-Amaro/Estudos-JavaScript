/**
 * * CONSTRUTORES AND INSTÂNCIAS DE OBJETO
 * 
 *  O JavaScript usa funções especiais chamadas funções construtoras para definir objetos e seus recursos. Eles são úteis porque muitas vezes você encontrará situações em que não sabe quantos objetos estará criando; Os construtores fornecem os meios para criar quantos objetos forem necessários de forma eficaz, anexando dados e funções a eles, conforme necessário.
 * 
 * Vamos explorar a criação de classes por meio de construtores e criar instâncias de objeto a partir deles em JavaScript.
 * 
 * * UM EXEMPLO SIMPLES
 * 
 * Vamos começar observando como você pode definir uma pessoa com uma função normal. Adicione esta função dentro do elemento script:
*/

//função que cria um objeto pessoa com um nome e metodo e retorna o objeto criado
function createNewPerson(nome) {
    //cria um objeto vazio
    var obj = {};
    //criando uma propriedade ao objeto
    obj.name = nome;
    //criando um metodo do objeto
    obj.saudacao = function() {
        alert("Ei! Eu sou " + obj.name + '.');
    };
    //retorna um objeto criado e prenchindo com infornmações
    return obj;
}

/**
 * Agora você pode criar uma nova pessoa chamando essa função — tente as seguintes linhas no console JavaScript do seu navegador:
*/

//cria um objeto com o nome salva e depois retorna o objeto
var salva = createNewPerson('Salva'); 

//acessando as propriedades atraves do console
//acessando a propriedade nome 
salva.name; //return "Salva"
//acessando o metodo do objeto
salva.saudacao(); //return 'Ei! Eu sou salva';

/**
 * Isso funciona bem o suficiente, mas é um pouco prolixo; Se sabemos que queremos criar um objeto, por que precisamos criar explicitamente um novo objeto vazio e devolvê-lo? Felizmente, o JavaScript nos fornece um atalho útil, na forma de funções de construtor — vamos criar um agora! 
 * 
 * Substitua sua função anterior pelo seguinte
*/

//função costrutora(ou função do costrutor) de Pessoa
//essa função de construtor é a versão do JavaScript de uma classe. definindo metodos e propriedades como uma classe
function Pessoa(nomeP) {
    //propriedade do obj
    this.nome = nomeP;
    //metodo de objeto
    this.saudacao = function() {
        alert('Ei! eu sou' + this.nome + '.');
    };
}

/**
 * A função de construtor é a versão do JavaScript de uma classe. Você notará que ela tem todos os recursos que você espera em uma função, embora ela não retorne nada ou crie explicitamente um objeto — ela basicamente define propriedades e métodos. Você verá a palavra-chave this sendo usada aqui também — é basicamente dizer que sempre que uma dessas instâncias de objeto é criada, a propriedade name  do objeto será igual ao valor do nome passado à chamada do construtor, e o método saudacao() usará o valor do nome passado para a chamada do construtor também.
 * 
 * Nota: Um nome de função de construtor geralmente começa com uma letra maiúscula — essa convenção é usada para tornar as funções do construtor mais fáceis de reconhecer no código.
 * 
 * Então, como podemos chamar um construtor para criar alguns objetos?
*/

//criando instancias de objetos da classe Pessoa, atrave do metodo construtor
var pessoa1 = new Pessoa('Bob');
var pessoa2 = new Pessoa('Sarah');

//acessando as propriedades e metodos das instancias dos objetos atraves do console
pessoa1.nome; //return "Bob"
pessoa1.saudacao(); //return 'Ei! eu sou Bob'.
pessoa2.nome; //return "Sarah"
pessoa2.saudacao(); //return 'Ei! eu sou Sarah'.

/**
 * Legal! Você verá agora que temos dois novos objetos na página, cada um deles armazenado em um namespace diferente — quando você acessa suas propriedades e métodos, é necessário iniciar chamadas com person1 ou person2; a funcionalidade contida é cuidadosamente empacotada para que não entre em conflito com outras funcionalidades. Eles, no entanto, têm a mesma propriedade de nome e o método saudacao() disponível. Observe que eles estão usando seu próprio valor de name que foi atribuído a eles quando foram criados; Esta é uma razão pela qual é muito importante usar this, então eles usarão seus próprios valores e não algum outro valor.
 
    var person1 = new Person('Bob');
    var person2 = new Person('Sarah');

 * Em cada caso, a palavra-chave new é usada para informar ao navegador que queremos criar uma nova instância de objeto, seguida pelo nome da função com seus parâmetros obrigatórios contidos entre parênteses, e o resultado é armazenado em uma variável — muito semelhante a como uma função padrão é chamada. Cada instância é criada de acordo com esta definição:

  function Person(name) {
     this.name = name;
     this.greeting = function() {
         alert('Hi! I\'m ' + this.name + '.');
     };
  }

 * Após a criação dos novos objetos, as variáveis person1 e person2 contêm os seguintes objetos:

  {
    name: 'Bob',
    greeting: function() {
        alert('Hi! I\'m ' + this.name + '.');
    }
  }

  {
    name: 'Sarah',
    greeting: function() {
        alert('Hi! I\'m ' + this.name + '.');
    }
  }

 * Note que quando estamos chamando nossa função de construtor, estamos definindo saudacao() toda vez, o que não é ideal. Para evitar isso, podemos definir funções no protótipo, que veremos mais adiante.
 * 
 * * CRIANDO NOSSO CONSTRUTOR ACABADO
 * 
 * O exemplo que vimos acima foi apenas um exemplo simples para começarmos. Vamos agora começar e criar nossa função final do construtor Pessoa().
 * 
 * Remova o código que você inseriu até agora e inclua este construtor de substituição — isso é exatamente o mesmo que o exemplo simples em princípio, com um pouco mais de complexidade:
*/

//função construtora de classe com paramentros obrigatorios para a definição da classe, essa função construtora e a maneira de representar uma classe no JS
function PessoaCompleta(primeiro, ultimo, idade, sexo, interesses) {
    //a propriedade nome do obj e um objeto
    this.nome = {
        'primeiro' : primeiro,
        'ultimo' : ultimo
    };
    //propriedade do obj 
    this.idade = idade;
    //propriedade do obj
    this.sexo = sexo,
    //propriedade do obj
    this.interesses = interesses;
    //metodo do obj
    this.bio = function() {
        alert(this.nome.primeiro + ' ' + this.nome.ultimo + 'e ' + this.idade + 'anos. E gosto de ' + this.interesses[0] + ' e ' + this.interesses[1] + '.');
    };
    //metodo do obj
    this.saudacao = function() {
        alert('Ei! Eu sou ' + this.nome.primeiro + '.');
    };
}

/**
 * criando uma istancia da classe PessoaCompleta() pelo seu construtor 
*/

var pessoaTeste1 = new PessoaCompleta('Bob', 'Smith', 32, 'masculino', ['musica','skiar']);

/**
 * Agora você verá que pode acessar as propriedades e os métodos exatamente como fizemos anteriormente — Tente isso no seu console JS: 
*/

pessoaTeste1['age']; //return 32
pessoaTeste1.interesses[1]; //return 'Skiar';
pessoaTeste1.bio(); //return 'Bob Smith e 32 anos. E gosto de musica e skiar';
