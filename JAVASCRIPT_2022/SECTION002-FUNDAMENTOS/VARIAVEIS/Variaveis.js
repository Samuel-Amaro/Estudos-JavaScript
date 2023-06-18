/**
 * * VARIÁVEIS JS
 * 
 * Resumo : neste tutorial, você aprenderá sobre variáveis ​​JavaScript e como declará-las.
 * 
 * As variáveis ​​JavaScript são digitadas livremente, ou seja, as variáveis ​​podem conter valores com qualquer tipo de dados. Variáveis ​​são apenas marcadores de posição nomeados para valores. 
 * 
 * * DECLARE VARIÁVEIS JAVASCRIPT USANDO VAR PALAVRAS-CHAVE
 * 
 * Para declarar uma variável, você usa a var palavra - chave seguida pelo nome da variável da seguinte maneira:
*/

//sintaxe
var nomeVariavel;

var message; //variavel declarada, que inicialmente possui um valor especial undefined

/**
 * Um nome de variável pode ser qualquer identificador válido. A message variável é declarada e contém um valor especial undefined.
 * 
 * Depois de declarar uma variável, você pode atribuir a ela uma string da seguinte maneira:
*/

message = "Hello";

/**
 * Para declarar uma variável e inicializá-la ao mesmo tempo, você usa a seguinte sintaxe:
*/

//var nomeVariavel = value;

/**
 * Por exemplo, a instrução a seguir declara a message variável e atribui a ela um valor "Hello"
*/

var message2 = "Hello"; //declarando uma variavel e a inicializando ao mesmo tempo

/**
 * Você pode declarar duas ou mais variáveis ​​usando uma instrução, cada declaração de variável é separada por uma vírgula ( ,) da seguinte maneira:
*/

var message3 = "Hello", counter = 100; //declarando duas variaveis e as inicializando ao mesmo tempo

/**
 * Conforme mencionado anteriormente, você pode armazenar um número na message variável como o exemplo a seguir, embora não seja recomendado.
*/

message = 100;

/**
 * * VARIÁVEIS UNDEFINED(INDEFINIDAS) VS. UNDECLARED VARIABLES(NÃO DECLARADAS)
 * 
 * É importante distinguir entre variáveis ​​indefinidas e não declaradas.
 * 
 * Uma variável indefinida é uma variável que foi declarada. Como não atribuímos a ela um valor, a variável usou o undefined como seu valor inicial.
 * 
 * Em contraste, uma variável não declarada é a variável que não foi declarada.
 * 
 * Veja o seguinte exemplo:
*/

var message4; //variavel declarada, mas não possui um valor definido, isso e seu valor inicial foi automaticamente gerado por undefined

console.log(message4); //undefined
console.log(counter2); //ReferenceError: counter2 is not defined, chamando uma variavel que não foi declarada e nem definida

/**
 * Neste exemplo, a message4 variável é declarada, mas não inicializada, portanto, seu valor é undefined enquanto a counter4 variável não foi declarada, portanto, acessá-la causa um ReferenceError. 
 * 
 * * VARIÁVEIS GLOBAIS(GLOBAL) E LOCAIS(LOCAL)
 * 
 * Em JavaScript, todas as variáveis ​​existem em um escopo que determina o tempo de vida das variáveis ​​e que parte do código pode acessá-las.
 * 
 * JavaScript tem principalmente escopos globais e de função . ES6 introduziu um novo escopo denominado escopo de bloco.
 * 
 * Se você declarar uma variável em uma função, JavaScript adiciona a variável ao escopo da função. Caso você declare uma variável fora de uma função, JavaScript a adiciona ao escopo global.
 * 
 * Em JavaScript, você define uma função da seguinte maneira:
*/

function functionName() {
    //logica
}

/**
 * e chame a função usando a seguinte sintaxe:
*/

functionName();

/**
 * O exemplo a seguir define uma função chamada say que possui uma variável local chamada message.
*/

