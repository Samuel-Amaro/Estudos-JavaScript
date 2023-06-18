/**
 * define um arquivo chamado foo.js que é um modulo js
 * 
 * este modulo exporta functions definidas, com identificadores
 *  
*/

//define uma function chamada foo que não declara paramentro 
function foo() {
    console.log('foo');
}

//define outra function chamada bar que não declara paramentro também
function bar() {
    console.log('bar');
}

//O JavaScript permite que você defina uma variável, uma função ou uma classe primeiro e depois exporte-a da seguinte maneira:
//aqui definimos primeiro a function foo, e agora usando a palavra chave export para exportar a function foo para outros modulos, so referenciamos a function a ser exportada não precisa usar parenteses para invocação
export foo;

//como so definimos a function bar e não ha exportamos ela e inacessivel em outros modulos, e inacessivel fora dos modulos, conehcida como privada.