/**
 * * TIPO NULL
 * 
 *  O null tipo é o segundo tipo de dados primitivos que também tem apenas um valor: null. 
 * 
 * Javascript define que null é um ponteiro de objeto vazio. Veja o seguinte exemplo:
*/

//declara uma variavel e atribui um valor a ela esse valor e do tipo null
let obj = null;
//o tipo e dado como object porque um null em uma variavel e identificado pelo motor JS como um objeto vazio, mas que e um obejto so que vazio
console.log("let obj = " + typeof obj); //object

/**
 * É uma boa prática atribuir uma variável que posteriormente contém um objeto para null que você possa verificar se o objeto é null ou não usando a instrução if da seguinte maneira:
*/

if(obj != null) {
    //chama o metodo de objeto
}

/**
 * JavaScript define que null é igual a undefined conforme mostrado na instrução a seguir.
*/

//a diferença entre os dois e que um tipo serve para identificar um objeto vazio, e o outro para variaveis não inicializadas
console.log("null == undefined = " + (null == undefined)); //true
