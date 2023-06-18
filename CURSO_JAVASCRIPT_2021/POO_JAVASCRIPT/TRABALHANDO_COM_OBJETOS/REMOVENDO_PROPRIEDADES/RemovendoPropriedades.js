/**
 * * REMOVENDO PROPRIEDADES
 * 
 *  Você pode remover uma propriedade não herdada usando o operador delete. O código a seguir mostra como remover uma propriedade.
*/

//criando um novo objeto, myobj, com duas propriedades, a e b
var myObj = new Object;
//add as propriedades
myObj.a = 5;
myObj.b = 12;

//removendo a propriedade a, deixando myobj com apenas a propriedade b
delete myObj.a;
//"A" esta esta em myoBJE
console.log("a" in myObj); //yields "false"

/**
 * Você também pode usar delete para remover uma variável global se a var keyword(palavra chave) não estiver sendo usada para declarar a variável: 
*/

g = 17;
delete g;