function diga() {
    //declarando uma variavel e definindo um valor inicial a ela, essa variavel esta no escopo local da função, so pode ser usada e acessada aqui dentro deste bloco
    var messageLocal = "Olá.";
    return message;
}

/**
 * A messageLocal variável é uma variável local. Em outras palavras, ele existe apenas dentro da função.
 * 
 * Se você tentar acessar o messageLocal exterior da função conforme mostrado no exemplo a seguir, obterá um ReferenceError porque a messageLocal variável não foi definida:
*/

console.log(messageLocal); //Reference Error

/**
 * * VARIABLE SHADOWING(SOMBREAMENTO VARIÁVEL)
 * 
 *  
*/

//variavel declarada fora de nenhum bloco e de escopo global
var messageEscopo = "Ola";
function ola2() {
    //variavel local, declarada e definida dentro do bloco da função escopo local, a variavel messageEscopo declarada fora da função faz um sombreamento para dentro da função, não pode ser acessada aqui dentro pois existes outra variavel com mesmo nome, mas que pertence a este escopo, mas fora da função a messageEscopo externa pode ser acessada
    var messageEscopo = 'Hi';
    console.log(messageEscopo); //qual messageEscopo ? 
}
ola2();
console.log(messageEscopo); //Ola

/**
 * Neste exemplo, temos duas variáveis que compartilham o mesmo nome: messageEscopo. A primeira messageEscopo variável é uma variável global, enquanto a segunda é a variável local.
 * 
 * Dentro da ola2() função, a variável de mensagem global é sombreada. Não pode ser acessível dentro da ola2() função, mas fora da função. Isso é chamado de sombreamento variável.
 * 
 * * ACESSANDO A VARIÁVEL GLOBAL DENTRO DA FUNÇÃO
 * 
 * 
*/

//variavel global 
var messageGlobal = "Olá...";
function diga3() {
    //dentro do escopo local da função, acessando a variavel global que tem seu valor alterado
    messageGlobal = 'Oi...';
    console.log(messageGlobal); //qual message ? 'Oi...'
}
ola3(); //Oi
//acessando variavel global dentro de seu escopo normal apos ter sido alterada pelo escopo local
console.log(messageGlobal); //Oi

/**
 * Neste exemplo, definimos uma variável global chamada messageGlobal. Na ola3() função, referimos a messageGlobal variável global omitindo a var palavra - chave e alterando seu valor para uma string de Oi.
 * 
 * Embora seja possível referir-se a uma variável global dentro de uma função, isso não é recomendado. Isso ocorre porque as variáveis ​​globais são muito difíceis de manter e podem causar muita confusão.
 * 
 * * MODO NÃO ESTRITO(NON-STRICT MODE)
 * 
 * O exemplo a seguir define uma função e declara uma variável messageGlobal. No entanto, a var palavra-chave não é usada.
*/

function ola4() {
    //declara uma variavel e atribui um valor em escopo local da função, e omite o uso da palavra-chave var
    message5 = 'Oi...'; //Oque?
    console.log(message5);
}

ola4(); //Oi...
console.log(message5); //Oi

/**
 * Quando você executa o script, ele produz a Oi... string duas vezes na saída. 
 * 
 * Porque quando chamamos a ola4() função, o motor JavaScript procura a variável nomeada message5 dentro do escopo da função.
 * 
 * Como resultado, ele não conseguiu encontrar nenhuma variável declarada com aquele nome, então ele sobe para o próximo escopo imediato que é o escopo global neste caso e pergunta se a message5 variável foi declarada ou não .
 * 
 * Como o mecanismo JavaScript não conseguiu encontrar nenhuma variável global nomeada message5, ele cria uma nova variável com esse nome e a adiciona ao escopo global.
 * 
 * * MODO ESTRITO(STRICT MODE)
 * 
 * Para evitar a criação acidental de uma variável global dentro de uma função devido à omissão da var palavra - chave, use o modo estrito adicionando "use strict"; no início do arquivo JavaScript (ou da função) da seguinte maneira:
*/

