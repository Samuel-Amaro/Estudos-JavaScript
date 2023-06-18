/**
 * *  O TIPO NUMBER
 * 
 * JavaScript usa o formato IEEE-754 para representar números inteiros(INTEGER) e de ponto flutuante(FLOAT).
 * 
 * * NUMEROS INTEIROS(INTEGER)
 * 
 * A instrução a seguir declara uma variável que contém um inteiro.
*/

//declara uma variavel e inicializa com um valor inteiro
let num = 100;

/**
 * Se você quiser representar os literais octais(base 8), coloque o primeiro dígito como zero (0) seguido por números de dígitos octais (0 a 7) da seguinte forma:
*/

let octal = 060; //numero octal de 48

/**
 * Se o literal de um número octal estiver fora do intervalo, o JavaScript o tratará como um decimal, conforme mostrado no exemplo a seguir.
*/

let d = 090; //interpretado como 90

/**
 * Para evitar confusão, o ES6 permite que você especifique um literal octal usando o prefixo (0o) seguido por uma sequência de dígitos octais de 0 a 7:
*/

let v = 0o45;
console.log("0o45 = " + v); //37

/**
 * Para criar literais hexadecimais (base 16), você usa 0x(em minúsculas) como os dois primeiros caracteres seguidos por qualquer número de dígitos hexadecimais (0 a 9 e A a F) 
*/

let hex = 0xf; //igual a 0xF hexadecimal para 15

/**
 * * NÚMEROS DE PONTO FLUTUANTE(FLOAT)
 * 
 *  Para representar um número de ponto flutuante, você inclui um ponto decimal seguido por pelo menos um número. Por exemplo:
*/

//declarando um variavel que possui um valor do tipo float
let f1 = 12.5;
let f2 = .3; //igual a 0,3, também válido, mas não recomendado

/**
 * JavaScript converte um número de ponto flutuante em um número inteiro se o número parecer ser o número inteiro.
 * 
 * O motivo é que o Javascript sempre deseja usar menos memória, pois um valor de ponto flutuante usa o dobro da memória de um valor inteiro.
*/

let f3 = 200.00; //interpreta como inteiro 200

/**
 * JavaScript permite que você use a notação eletrônica(e-notation) para representar números muito grandes ou pequenos, como no exemplo a seguir.
*/

let f4 = 2.17e6; //~2170000

/**
 * JavaScript fornece os valores mínimo e máximo de um número que você pode acessar usando Number.MIN_VALUE e Number.MAX_VALUE.
 * 
 * Além disso, o JavaScript usa Infinity e -Infinity para representar os números finitos, positivos e negativos.
*/

console.log("Valor máximo de um número = " + Number.MAX_VALUE); //1.7976931348623157e+308
console.log("Valor mínimo = " + Number.MIN_VALUE); //5e-324
console.log("Número finito positivo = " + (Number.MAX_VALUE + Number.MAX_VALUE)); //Infinity
console.log("Número finito negativo = " + (-Number.MAX_VALUE - Number.MAX_VALUE)); //-Infinity