/**
 * * OPERADOR OU LOGICO(||)
 * 
 * OPERADOR: OU lógico (||);
 * UTILIZAÇÃO: expr1 || expr2;
 * DESCRIÇÃO: (OU lógico) -  Retorna expr1 caso possa ser convertido para verdadeiro; senão, retorna expr2. Assim, quando utilizado com valores booleanos, || retorna verdadeiro caso ambos os operandos sejam verdadeiro; se ambos forem falsos, retorna falso.
 * 
 *  O código a seguir mostra exemplos do operador || (OU lógico).
*/

//true || true retorna true
var o1 = true || true;
console.log("true || true = ", o1);

//false || true retorna true
var o2 = false || true;
console.log("false || true = ", o2);

//true || false retorna true;
var o3 = true || false;
console.log("true || false = ", o3);

//false || false retorna false
var o4 = false || (3 == 4); 
console.log("false || (3 == 4) = ", o4);

//true || true retorna Gato
var o5 = "Gato" || "Cão"; 
console.log("\"Gato\" || \"Cão\" = ", o5);

//false || true retorna Gato;
var o6 = false || "Gato";
console.log("false || \"Gato\" = ", o6);

//true || false retorna Gato
var o7 = "Gato" || false;
console.log("\"Gato\" || false = ", o7);



