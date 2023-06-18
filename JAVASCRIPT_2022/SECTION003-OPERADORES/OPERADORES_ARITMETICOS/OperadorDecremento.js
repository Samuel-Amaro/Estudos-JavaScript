/**
 * * OPERADOR: decremento(--)
 * 
 * DESCRIÇÃO: Operador unário. Subtrai um de seu operando. O valor de retorno é análogo àquele do operador de incremento.
 * 
 * EXEMPLO: Se x é 3, então --x define x como 2 e retorna 2, enquanto x-- retorna 3 e, somente então, define x como 2.
*/

let x1 = 3;
--x1; //define x com 2 (subtrai um do operando), e retorna 2

let y1 = 4;
y1--; //retorna 3 primeiro, e depois subtrai um do operando e define y como 3

console.log("Operador: pre-decremento(--x). antes de fazer o pre-decremento: ", x1 , " apos realiar o pre-decremento: ", --x1);

console.log("Operador: pos-decremento(x--). antes de fazer o pos-decremento: ", y1 , " apos realizar o pos decremento: ", y1--," resultado final apos o pos-decremento: ", y1);