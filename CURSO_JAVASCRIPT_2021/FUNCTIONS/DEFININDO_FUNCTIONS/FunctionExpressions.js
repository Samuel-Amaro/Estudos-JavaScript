/**
 * * FUNCTIONS EXPRESSIONS(EXPRESSÕES DE FUNÇÃO)
 *  
 * Embora a declaração de função acima seja sintaticamente uma instrução, as funções também podem ser criadas por uma expressão de função.
 * 
 * Essa função pode ser anônima ; não precisa ter um nome. Por exemplo, a função square poderia ter sido definida como:
*/

const quadrado = function(numero) {
    return numero * numero
}

var x = quadrado(4); //x obtem o valor 16
console.log(x);

/**
 * No entanto, um nome pode ser fornecido com uma expressão de função. Fornecer um nome permite que a função se refira a si mesma e também torna mais fácil identificar a função nos rastreamentos de pilha de um depurador:
 *  
*/

const factorial = function fac(n) {
    return n < 2 ? 1 : n * fac(n - 1);
}

console.log(factorial(3));

/**
 * As expressões de função são convenientes ao passar uma função como um argumento para outra função. O exemplo a seguir mostra uma map função que deve receber uma função como primeiro argumento e uma matriz(array) como segundo argumento. 
*/

function map(funcao, array) {
    let resultado = []; //cria um novo array
    let i; //declara variavel
    for(i = 0; i != array.length; i++) {
        resultado[i] = funcao(array[i]);
    }
    return resultado;
}

/**
 * No código a seguir, a função recebe uma função definida por uma expressão de função e a executa para cada elemento do array recebido como um segundo argumento.
*/

const funcao = function(x) {
    return x * x * x;
}

let numeros = [0, 1, 2, 5, 10];
let cubo = map(funcao, numeros); //Função retorna: [0, 1, 8, 125, 1000].
console.log(cubo);

/**
 * Em JavaScript, uma função pode ser definida com base em uma condição. Por exemplo, a seguinte definição de função define myFunc apenas se for num igual a 0:
*/

var minhaFuncao;
if(num === 0) {
    minhaFuncao = function(umObjeto) {
        umObjeto.make = 'Toyota';
    }
}

/**
 * Além de definir funções conforme descrito aqui, você também pode usar o Function construtor para criar funções a partir de uma string em tempo de execução, da mesma forma eval(). 
 * 
 * Um método é uma função que é propriedade de um objeto.
*/