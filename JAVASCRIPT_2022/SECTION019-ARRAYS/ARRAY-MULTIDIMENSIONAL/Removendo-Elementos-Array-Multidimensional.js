/**
 * * REMOVENDO ELEMENTOS DO ARRAY MULTIDIMENSIONAL
 * 
 *  Para remover um elemento de uma array, você usa o método pop() ou splice().
 * 
 * Por exemplo, a instrução a seguir remove o último elemento da activities array.
*/

//declara um array multidimensional literal com 6 elementos
//uma array denso
let activities3 = [
    ['Work', 9],
    ['Programming', 2],
    ['Commute', 2],
    ['Play Game', 1],
    ['Sleep', 7],
    ['Study', 2]
];

console.table(activities3);

//remove o utlimo elemento do array multidimesional
//o ultimo elemento do array externa e um array com 3 elementos
activities3.pop();

console.table(activities3);

/**
 * Da mesma forma, você pode remover os elementos da array interna da array multidimensional usando o pop() método. O exemplo a seguir remove o elemento de porcentagem das array internas da activities array.
*/

//usando o forEach metodo do Array podemos aplicar um função em cada elemento do array 
//o forEach percorre(itera cada elemento do array) permitindo manipular cada elemento a cada iteração
//assim passamos uma callback function para o for each
//essa callback processa cada elemento do array externo da array multidimensional
//a callback recebe como paramentro o elemento da array externo, cada iteração e um elemento da array externa, que e um array também no caso de array multidimensional
//a actitivty paramentro do callback e um elemento externo da array externa, que e um array
activities3.forEach(function(activity) {
    //remove os elementos da 1ª posição
    //da array interna
    activity.pop(1);
});

console.table(activities3);