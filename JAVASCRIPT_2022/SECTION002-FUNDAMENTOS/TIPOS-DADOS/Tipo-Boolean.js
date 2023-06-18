/**
 * * TIPO BOOLEAN
 * 
 *  O boolean tipo possui dois valores: true e false, em minúsculas.
 * 
 * O exemplo a seguir declara duas variáveis ​​que contêm valores booleanos.
 * 
*/

//declarando e inicializando uma variavel com um valor do tipo booleano
let emProgresso = true;
//declarando e inicializando uma variavel com um valor do tipo booleano
let completado = false;
console.log("let completado = " + (typeof completado)); //boolean

/**
 * JavaScript permite que valores de outros tipos sejam convertidos em valores booleanos de true ou false.
 * 
 * Para converter um valor de outro tipo de dados em um valor booleano, você usa a Boolean função. A tabela a seguir mostra as regras de conversão:
 
    Modelo: string;
    true: string não vazia;
    false: string vazia;
    --------------------------
    Modelo: number;
    true: number != de zero e infinito
    false: 0, NaN(numero invalido);
    --------------------------
    Modelo: object;
    true: objeto não nulo;
    false: nulo;
    --------------------------
    modelo: undefined;
    true:
    false: undefined;
*/

console.log("\'Hi\' = " + Boolean('Hi')); //true
console.log("\' \' = " + Boolean('')); //false
console.log("20 = " + Boolean(20)); //true
console.log("Infinity = " + Boolean(Infinity)); //true
console.log("0 = " + Boolean(0)); //false
console.log("{foo : 100} = " + Boolean({foo: 100})); //verdadeiro em objeto não vazio
console.log("null = " + Boolean(null)); //false
