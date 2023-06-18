/**
 * Define um arquivo chamado dialog.js que é um modulo
 * 
 * Este modulo dialog.js ira exportar duas functions por meio da palavra-chave export
 */

//define uma function chamada show que declara um paramentro chamado message 
//essa function e exportada para que outros modulos a utilizem
export function show(message) {
    alert(message);
}

//define uma function chamada hide que declara um paramentro chamado message também
//a function e exportada usando a instruçaõ export que exporta a function para que outros modulos a utilizem
export function hide(message) {
    console.log(`Hide it...`);
}

