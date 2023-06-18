/**
 * * MANIPULAÇÃO DE STRINGS
 * 
 * O String tipo fornece muitos métodos úteis para manipular strings de forma eficaz. Examinaremos cada um deles na seção seguinte.
 * 
 * * 1) CONCATENAÇÃO DE STRINGS
 * 
 * Para concatenar duas ou mais strings, você usa o concat() método da seguinte maneira:
*/


let firstName = 'John';
//utiliza o metodo concat para concatenar strings
let fullName = firstName.concat(' ', 'Doe');
console.log(`Concantenação de string com String.concat()`);
console.log(`fullName = '${fullName}'`); //"John Doe"
console.log(`firstName = '${firstName}'`); //"John"

/**
 * O concat() método concatena uma ou mais strings com outra e retorna a string de resultado. Observe que o concat() método não modifica a string original.
 * 
 * Além do concat() método, JavaScript também usa o operador de adição ( +) para concatenar strings. Na prática, o operador de adição é usado com mais freqüência do que o concat() método.
*/

//utiliza o operador (+)
let firstName2 = 'John';
//concantena string utilizando o operador de adição
let fullName2 = firstName2 + ' ' + 'Doe';
console.log("Concatenação de string usando o operador (+)");
console.log(`fullName2 = '${fullName2}'`); //"John Doe"