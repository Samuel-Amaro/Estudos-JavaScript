/**
 * * JAVASCRIPT ARRAY forEach: EXECUTANDO UMA FUNÇÃO EM CADA ELEMENTO
 * 
 * Resumo : neste tutorial, você aprenderá como usar o forEach() método JavaScript Array para executar uma função em cada elemento de um array.
 * 
 * * INTRODUÇÃO AO FOREACH() MÉTODO JAVASCRIPT ARRAY
 * 
 * Normalmente, quando você deseja executar uma função em cada elemento de uma array, você usa uma instrução de loop for.
 * 
 * Por exemplo, o código a seguir mostra todos os elementos de uma array para o console:
*/

let ranks = ['A', 'B', 'C'];

for(let i = 0; i < ranks.length; i++) {
    console.log(ranks[i]);
}

/**
 * JavaScript Array fornece o forEach() método que permite executar uma função em cada elemento. 
 * 
 * O código a seguir usa o forEach() método equivalente ao código acima:
*/


ranks.forEach(function(e) {
    console.log(e);
});

/**
 * O forEach() método itera sobre os elementos em uma array e executa uma função predefinida uma vez por elemento.
 * 
 * O seguinte ilustra a sintaxe do forEach()método.
 
    Array.forEach(callback[, thisArg]);

 * 
 * O forEach() método leva dois argumentos:
 * 
 * * 1) CALLBACK
 * 
 * A callback função que o forEach() método usa para executar em cada elemento.
 * 
 * O retorno de chamada(CALLBACK) aceita os seguintes argumentos:
 
    - currentElement: é o elemento da array atual sendo processado.

    - index: o índice do currentElement na array.

    - array: o array que chama o forEach()método.

 * 
 * Os index e array são opcionais.
 * 
 * * 2) thisArg
 * 
 * O thisArg é um valor a ser usado como this ao executar o retorno de chamada.(CallBack)
 * 
 * Observe que a forEach() função retorna, undefined portanto, não é encadeada como outros métodos iterativos: filter(), map(), some(), every(),e sort().
 * 
 * Uma limitação do forEach() método em comparação com o forloop é que você não pode usar a instrução break ou continue para controlar o loop.
 * 
 * Para terminar o loop no forEach() método, você deve lançar uma exceção dentro da callback função.
 * 
 * 
*/