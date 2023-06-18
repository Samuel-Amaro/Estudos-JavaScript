/**
 * * TIPO DE STRING JS
 * 
 * Resumo : neste tutorial, você aprenderá sobre o String tipo de JavaScript e como manipular strings de maneira eficaz. 
 * 
 * * INTRODUÇÃO AO TIPO DE STRING JAVA SCRIPT
 * 
 * O String tipo é o wrapper de objeto do tipo primitivo de string e pode ser criado usando o String construtor da seguinte maneira:
*/

//cria uma obejto do tipo da class string
let str = new String('JavaScript String type');

/**
 * O String tipo tem uma propriedade chamada length que especifica o número de caracteres na string.
*/

console.log(`Tamanho de '${str}' = ${str.length} caracteres`); //22

/**
 * Neste exemplo, o valor da length propriedade é 22, que também é o número de caracteres na string 'JavaScript String Type'.
 * 
 * Para obter o valor da string primitiva, você usa um dos seguintes métodos do objeto string: valueOf(), toString(), etoLocaleString().
*/

//obtem o valor da string primitiva
console.log(`str.valueOf() = ${str.valueOf()}`);
console.log(`str.toString() = ${str.toString()}`);
console.log(`str.toLocaleString() = ${str.toLocaleString()}`);


/**
 * Para acessar um caractere individual em uma string, você usa a notação de colchetes [] com um índice numérico. O índice do primeiro caractere é zero, conforme mostrado neste exemplo:
*/

//acessa o primeiro caractere da string
//acessa um caractere individual
console.log(`str[0] = ${str[0]}`); //J

/**
 * A notação de colchetes foi introduzida desde ES5. Antes do ES5, você usa o  charAt() método, que é mais detalhado:
*/

console.log(`str.charAt(0) = ${str.charAt(0)}`); //J

/**
 * Quando você chama um método em uma variável de string primitiva ou em uma string literal, ele é convertido em uma instância do String tipo. Por exemplo:
*/

//converte temporariamente o literal string em o tipo string objeto
'literal string'.toUpperCase();

