/**
 * * STRING JAVASCRIPT
 * 
 *  Resumo : neste tutorial, você aprenderá sobre o tipo primitivo de string JavaScript.
 * 
 * * INTRODUÇÃO ÁS STRINGS DE JAVASCRIPT
 * 
 * As strings de JavaScript são valores primitivos. As strings de JavaScript também são imutáveis. Isso significa que se você processar uma string, sempre obterá uma nova string. A string original não muda.
 * 
 * Para criar strings literais em JavaScript, você usa aspas simples ou aspas duplas como este:
*/

//criando string literal com aspas simples
let str = 'Oi...';
//criando string literal com aspas duplas
let saudacoes = "Olá...";

/**
 * ES6 introduziu literais de modelo que permitem definir caracteres de crase (`) de string:
*/

let name  ='John';
let message = `Hello ${name}`;

console.log(message);

/**
 * A string message avalia a name variável e retorna a string de resultado.
 * 
 * * CARACTERES ESPECIAIS DE ESCAPE
 * 
 * Para escapar de caracteres especiais, você usa o \caractere de barra invertida . Por exemplo:
 * 
 * Quebra de linha do Windows: '\r\n'
 * 
 * Quebra de linha Unix: '\n'
 * 
 * Aba: '\t'
 * 
 * Barra invertida '\'
 * 
 * O exemplo a seguir usa o caractere de barra invertida para escapar do caractere de aspas simples em uma string:
*/

let str1 = 'I\'m a string!';

/**
 * * OBTENDO O COMPRIMENTO DA STRING 
 * 
 * A length propriedade retorna o comprimento de uma string:
*/

let str2 = "Good Morning";
console.log(`Comprimento de \'${str2}\' =  ${str2.length}`);

/**
 * * ACESSANDO CARACTERES
 * 
 * Para acessar os caracteres em uma string, você usa a [] notação semelhante a uma array com o índice baseado em zero.
 * 
 * O exemplo a seguir retorna o primeiro caractere de uma string com índice zero:
*/

let str3 = "Hello";
console.log(`Primeiro caractere de \'${str3}\' e ${str[0]}`); //"o"

/**
 * * CONCATENANDO STRINGS POR MEIO DO OPERADOR + 
 * 
 * Para concatenar duas ou mais strings , você usa o + operador:
*/

let name2 = 'John';
let str4 = 'Hello' + name2;
console.log(str4); //"Hello John"

/**
 * Se quiser montar um string pedaço por pedaço, você pode usar o +=operador:
*/

let className = 'btn';
className += ' btn-primary';
className += ' none';

console.log(className);

/**
 * * CONVERTENDO VALORES EM STRING
 * 
 *  Para converter um valor diferente de string em uma string, você usa um dos seguintes:
 * 
 * String (n);
 * 
 * ”+ N
 * 
 * n.toString()
 * 
 * Observe que o toString() método não funciona para undefined e null.
 * 
 * Quando você converte uma string em um booleano, não pode convertê-la de volta por meio de Boolean():
*/

let status = false;
let str5 = status.toString(); //"false"
let back = Boolean(str); //true

/**
 * Neste exemplo:
 * 
 * Primeiro, status é uma variável booleana.
 * 
 * Em seguida, o toString() retorna a versão da string da status variável, que é false.
 * 
 * Finalmente, o Boolean() converte a "false" string de volta para o booleano que resulta em true porque "false" é uma string não vazia.
 * 
 * Observe que a única string para a qual Boolean() retorna falso é a string vazia (”);
 * 
 * * COMPARANDO STRINGS
 * 
 * Para comparar duas strings, você usar o operador >, >=, <, <=, e == operadores.
 * 
 * Esses operadores comparam strings com base nos valores numéricos de caracteres JavaScript. Em outras palavras, ele pode retornar a ordem das strings diferente da usada nos dicionários.
*/

//'a' = 97
//'b' = 98
let result = 'a' < 'b'; 
console.log(`\'${'a'}\' < \'${'b'}\' = ${result}`);

/**
 * contudo 
*/

//'a' = 97
//'B' = 66 
let result2 = 'a' < 'B';
console.log(`\'${'a'}\' < \'${'B'}\' = ${result2}`);