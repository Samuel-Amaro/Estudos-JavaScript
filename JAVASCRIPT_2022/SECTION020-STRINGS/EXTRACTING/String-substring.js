/**
 * * JAVA SCRIPT SUBSTRING() - subcadeia
 * 
 *  Resumo : neste tutorial, você aprenderá como usar o substring() método JavaScript para extrair uma substring de uma string.
 * 
 * * INTRODUÇÃO AO MÉTODO JAVASCRIPT SUBSTRING()
 * 
 * O JavaScript String.prototype.substring() retorna a parte da string entre os índices inicial e final:
 
    str.substring(startIndex [, endIndex]);

 * 
 * O substring() método aceita dois parâmetros: startIndex e endIndex:
 *  
 *      O startIndex especifica o índice do primeiro caractere a ser incluído na substring retornada.
 * 
 *      O endIndex determina o primeiro caractere a ser excluído da substring retornada. Em outras palavras, a substring retornada não inclui o caractere no endIndex.
 * 
 * Se você omitir o endIndex, o substring() retornará a substring ao final da string.
 * 
 * Se for startIndexigual endIndex, o substring() método retorna uma string vazia.
 * 
 * Se startIndex for maior que o endIndex, os substring() trocam suas funções: o startIndex se torna o endIndex e vice-versa.
 * 
 * Se startIndex ou endIndex for menor que zero ou maior que a string.length, o substring() considera como zero (0) ou string.length respectivamente.
 * 
 * Se algum parâmetro for NaN, o substring() trata como se fosse zero (0).
 * 
 * * EXEMPLOS DE SUBSTRING DE JAVASCRIPT()
 * 
 * Vamos dar alguns exemplos de uso do substring() método JavaScript.
 * 
 * * 1) EXTRAÇÃO DE UMA SUBSTRING DO INICIO DO EXEMPLO DE STRING
 * 
 * O exemplo a seguir usa o método substring para extrair uma substring começando do início da string:
 * 
*/

//declara uma string literal de aspas simples
let string5 = 'JavaScript Substring';
//extraindo um  substring da string5 variavel
//a substring a ser extraida começa no indice 0 e termina no indice 10
//'JavaScritp' 
let substring5 = string5.substring(0, 10);
console.log(`'${string5}' : ${substring5}`);

/**
 * * 2) EXTRAÇÃO DE UMA SUBSTRING PARA O FINAL DO EXEMPLO DE STRING
 * 
 *  O exemplo a seguir usa substring () para extrair uma substring do índice 11 até o final da string:
*/

//extrai uma substring da string5
//a subtring a ser extraida começa no indice 11, e vai ate o final da string
substring5 = string5.substring(11);
console.log(`'${string5}' : ${substring5}`);

/**
 * * 3) EXTRAINDO DOMINIO DO EXEMPLO DE E-MAIL
 * 
 * O exemplo a seguir usa substring() com o indexOf() para extrair o domínio do e-mail:
*/

//string email a ser usada
let email = 'john.doe@gmail.com';
//extrai um substring de email
//a substring a ser extraida começa no indice em que indexOf() retornar onde a string a ser extraida pelo indexOf começa no '@'
//e vai ate o final da string domain
let domain = email.substring(email.indexOf('@') + 1);

console.log(`'${email}' : ${domain}`);

/**
 * Como funciona:
 * 
 *      Primeiro, o indexOf()retorna a posição do caractere @.
 * 
 *      Em seguida, a substring retorna o domínio que começa do índice de @ mais 1 até o final da string.
*/