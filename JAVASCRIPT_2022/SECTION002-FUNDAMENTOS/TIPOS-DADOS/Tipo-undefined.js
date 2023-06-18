/**
 * * O TIPO DE DADO UNDEFINED
 * 
 *  O undefined tipo é um tipo primitivo que possui um valor undefined.
 * 
 * Por padrão, quando uma variável é declarada, mas não inicializada, o valor é atribuído a ela undefined.
 * 
 * 
*/

let counter; //variavel declarada mas não inicializada, recebe do proprio motor JS o valor undefined
console.log(counter); //undefined
console.log("let counter = " + typeof(counter)); //undefined

/**
 * Neste exemplo, o counter é uma variável. Como counter não foi inicializado, o valor é atribuído a ele undefined. O tipo de counter também é undefined.
 * 
 * É importante observar que o   typeof operador também retorna undefined quando você o chama em uma variável que não foi declarada:
*/

//usando o operador typeof para ver o tipo de uma variavel que não foi declarada e nem inicializada
console.log(typeof undeclaredVar); //undefined