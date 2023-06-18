/**
 * * JAVASCRIPT STRING split(divisao)
 * 
 *  Resumo : neste tutorial, você aprenderá como usar o split() método JavaScript para dividir uma string em uma array de substrings. 
 * 
 * * INTRODUÇÃO AO SPLIT() MÉTODO STRING JS
 * 
 * O String.prototype.split() divide uma string em uma array de substrings:
 
    split([separator, [,limit]]);

 * 
 * O split() aceita dois parâmetros opcionais: separator e limit.
 * 
 * 1) separator(separador): O separator determina onde cada divisão deve ocorrer na string original. O separador pode ser uma string. Ou pode ser uma expressão regular .
 * 
 * 2) limite(limit): O limit é zero ou um inteiro positivo que especifica o número de substrings. O split() método irá parar quando o número de substrings for igual a limit.
 * 
 *      Se limit for zero, o split()retorna uma array vazia. Se limit for 1, o split() retorna uma array que contém a string.
 * 
 *      Observe que a array de resultado pode ter menos entradas do que o limite, caso split() chegue ao final da string antes do limite.  
 * 
 * * SPLIT() EXEMPLOS DE JS
 * 
 * Vamos dar alguns exemplos de uso do split() método.
 * 
 * * 1) EXEMPLO DE DIVISÃO DAS STRING EM PALAVRAS
 * 
 * O exemplo a seguir usa o split()método para dividir a string em palavras:
 * 
*/

let frase = 'JavaScript String split()';
//divide a string frase em um array de susbtrings, onde a divisão de cada substring deve ocorrer onde tiver espaço em branco, usa o split so com o parametro separator(Separador)
let substrings = frase.split(' ');
console.log(`'${frase}' : ${substrings}`);

/**
 * Observe que o espaço ('') foi removido nas substrings. 
 * 
 * * 2) RETORNANDO UM NÚMERO LIMITADO DE EXEMPLO DE SUBSTRINGS
 * 
 * O exemplo a seguir usa o split()método para dividir uma string em substrings usando o separador de espaço. Ele também usa o segundo parâmetro para limitar o número de substrings a dois:
 * 
*/

//divide a string frase em um array de substrings, onde cada divisão deve ocorrer a cada espaço em branco encontrado na string, mas porem so deve retornar duas substrings, devido estar usando o paramentro limit
substrings = frase.split(' ', 2);
console.log(`'${frase}' : ${substrings}`);

/**
 * * 3) DIVIDIR UMA STRING USANDO UM EXEMPLO DE EXPRESSÃO REGULAR
 * 
 *  O exemplo a seguir usa o split()método para dividir as sentenças de um parágrafo em sentenças:
*/

let paragraph = 'Good Morning! How are you? This is John. John is my friend.';
//divide a string paragraph em sentenças.
//cada substring sera formada pela divisão da expressão regular informada, que onde possui ! ? . divide em um substring
let sentences = paragraph.split(/[!,?,.]/);
console.log(`'${paragraph}' : ${sentences}'`);

/**
 * Se a expressão regular contiver parênteses de captura (), o split()método também incluirá os resultados correspondentes na array:
*/

sentences = paragraph.split(/([!,?,.])/);
console.log(`'${paragraph}' : ${sentences}'`);

/**
 * Observe que o !, ?, .personagens estão incluídas na array retornada.
*/
