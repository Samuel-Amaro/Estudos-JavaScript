/**
 * * ADICIONANDO ELEMENTOS AO ARRAY MULTIDIMENSIONAL JAVASCRIPT
 * 
 * Você pode usar os métodos Array como push()e splice() para manipular elementos de uma array multidimensional.
 * 
 * Por exemplo, para adicionar um novo elemento no final da array multidimensional, você usa o push() método da seguinte maneira:
*/

let activities2 = [
    ['Work', 9],
    ['Eat', 1],
    ['Commute', 2],
    ['Play Game', 1],
    ['Sleep', 7]
];


//add um novo elemento no final do array multidimensional, o array externo recebera um novo elemento, esse elemento e um array que também possui elementos
activities2.push(['Study', 2]);

console.table(activities2);

/**
 * Para inserir um elemento no meio da array, você usa o splice() método. O seguinte insere um elemento na segunda posição da array de atividades:
*/

//inseri um novo elemento na posição 1
//do array externo, não exlcui nenhum elemento dessa posição, o elemento a ser add na posiçaõ 1 do array externo e um elemento array também
activities2.splice(1, 0, ['Programming', 2]);

console.table(activities2);

/**
 * Este exemplo calcula a porcentagem de horas gastas em cada atividade e anexa a porcentagem à array interna. 
*/

//usando o forEach metodo do Array podemos aplicar um função em cada elemento do array 
//o forEach percorre(itera cada elemento do array) permitindo manipular cada elemento a cada iteração
//assim passamos uma callback function para o for each
//essa callback processa cada elemento do array externo da array multidimensional
//a callback recebe como paramentro o elemento da array externo, cada iteração e um elemento da array externa, que e um array também no caso de array multidimensional
//a actitivty paramentro do callback e um elemento externo da array externa, que e um array
activities2.forEach(function(activity) {
    //activity[1] acessa o elemento 1 da array interna
    //realiza o calculo de porcentagem baseado no valor da array interna na posição 1
    let porcentagem = ((activity[1] / 24) * 100).toFixed();
    //activity[2] acessa o elemento 2 da array interna que este elemento ainda não existe então e add no array interna um nova posição 2
    activity[2] = porcentagem + '%';
});

console.table(activities2);