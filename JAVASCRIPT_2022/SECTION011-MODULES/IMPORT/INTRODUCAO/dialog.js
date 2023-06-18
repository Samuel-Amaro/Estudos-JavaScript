/**
 * Define um arquivo chamado dialog.js que é um modulo
 * 
 * Esse modulo ira exportar function, classes, variaveis, objetos, por meio da instrução export
 */

/**
 * define uma function chamada show, que declara o paramentro chamado message
 * 
 * essa function sera exportada para que outros modulos a utilizem
 * 
 * @param {*} message 
*/
export function show(message) {
    alert(message);
}