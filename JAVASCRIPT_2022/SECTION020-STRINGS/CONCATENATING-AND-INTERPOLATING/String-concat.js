/**
 * * JAVASCRIPT STRING CONCAT() 
 * 
 * Resumo : neste tutorial, você aprenderá como usar o concat() método JavaScript para concatenar strings.
 * 
 * * INTRODUÇÃO AO MÉTODO CONCAT() DE STRING DE JAVASCRIPT
 * 
 * O String.prototype.concat() método aceita uma lista de strings e retorna uma nova string que contém as strings combinadas:
 
    string.concat(str1, [...strN]);

 * 
 * Se os argumentos não forem strings, o concat()converte-os em strings antes de realizar a concatenação.
 * 
 * 
 * É recomendável usar o operador + ou += para concatenação de string para obter melhor desempenho.
 * 
 * * EXEMPLO DE JAVASCRIPT STRING CONCAT()
 * 
 * Vamos dar alguns exemplos de uso do concat() método.
 * 
 * * 1) CONCATENAÇÃO DE STRINGS
 * 
 * O exemplo a seguir usa o concat()método para concatenar strings:
*/

//string
let saudacao2 = 'Oi';
//concatenação das strings
let message2 = saudacao2.concat(' ', 'John');
console.log(`## CONTENAÇÃO DE STRINGS ##`);
console.log(`## EXEMPLO 1 ##`);
console.log(message2);

/**
 * * 2) Concatenando uma array de strings
 * 
 *  O exemplo a seguir usa o concat()método para concatenar strings em uma array:
*/

//array de strings
let colors = ['Blue', ' ', 'Green', ' ', 'Teal'];
//concatena cada elemento do array para formar uma strings
let result3 = ''.concat(...colors);
console.log("## EXEMPLO #2 ##");
console.log(`${colors} : ${result3}`);

/**
 * Observe que ...antes do colors argumento da array é o operador de propagação que descompacta os elementos de uma array
 * 
 * * 3) CONCATENANDO ARGUMENTOS NÃO-STRING
 * 
 * Este exemplo concatena números em uma string:
*/

let string= ''.concat(1, 2, 3);
console.log("## EXEMPLO #3 ##");
console.log(`1, 2, 3 : ${string}`);

/**
 * Neste exemplo, o concat() método converte os números 1, 2 e 3 em strings antes de concatenar. 
*/

