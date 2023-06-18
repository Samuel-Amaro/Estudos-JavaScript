/**
 * * OPERADOR: INCREMENTO(++)
 * 
 * DESCRIÇÃO: Operador unário. Adiciona um ao seu operando. Se usado como operador prefixado (++x), retorna o valor de seu operando após a adição. Se usado como operador pósfixado (x++), retorna o valor de seu operando antes da adição.
 * 
 * Exemplo
*/

let x = 3;
++x; // incrementa mais um em x, e retorna 4

let y = 5;
y++; // retorna 5 e somente então incrementa mais um e define y como 6

console.log("Operador: Incremento(++x). operador de pre-incremento. antes de pre-incrementar: ", x ," apos pre-incrementar: ", ++x);

console.log("Operador: Incremento(y++). operador de pos-incremento. antes de fazer o pos-incremento: ", y ," apos realizar o pos-incremento: ", y++, " resultado apos o pos-incremento: ", y);