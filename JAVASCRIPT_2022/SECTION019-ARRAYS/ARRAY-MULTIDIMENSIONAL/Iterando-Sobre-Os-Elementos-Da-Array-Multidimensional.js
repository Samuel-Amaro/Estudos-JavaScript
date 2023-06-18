/**
 * * ITERANDO SOBRE OS ELEMENTOS DA ARRAY MULTIDIMENSIONAL DO JS 
 * 
 * Para iterar uma array multidimensional, você usa um loop for aninhado como no exemplo a seguir.
*/

//declara um array multidimensional literal com 6 elementos
//uma array denso
let activities4 = [
    ['Work', 9],
    ['Programming', 2],
    ['Commute', 2],
    ['Play Game', 1],
    ['Sleep', 7],
    ['Study', 2]
];

//loop no array externo
for(let i = 0; i < activities4.length; i++) {
    //obtem o tamanho do elemento do array externo que e um array também
    let innerArrayLength = activities4[i].length;
    //loop no array interno
    for(let j = 0; j < innerArrayLength; j++) {
        console.log(`[${i} , ${j}] = ${activities4[i][j]}`);
    }
}

/**
 * O primeiro loop itera sobre os elementos da array externa e o loop aninhado itera sobre os elementos da array interna. 
 * 
 * Ou você pode usar o forEach() método duas vezes:
*/

//itera sobre os elementos da array externa
//a callback recebe como paramentro os elementos da array externa
activities4.forEach(function(activity) {
    //itera sobre os elementos da array interna
    //o for each metodo itera no elemento recebido pela callback do for each metodo externo
    //a callback recebe os elementos da array interna
    activity.forEach(function(data) {
        console.log(data);
    });
});

/**
 * Neste tutorial, você aprendeu como usar uma array de array para criar uma array multidimensional de JavaScript 
*/