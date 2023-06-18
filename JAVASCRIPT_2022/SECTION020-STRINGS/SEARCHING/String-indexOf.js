/**
 * * JAVASCRIPT STRING indexOf()
 * 
 *  Resumo : neste tutorial, você aprenderá como usar o indexOf() método JavaScript String para encontrar o índice de uma substring dentro de uma string.
 * 
 * O String.prototype.indexOf() retorna o índice da primeira ocorrência de substring (substr) em uma string (str):
 
    let index = str.indexOf(substr, [, fromIndex]);

 *
 * Retorna -1 se str não contiver o substr.
 * 
 * O fromIndex é um parâmetro opcional que especifica o índice no qual a pesquisa começa. O padrão é zero (0), o que significa que se você omitir o fromIndex, a pesquisa começará do início da string.
 * 
 * O indexOf() sempre realizar uma pesquisa diferencia maiúsculas de minúsculas.
 * 
 * Para encontrar o índice da última ocorrência de uma substring em uma string, você usa o lastIndexOf() método.
 * 
 * * EXEMPLOS DE STRING JAVASCRIPT indexOf()
 * 
 * Vamos dar alguns exemplos de uso do indexOf() método.
 * 
 * * 1) USANDO O INDEXOF() EXEMPLO DE MÉTODO
 * 
 * O exemplo a seguir usa o indexOf() para obter o índice da primeira ocorrência da substring 'str'na string 'finding substring in string':
*/

let string7 = 'finding substring in string';
//procura o index da primeira ocorrencia da substrins 'str' na string string7
let index = string7.indexOf('str');

console.log(`string = '${string7}' | substring = '${'str'}' foi encontrada a primeira ocorrencia no indice = ${index}`); //11

/**
 * * 2) USANDO O INDEXOF() PARA CONTAR() OCORRÊNCIAS DE UMA SUBSTRING EM UMA STRING
 * 
 *  O exemplo a seguir usa o indexOf()método para contar o número de ocorrências da substring 'know'na string 'You do not know what you do not know until you know.':
*/

let str8 = 'You do not know what you do not know until you know.';
let substr = 'know';

let count = 0;

//procura o indice da primeira ocorrencia
//da substring 'know' na string str8
let index2 = str8.indexOf(substr);
console.log(`str = '${str8}' | substring = ${substr} | ocorrencia foi encontrada no indice = ${index2}`);
//enquanto o index for diferente de -1, isso e possui ainda ocorrencia de substring na string faz o loop iterar
while(index2 !== -1) {
    //contador
    count++;
    //procura o indice da proxima ocorrencia da subtring know a partir de uma indice dado, começe a procurar ocorrencias a partir de um indice dado
    index2 = str8.indexOf(substr, index2 + 1);
    console.log(`str = '${str8}' | substring = ${substr} | ocorrencia foi encontrada no indice = ${index2}`);
}

console.log(`Quantidade de ocorrencias de substring: '${substr}' na string : '${str8}' e de ${count} ocorrencias`);

/**
 *  Como funciona:
 * 
 *      Primeiro, use o indexOf() método para encontrar a primeira ocorrência de substr no str.
 * 
 * Em seguida, use o while loop para encontrar repetidamente a próxima posição do, começando substr a str partir da última posição encontrada + 1.
 * 
 * * 3) O INDEXOF() e a diferenciação de maiúsculas e minúsculas
 * 
 * O indexOf()é sensível a maiúsculas e minúsculas. Veja o seguinte exemplo:
*/

let str9 = 'JS indexOf';
let substr3 = 'js';

//procura o indice em que a primeira ocorrencia de substring seja encontrada
let index3 = str9.indexOf(substr);

console.log(`string = '${str9}' | substring = '${substr3}' o indice da primeira ocorrencia: ${index3}`); //-1 substring não encontrada nenhume ocorrencia na string

/**
 * Neste exemplo, o indexOf() retorna -1 porque a string JS IndexOf não contém a substring, js mas JS.
 * 
 * Para realizar uma pesquisa sem distinção entre maiúsculas e minúsculas para o índice de uma substring dentro de uma string, você pode converter tanto a substring quanto a string em minúsculas antes de usar o indexOf() método da seguinte maneira:
*/

//coverte string para minusculas
//e substr para minusculas
//assim não ira have a distinção entre maiusculas e minuculas na procura do indice da primeira ocorrencia da substring na string
index3 = str9.toLocaleLowerCase().indexOf(substr3.toLocaleLowerCase()); 

console.log(`string = '${str9}' | substring = '${substr3}' o indice da primeira ocorrencia: ${index3}`); //0