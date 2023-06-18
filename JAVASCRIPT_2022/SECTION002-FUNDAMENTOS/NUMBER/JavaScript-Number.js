/**
 * * JAVASCRIPT NUMBER
 * 
 *  Resumo : neste tutorial, você aprenderá sobre o Number tipo de JavaScript  e seus métodos úteis para trabalhar com números de forma eficaz.
 * 
 * * INTRODUÇÃO AO TIPO DE NÚMERO JS
 * 
 * Além do tipo de número primitivo , JavaScript também fornece o Number tipo de referência para valores numéricos.
 * 
 * Para criar um Number objeto, você usa o Number construtor e passa um valor numérico da seguinte maneira:
*/

//cria um number objeto do tipo de referencia number e passa um valor numerico para ele
var objetoNumber = new Number(100);

/**
 * Este exemplo definiu a numberObject com um valor numérico de  100.
 * 
 * Para obter o valor primitivo de um Number objeto, você usa o valueOf() método da seguinte maneira:
*/

//obter o valor primitivo de um number objeto
console.log("objetoNumber.valueOf() = " + objetoNumber.valueOf()); //100

/**
 * Para obter um valor numérico como string, use os métodos toString() ou toLocaleString().
 * 
 * O toString() método aceita um argumento opcional que determina a raiz na qual apresentar o número. A raiz (ou base) é o número de dígitos únicos que representam números em um sistema numeral posicional.
 * 
 * Por exemplo, o sistema decimal usa dez dígitos de 0 a 9, portanto, a raiz é 10.
*/

//cria um objeto Number com o valor primitivo 10
var umNumero = new Number(10); 
//obter o valor numero como uma string, como não passou argumento para o toString() ele mostra o numero na sua base posional padrão que e decimal(base 10)
console.log("10 em base decimal (10): umNumero.toString() = " + umNumero.toString()); //"10"

/**
 * Neste exemplo, o aNumber tem um valor primitivo de 10, portanto, o toString()método retorna 10 no sistema decimal.
 * 
 * No entanto, o exemplo a seguir retorna a forma binária da aNumbervariável.
*/

//obtem o valor numerico como uma string e o apresenta em base binaria
console.log("10 em base binaria(2): umNumero.toString() = " + umNumero.toString(2)); //"1010"

/**
 * Se você chamar um método em um valor numérico primitivo, o JavaScript o converterá em um Number objeto temporariamente. Esse recurso é chamado de tipos de wrapper primitivos em JavaScript . Por exemplo:
*/

//declarando uma variavel e inicializando ela com um tipo de dado numerico primitivo
let x = 10;
//chamar um metodo em um valor primitivo converte o valor em um number objeto temporariamente
//mostrando o valor numero 10 como uma string na base decimal 16
//isso e chamada de wrapper primitivos em JS
console.log("10 em base hexadecimal(16): umNumero.toString() = " + x.toString(16)); //"a"
