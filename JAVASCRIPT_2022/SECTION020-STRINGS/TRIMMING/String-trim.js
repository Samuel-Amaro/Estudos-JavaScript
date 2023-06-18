/**
 * * JAVASCRIPT STRING TRIM() - corte
 * 
 * Resumo : neste tutorial, você aprenderá como usar o trim() método JavaScript para remover caracteres de espaço em branco de ambas as extremidades de uma string.
 * 
 * * INTRODUÇÃO AO MÉTODO TRIM() DE JS
 * 
 * O String.prototype.trim() retorna uma nova string sem caracteres de espaço em branco do início e do final de uma string:
 
    let resultString = str.trim();

 * 
 * Os caracteres de espaço em branco são espaço, tabulação, espaço sem quebra, etc.
 * 
 * Observe que o trim() método não altera a string original.
 * 
 * Para remover caracteres de espaço em branco apenas do início ou do final de uma string, use o método trimStart() ou trimEnd().
 * 
 * * EXEMPLO DE TRIM() DE JS
 * 
 * O exemplo a seguir mostra como usar o trim() para remover os espaços em branco de ambos os lados de uma string:
*/

//uma string literal de aspas simples que possui espaços na extremidade
let string6 = ' JS trim ';
//usando o metodo String.trim(); 
//removera os espaços em brancos da extremidades da string
let resu = string6.trim();

console.log(`'${string6}' : ${resu}`);