"use strict"; //evita criar variaveis global sem usar a var palavra chave
function ola5() {
    message6 = "Oi..."; //reference error
    console.log(message6);
}
ola5(); //Oi...
console.log(message6); //Oi...

/**
 * De agora em diante, você deve sempre usar o modo estrito em seu código JavaScript para eliminar alguns erros silenciosos de JavaScript e fazer seu código rodar mais rápido.
 * 
 * * ELEVAÇÃO DE VARIÁVEL JAVA SCRIPT(JS VARIABLE HOISTING) 
 * 
 * Ao executar o código JavaScript, o mecanismo JavaScript passa por duas fases:
 
    1. Análise

    2. Execução

 * 
 * Na fase de análise, o mecanismo JavaScript move todas as declarações de variáveis ​​para o início do arquivo, se as variáveis ​​forem globais, ou para o início de uma função, se as variáveis ​​forem declaradas na função. 
 * 
 * Na fase de execução, o mecanismo JavaScript atribui valores às variáveis ​​e executa o código.
 * 
 * Hoisting é um mecanismo pelo qual o mecanismo JavaScript move todas as declarações de variáveis ​​para o topo de seus escopos, sejam funções ou escopos globais.
 * 
 * Se você declarar uma variável com a varpalavra - chave, a variável é elevada ao topo de seu escopo, seja global ou de função.
 * 
 * Como resultado, se você acessar uma variável antes de declará-la, a variável será avaliada como undefined.
*/

console.log(message7); //undefined, tentando acessar variavel antes de declarala
var message7;

/** 
 * O mecanismo JavaScript move a declaração da message7 variável para o topo, então o código acima é equivalente ao seguinte:
*/

var message8;
console.log(message); //undefined

/**
 * Se não houvesse içamento(hoitisng), você obteria um ReferenceError porque fez referência a uma variável que não foi definida 
*/

console.log(contador1);
var contador1 = 100;

/**
 * O mecanismo JavaScript move apenas a declaração das variáveis ​​para o topo. No entanto, ele mantém a atribuição inicial da variável permanece intacta. Como resultado, o código acima é equivalente ao seguinte código:
*/

var contador2;
console.log(contador2); //undefined
contador2 = 100;

/**
 * O içamento(HOISTING) usa var declarações redundantes sem nenhuma penalidade:
*/

var contador;
var contador;
contador = 1;
console.log(contador); //1

/**
 * * USANDO PALAVRAS CHAVES LET E CONST
 * 
 * No ES6, você pode usar a let palavra-chave para declarar uma ou mais variáveis. A let palavra-chave é semelhante à var palavra - chave. No entanto, uma variável é declarada usando a let palavra-chave com escopo de bloco, não função ou escopo global como a var palavra - chave. Mais informações sobre var vs. let
 * 
 * Um bloco em JavaScript é denotado por chaves ( {}). Por exemplo, a if...else, do...whileou fordeclaração laço cria um bloco.
 * 
 * O exemplo a seguir declara a tmp variável dentro de um bloco circundado por chaves {}.
 * 
 * A   tmp variável só existe dentro do bloco. Portanto, se você referenciá-lo fora do bloco, obterá um ReferenceError.
*/

//variaveis declaradas e atribuidas valores, dentro do escopo global
var a = 20, b = 10;
{
    let tmp = a; //tmp==20
    a = b; //a==10
    b = tmp; //b==20
}
console.log(tmp); //Reference error, porque variavel tmp não pode ser usado fora de seu escopo local

/**
 * A const palavra-chave funciona como a let palavra - chave, mas a variável que você declara deve ser inicializada imediatamente com um valor e esse valor não pode ser alterado posteriormente.
 * 
*/

const pi = 3.14;
pi = 3.141; //TypeError: 'code' is is read-only