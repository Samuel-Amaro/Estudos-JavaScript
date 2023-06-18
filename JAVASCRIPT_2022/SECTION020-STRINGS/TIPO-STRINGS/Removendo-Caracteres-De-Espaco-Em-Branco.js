/**
 * * 4) REMOVENDO CARACTERES DE ESPAÇO EM BRANCO 
 * 
 * Para remover todos os caracteres de espaço em branco à esquerda e à direita de uma string, você usa o trim() método.
 * 
*/

console.log(`Remover espaço em branco de string com String.trim()`);
//string que possui espaço em branco no inicio e fim
let rawString = ' Oi ';
//Metodo String.trim(), remove todos os caracteres de espço em branco da esquerda e direita da string, ou inicio e fim da string
let strippedString = rawString.trim();
console.log(`'${rawString}' apos uso do String.trim() = '${strippedString}'`);

/**
 * Observe que o trim() método cria uma cópia da string original com caracteres de espaço em branco removidos, ele não altera a string original.
 * 
 * Observe que o trim() método está disponível apenas a partir do ES5.
 * 
 * ES6 introduziu dois novos métodos para remover caracteres de espaço em branco de uma string:
 * 
 *      trimStart() retorna uma string com caracteres de espaço em branco retirados do início de uma string.
 * 
 *     trimEnd() retorna uma string com os caracteres de espaço em branco retirados do final de uma string. 
*/