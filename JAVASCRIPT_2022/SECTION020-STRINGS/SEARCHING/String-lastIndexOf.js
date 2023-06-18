/**
 * * STRING JAVASCRIPT LASTINDEXOF()
 * 
 * Resumo : neste tutorial, você aprenderá a usar o lastIndexOf() método JavaScript String para localizar a última ocorrência de uma substring em uma string.
 * 
 * * INTRODUÇÃO AO MÉTODO LASTINDEXOF() DA STRING JS
 * 
 * O String.prototype.lastIndexOf()retorna a última ocorrência de uma substring (substr) em uma string (str).
 
    str.lastIndexOf(substr, [, fromIndex]);

 * 
 * Retorna -1 se str não contiver o substr.
 * 
 * O lastIndexOf() método procura a substring de trás para frente fromIndex. O fromIndex é opcional e o padrão é + Infinity. Isso significa que se você omitir o fromIndex, a pesquisa começa no final da string.
 * 
 * Se o fromIndex for maior ou igual a str.length, o lastIndexOf() pesquisará o substr em toda a string.
 * 
 * Se fromIndex for menor que zero, o comportamento da pesquisa é o mesmo que se fromIndex fosse zero.
 * 
 * O lastIndexOf() sempre realizar uma pesquisa diferencia maiúsculas de minúsculas.
 * 
 * Para encontrar o índice da primeira ocorrência de uma substring dentro de uma string, você usa o último indexOf()método.
 * 
 * * EXEMPLOS DE STRING JAVASCRIPT lastIndexOf()
 * 
 * Vamos dar alguns exemplos de uso do lastIndexOf() método.
 * 
 * 1) LASTINDEXOF() MÉTODO DE USO
 * 
 * Este exemplo usa o lastIndexOf() método para localizar a última ocorrência da substring 'a' na string 'JavaScript':
*/

let str10 = 'JavaScript';
//procura o indice da ultima ocorrencia da substring 'a' na string str10
let indexx = str10.lastIndexOf('a');

console.log(`string = '${str10}' possui a ultima ocorrencia de substr = '${'a'}' no indice = ${indexx}`); //3

/**
 * Este exemplo usa o lastIndexOf() método para localizar a última ocorrência da substring 'a' na string 'JavaScript': 
 * */

//procura o indice da ultima ocorrencia da substring 'a' na string str10, sendo que especifica para começar a procurar a partir do indice 2
indexx = str10.lastIndexOf('a', 2);
console.log(`string = '${str10}' possui a ultima ocorrencia de substr = '${'a'}' no indice = ${indexx}`);

/**
 * * 2) O LASTINDEXOF() E DIFERENCIAÇÃO DE MAIÚSCULAS E MINUSCULAS
 * 
 *  O lastIndexOf() é sensível a maiúsculas e minúsculas. O exemplo a seguir retorna -1:
*/

let str11 = 'Hello, World!';
let substr11 = 'L';

//procura o indice da ultima ocorrencia da sunstring na string
let index11 = str11.lastIndexOf(substr11);
console.log(`string = '${str11}' possui a ultima ocorrencia de substr = '${'L'}' no indice = ${index11}`); //-1 nenhuma ocorrencia da substring na string

/**
 * Para realizar uma pesquisa sem distinção entre maiúsculas e minúsculas para o índice da última ocorrência de uma substring dentro de uma string, você pode converter tanto a substring quanto a string em minúsculas antes de aplicar o lastIndexOf() método da seguinte maneira:
*/

//convete string e substring em minusculas antes de realizar a operação de busca da ultima ocorrencia da sunstring
index11 = str11.toLocaleLowerCase().lastIndexOf(substr11.toLocaleLowerCase());
console.log(`string = '${str11}' possui a ultima ocorrencia de substr = '${'L'}' no indice = ${index11}`);
