/**
 * * EXPORTADOR(EXPORT)
 *  
 * define um arquivo chamado log.js módulo, que exporta, function, classes, variaveis, que possui identificadores, classes anonimas, functions anonimas, objetos anonimos, usando esta sintaxe não podem ser exportadas.  
*/

//para poder exportar uma função, ou uma classe, ou uma variavel colocamos a palavra-chave export na frente da seguinte forma:

//define um variavel chamada messagem que e incializada com a string literal 'Hi', e usando a palavra-chave export, exporta a variavel message para ser utilizada por outros modulos
export let message = 'Hi';


//define uma function chamada getMessage sem paramentros e retorna um valor
//uma function e uma instancia de objeto do tipo function
//exporta a function para ser usada em outros modulos
export function getMessage() {
    return message;
}

//outra function que sera exportada para outros modulos, essa function define um parametro chamado msg
export function setMessage(msg) {
    message = msg;
}

//define um class chamada Logger, usando a palavra chave class
export class Logger{

}
