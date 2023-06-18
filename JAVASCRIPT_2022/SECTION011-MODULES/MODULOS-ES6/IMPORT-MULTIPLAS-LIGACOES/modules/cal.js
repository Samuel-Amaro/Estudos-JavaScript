/**
 * Define um arquivo chamado cal.js é um modulo que exporta
 * 
 * exporta functions e variaveis por meio da palavra chave export, para serem usados em outros modulos
 */

//define três variaveis e as inicializa e as exporta para outros modulos
export let a = 10, b = 20, result = 0;

//define um function chamada sum sem declara paramentros e retorna um valor
//essa function e exportada para outros modulos
export function sum() {
    result = a + b;
    return result;
}

//define a function chamada multiply sem declarar paramentro
//e a exporta para ser usada em outros modulos
export function multiply() {
    result = a * b;
    return result;
}