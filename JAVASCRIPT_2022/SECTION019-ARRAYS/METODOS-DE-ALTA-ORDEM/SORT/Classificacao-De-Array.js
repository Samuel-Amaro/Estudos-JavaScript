/**
 * * CLASSIFICAÇÃO DE ARRAY DE JS: CLASSIFICANDO ELEMENTOS DE ARRAY - (JAVASCRIPT ARRAY SORT: SORTING ARRAY ELEMENTS)
 * 
 * Resumo: neste tutorial, você aprenderá como usar o sort() método JavaScript Array para classificar arrays de números, strings e objetos.
 * 
 * * INTRODUÇÃO AO SORT() MÉTODO JAVASCRIPT ARRAY
 * 
 * O sort() método permite classificar os elementos de uma array no local. Além de retornar o array ordenado, o sort() método altera as posições dos elementos no array original.
 * 
 * Por padrão, o sort() método classifica os elementos da array em ordem crescente com o menor valor primeiro e o maior valor por último.
 * 
 * O sort() método converte elementos em strings e compara as strings para determinar os pedidos.
 * 
 * Considere o seguinte exemplo:
*/

//declara um array literal e inicializa com 7 elementos 
//um array denso de numeros ordenados ja
let numeros = [0, 1, 2, 3, 10, 20, 30];
console.log(`Array original = [${numeros}]`);
//classifica os elementos do array em ordem crescrente do menor para o maior
//primeiro converte todos os elementos em string e compara as string para determinar as posições e classificação no array
//aqui os elementos são elementos são classificados em ordem crescente de caracteres ASCII.
//a compararação de string e diferentes da maioria das outras comparações
numeros.sort();
console.log(`Array.sort() = [${numeros}]`);

/**
 * Neste exemplo, o sort() método coloca 10 antes de 2 porque a string “10” vem antes de “2” ao fazer uma comparação de string.
 * 
 * Para corrigir isso, você precisa passar uma função de comparação para o sort()método. O sort(método) usará a função de comparação para determinar as ordens dos elementos.
 * 
 * O seguinte ilustra a sintaxe do sort()método:
 
    array.sort(comparefunction);

 * 
 * O sort() método aceita um argumento opcional que é uma função que compara dois elementos da array.
 * 
 * Se você omitir a função de comparação, o sort() método classifica os elementos com a ordem de classificação com base nos valores de ponto de código Unicode dos elementos, conforme mencionado anteriormente(como se fossem strings).
 * 
 * A função de comparação do sort() método aceita dois argumentos e retorna um valor que determina a ordem de classificação. O seguinte ilustra a sintaxe da função de comparação:
 
    function compare(a, b) {
        //...
    }

 * 
 * A compare() função aceita dois argumentos a e b. O sort() método classificará os elementos com base no valor de retorno da compare() função com as seguintes regras:
 
    1. Se compare(a,b) for menor que zero, o sort() método classifica a para um índice inferior a b. Em outras palavras, a virá primeiro.

    2. Se compare(a,b) for maior que zero, o sort() método classificará b para um índice inferior a, ou seja, b virá primeiro.

    3. Se compare(a,b) retornar zero, o sort() método considera a igual b e deixa suas posições inalteradas.

 * 
 * Para corrigir o problema de classificação do número, você pode usar a seguinte sintaxe:
*/

//classificando elementos do array
//para mudar a forma de classficação, ao inves de ser classificado como strings, elementos são classificados em ordem crescente de caracteres ASCII.
//pode-se passar um função anonima como argumento para sort, essa função deve retorna um valor que ira definir o tipo de classificação a ser feita no sort metodo
//a functiom compare passada como argumento para sort sempre classifica os elementos em ordem crescrente, as comparações dentro da função e so um forma de classificar o indice, do menor elemento para vir antes do maior
numeros.sort(function(a, b) {
    if(a > b)
        //return > 0
        //classifica b para um indice inferior a a
        //b vira primeiro
        return 1;
    if(a < b)
        //return < 0
        //classifica a para um indice inferior a b
        //a vem primeiro
        return -1;
    //considera a igual a b
    //e não aplica classificação e deixa posições inalteradas
    return 0;
});

console.log(`Array.sort(function(a, b) {}) = [${numeros}]`);

/**
 * Ou você pode definir a função de comparação usando a sintaxe da função de seta :
*/

//mesma coisa do exemplo de cima so muda o argumento do sort metodo, ao inves de passar uma função anonima passa uma função de seta
numeros.sort((a, b) => {
    if(a > b)
        return 1;
    if(a < b) 
        return -1;
    return 0
});

console.log(`Array.sort((a, b) => {}) = [${numeros}]`);

/**
 * E o seguinte é o mais simples, pois os elementos da array são números: 
*/

//aqui o sort metodo recebe uma função de seta que determina a classificação a ser feita
//a ordem de classificação sempre e crescente a function argumento so determina se a necessidade de trocar as posições ou não para classificar
//cada iteração feita pelo sort metodo pega duas posições do array e faz uma substração,
//exemplo: posição (a) - (b) gerar um resultado negativo, significa que tem que trocar de posição para classificar, (a) vem primeiro que (b), isso e (a) e inferior a (b), qualquer resultado menor que 0 (a) vem antes de (b). isso e (a) e menor que (b).
//se (a) for maior que (b) na subtração abaixo resulta em um resultado > 0 isso e classifica (b) para um indice inferior a (a), (b) e menor que (a).
//se (a) for igual a (b) e a subtração resulta em (0) não classficia e nem troca as posições.
//isso aqui abaixo so pode ser feito porque o array de exemplo e um array de numeros numeros inteiros
//se fosse de string ou objetos ou todos os tres ao mesmo tempo não poderia ser feito
numeros.sort((a, b) => a - b);

console.log(`Array.sort((a, b) => a - b) = [${numeros}]`);