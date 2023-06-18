/**
 * * 2) EXTRAINDO SUBSTRINGS
 * 
 *  Para extrair uma substring de uma string, você usa o substr() método:
 
    substr(startIndex,[length]);

 * 
 * O substr() método aceita dois argumentos.
 * 
 * O primeiro argumento startIndex é o local em que os caracteres estão sendo extraídos, enquanto o segundo argumento length especifica o número de caracteres a serem extraídos.
 * 
*/

console.log("Extraindo substring com String.substr();");
//string a ser usada
let str2 = "JavaScript String";
//extrai a substring "JavaScript" de str
//passa o indice dos caracteres inicial e passa o tamanho da substring em caracteres
console.log(`'${str2}' : '${str2.substr(0, 10)}'`); //"JavaScript"
//extrai a substring "String" de str, passado o indice inicial e quantidade de caracteres que a substring possui
console.log(`'${str2}' : '${str2.substr(11, 6)}'`); //"String"

/**
 * Se você omitir o length argumento, o substr() método extrairá os caracteres até o final da string.
 * 
 * Às vezes, você deseja extrair uma substring de uma string usando índices inicial e final. Nesse caso, você usa o substring() método:
 
    substring(startIndex,endIndex);

*/

console.log("Extraindo substring utilizando String.substring()");
//string a ser usada
let str3 = "JavaScript String";
//extrai a substring "Script" da string str, passando os indices inicial e final dentro da string para extrair a substring
console.log(`'${str3}' : '${str3.substring(4, 10)}'`);