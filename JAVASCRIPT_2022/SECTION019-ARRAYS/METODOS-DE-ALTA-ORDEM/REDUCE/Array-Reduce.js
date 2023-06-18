/**
 * * JAVASCRIPT ARRAY REDUCE & REDUCERIGHT: REDUCING AN ARRAY INTO A VALUE(Reduzir e reduzir array de js: reduzindo um array em um valor)
 * 
 *  Resumo : neste tutorial, você aprenderá como usar o Array JavaScript reduce() e reduceRight() métodos para reduzir um array a um valor.
 * 
 * * INTRODUÇÃO AO MÉTODO REDUCE() DE ARRAY DE JS
 * 
 * Suponha que você tenha uma array de números, como esta:
*/

//declara um array literal com 3 elementos
//array denso
let numeros = [1, 2, 3];

/**
 * e você deseja calcular o total de elementos da array.
 * 
 * Normalmente, você usa um for loop para iterar sobre os elementos e adicioná-los conforme mostrado no exemplo a seguir:
*/

//FORMA TRADICIONAL: de calcular o total de elementos da array

//declara e inicializa uma variavel em escopo global
let sum = 0;

//loop for ira percorrer(Varrer) cada elemento da array
for(let i = 0; i < numeros.length; i++) {
    //cada elemento da array vai ser somado aqui
    sum += numeros[i];
}

console.log(`Forma tradicional 1: ${sum}`);

/**
 * O script é simples e direto:
 
    - Primeiro, declare uma array de três números 1, 2 e 3.

    - Em segundo lugar, declare a sum variável e defina seu valor como zero.

    - Terceiro, no for loop, some os elementos do numbers array à sum variável. Após o loop, o valor da sum variável é 6.

 * 
 * O que fizemos foi reduzir um array a um valor.
 * 
 * O Array tipo fornece um método chamado reduce() que ajuda a reduzir uma array a um único valor, como este:
*/

sum = numeros.reduce(function(accumulator, current) {
    return accumulator + current;
});

console.log(`Forma recomendada 1: ${sum}`);