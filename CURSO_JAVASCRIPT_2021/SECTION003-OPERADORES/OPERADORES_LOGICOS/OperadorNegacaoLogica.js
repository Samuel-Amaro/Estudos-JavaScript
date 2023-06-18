/**
 * OPERADOR: NOT lógico (!);
 * UTILIZAÇÃO: !expr;
 * DESCRIÇÃO: (Negação lógica) Retorna falso caso o único operando possa ser convertido para verdadeiro; senão, retorna verdadeiro.
 * 
 * O código a seguir mostra exemplos do operador ! (negação lógica).
*/

//!t retorna false
// o inversso de true e false
var n1 = !true;
console.log("!true = ", n1);

//!f retorna true
//o inversso de false e true
var n2 = !false; 
console.log("!false = ", n2);

//!t retorna false
//o inversso de "Gato" e true
var n3 = !"Gato"; 
console.log("!\"Gato\" = ", n3);

var n4 = !null;
console.log("!null = ", n4);