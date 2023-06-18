/**
 * * ARRAY MULTIDIMENSIONAL DE JAVASCRIPT
 * 
 * Resumo : neste tutorial, você aprenderá como trabalhar com um array multidimensional JavaScript e manipular seus elementos de forma eficaz.
 * 
 * * INTRODUÇÃO AO ARRAY MULTIDIMENSIONAL JAVASCRIPT
 * 
 * JavaScript não fornece o array multidimensional nativamente. No entanto, você pode criar uma array multidimensional definindo uma array de elementos, onde cada elemento também é outra array.
 * 
 * Por esse motivo, podemos dizer que um array multidimensional JavaScript é um array de arrays. A maneira mais fácil de definir um array multidimensional é usar a notação literal do array.
 * 
 * Para declarar uma array multimensional vazia, você usa a mesma sintaxe da declaração de uma array unidimensional:
*/

//declara um array literal vazio
let activities = [];

/**
 * O exemplo a seguir define uma array bidimensional chamada activities:
*/

//declara um array bidimensional literal denso
//cada elemento do array e um array literal denso
activities = [
    ['Work', 9],
    ['Eat', 1],
    ['Commute', 2],
    ['Play Game', 1],
    ['Sleep', 7]
];

/**
 * Na activities array, a primeira dimensão representa a atividade e a segunda mostra o número de horas gastas por dia para cada uma.
 * 
 * Para mostrar a activities array no console, você usa o console.table() método da seguinte maneira:
*/

console.table(activities);

/**
 * Observe que a (index) coluna é para a ilustração que indica os índices da array interna.
 * 
 * Para acessar um elemento da array multidimensional, você primeiro usa colchetes para acessar um elemento da array externa que retorna uma array interna; e, em seguida, use outro colchete para acessar o elemento da array interna.
 * 
 * O exemplo a seguir retorna o segundo elemento da primeira array interna na activities array acima:
*/

//o primeiro colchetes acessa o element da array externa, o segundo colchetes acessa o elemento da array externa que e um array que possui outros elementos o segundo colchete acessa esse elemento
console.log(activities[0][1]); //9


