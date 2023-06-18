/**
 * Define um arquivo chamado greeting.js
 * 
 *  que e um modulo que exporta uma variavel e uma function usando a palavra-chave export, exporta variavel e uma function com identificadores, com nomes, anonimas não usam esta sintaxe.
 */

//define uma variavel chamada message e a inicializa com a string literal 'Hi', e exportada para outros modulos a utilizarem
export let message = 'Hi';

//define uma function chamada setMessage que declara um paramentro chamado msg
//essa fucntion e exportada para outros modulos usando export
export function setMessage(msg) {
    //atribui o argumento msg a variavel message
    message = msg;
}