/**
 * * FUNÇÕES DE CHAMADA(Calling functions)
 * 
 *  Definir uma função não a executa . Defini-lo nomeia a função e especifica o que fazer quando a função é chamada.
 * 
 * Chamar a função realmente executa as ações especificadas com os parâmetros indicados. Por exemplo, se você definir a função square, poderá chamá-la da seguinte maneira:
*/

//Por exemplo, o código a seguir define uma função simples chamada square:
function quadrado(numero) {
    return numero * numero;
}

quadrado(5);

/**
 * A instrução anterior chama a função com um argumento de 5. A função executa suas instruções e retorna o valor 25.
 * 
 * As funções devem estar no escopo quando são chamadas, mas a declaração da função pode ser içada (aparece abaixo da chamada no código), como neste exemplo:
*/

console.log(square(5));
/* ... */
function square(n) {
    return n * n;
}

/**
 * O escopo de uma função é a função na qual ela é declarada (ou todo o programa, se for declarado no nível superior). 
 * 
 * Nota: Isso funciona apenas ao definir a função usando a sintaxe acima (ou seja function funcName(){}). O código abaixo não funcionará.
 * 
 * Isso significa que a elevação de função só funciona com declarações de função - não com expressões de função .
*/

console.log(square2); //o quadrado é içado com um valor inicial indefinido. 
console.log(square2(5)); //TypeError não capturado: o quadrado não é uma função 
const square2 = function(n) {
  return n * n;
}

/**
 * Os argumentos de uma função não se limitam a strings e números. Você pode passar objetos inteiros para uma função.
 * 
 * Uma função pode chamar a si mesma. Por exemplo, aqui está uma função que calcula fatoriais recursivamente:
*/

function factorial(n) {
    if((n === 0) || (n === 1)) {
        return 1;
    }else{
        return (n * factorial(n - 1));
    }
}

/**
 * Você pode então calcular os fatoriais de 1 através da 5 seguinte maneira:
*/

var a, b, c, d, e;
a = factorial(1); //a obtem o valor de 1
b = factorial(2); //a obtem o valor de 2
c = factorial(3); //a obtem o valor de 6
d = factorial(4); //a obtem o valor de 24
e = factorial(5); //a obtem o valor de 120
console.log(a + " " +  b + " " + c + " " + d + " " + e);
/**
 * Existem outras maneiras de chamar funções. Freqüentemente, há casos em que uma função precisa ser chamada dinamicamente, ou o número de argumentos para uma função varia, ou em que o contexto da chamada de função precisa ser definido para um objeto específico determinado em tempo de execução.
 * 
 * Acontece que as próprias funções são objetos - e, por sua vez, esses objetos têm métodos. (Veja o Function objeto.) Um deles, o apply() método, pode ser usado para atingir esse objetivo.
*/