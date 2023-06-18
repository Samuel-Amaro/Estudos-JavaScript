/**
 * 
 * OPERADOR: AND lógico (&&);
 * UTILIZAÇÃO: expr1 && expr2;
 * DESCRIÇÃO: (E lógico) - Retorna expr1 caso possa ser convertido para falso; senão, retorna expr2. Assim, quando utilizado com valores booleanos, && retorna verdadeiro caso ambos operandos sejam verdadeiros; caso contrário, retorna falso
 * 
 * *  O código a seguir mostra exemplos do operador && (E lógico).
 * 
*/

//true && true retorna true
var a1 = true && true;
console.log("true && true = ", a1);

//true && false retorna false
var a2 = true && false;
console.log("true && false = ", a2);

//false && true retorna false
var a3 = false && true;
console.log("false && true = ", a3);

//false && false retorna false
var a4 = false && (3 == 4);
console.log("false && (3 == 4) = ", a4);

//true && true retorna Cão
var a5 = "Gato" && "Cão";
console.log("\"Gato\" && \"Cão\" = ", a5);

//false && true retorna false
var a6 = false && "Gato";
console.log("false && \"Gato\" = ", a6); 

//true && false retorna false
var a7 = "Gato" && false;
console.log("\"Gato\" && false = ", a7);