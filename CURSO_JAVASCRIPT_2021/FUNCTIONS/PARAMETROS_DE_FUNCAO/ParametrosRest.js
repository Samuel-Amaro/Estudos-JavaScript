/**
 * * PARÂMETROS REST
 * 
 *  A sintaxe de parâmetro rest permite representar um número indefinido de argumentos como um array. No exemplo, usamos parâmetros rest para coletar argumentos do segundo argumento ao último. Então os multiplicamos pelo primeiro argumento. Neste exemplo é usado uma arrow function, que será introduzida na próxima seção.
*/

function multiplicar(multiplicador, ...args) {
    return args.map(x => multiplicador * x);
}

var arr = multiplicar(2, 1, 2, 3);
console.log(arr); //[2, 4, 6]