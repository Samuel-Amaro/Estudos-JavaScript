/**
 * * JAVASCRIPT BOOLEAN OBJECT
 * 
 *  Além do boolean tipo primitivo, JavaScript também fornece a Boolean() função global , com a letra B maiúscula, para converter um valor de outro tipo para boolean.
 * 
 * O exemplo a seguir mostra como usar a Boolean() função para converter uma string em um valor booleano. Como a string não está vazia, ela retorna true
*/

//converte string 'Oi' para boolean true
let a1 = Boolean('Oi');
console.log(`Oi para Boolean(oi) = ${a1}`); //true
//mostra o tipo da variavel a
console.log(`typeof(a1) = ${typeof(a1)}`); //bolean

/**
 * O Boolean também é um objeto wrapper do boolean tipo primitivo. Isso significa que quando você passa verdadeiro ou falso para o Boolean construtor, ele criará um Boolean objeto. Por exemplo:
*/

//cria um objeto wrapper do objecto boolean do tipo primitivo
let b = new Boolean(false);

/**
 * Para obter o valor primitivo de volta, você chama o valueOf() método do Boolean objeto da seguinte maneira:
*/

//obtem o valor primitio de volta do objeto primitivo
console.log(`b.valueOf() = ${b.valueOf()}`); //false

/**
 * No entanto, se você chamar o toString()método de um Boolean objeto, obterá um valor de string  "true"ou "false". Por exemplo:
*/

//obtem um valor de string do tipo primitivo boolenano
console.log(`b.toString() = ${b.toString()}`);