/**
 * * TRABALHANDO COM TEXTO - STRINGS EM JAVA SCRIPT 
*/

/* criando uma string*/

var string = 'The revolution will not be televised.';

//variavel badString tera mesmo valor que string
var badString = string;

/*pode-se escolher entre aspas simples e aspas duplas para se criar a string, não tem preferencia e de gosto pessoal qual deseja usar, escolha uma maneira e permaneça nela*/

var sgl = 'Single quotes';
var dbl = "Double quotes";

/*exemplo de uso das aspas*/

var sglDbl = 'Would you eat a "fish supper"?';
var dblSgl = "I'm feeling blue.";

/* caracter de escape na string*/

var bigmounth = 'I\'ve got no right to take my place...';

/* concatenação de strings usando o operador + */

var one = 'Hello, ';
var two = 'how are you?';
var joined = one + two;

/* juntando(concatenado) varias strings de uma vez*/

var multiplos = one + one + one + one + two;

/*cancatenado variaveis e strings reais*/

var response = one + 'I am fine - ' + two;

/*concatenado uma string e um numero*/
'Front' + 242;

/*Concatenando dois numeros, e forçando um numero a ser string, e verificando o que a variavel pode ser usando o operador typeof*/
var myDate = '19' + '67';
typeof myDate;

/*convertendo texto em numero usando o  Objeto Number*/
var myString = '123';
var myNum = Number(myString);
typeof(myNum);

/*convertendo o numero em string usando o metodo toString()*/
var myNum = 123;
var myString = myNum.toString();
typeof myString;