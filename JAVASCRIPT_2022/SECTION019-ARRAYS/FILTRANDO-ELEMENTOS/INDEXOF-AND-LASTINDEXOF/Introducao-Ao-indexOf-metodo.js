/**
 * * INTRODUÇÃO AO indexOf() método de array JS
 * 
 * Para encontrar a posição de um elemento em uma array, você usa o indexOf() método. Este método retorna o índice da primeira ocorrência do elemento que você deseja encontrar, ou -1 se o elemento não for encontrado. 
 * 
 * O seguinte ilustra a sintaxe do indexOf()método.
 
    Array.indexOf(searchElement, fromIndex);

 * 
 * Conforme mostrado acima, o indexOf()método aceita dois argumentos nomeados.
 
    1. O searchElement argumento é o elemento que você deseja encontrar na array.

    2. O fromIndex é um índice de array no qual a função inicia a pesquisa.

 * 
 * O fromIndex argumento pode ser um número inteiro positivo ou negativo. Se o fromIndex argumento for negativo, o indexOf() método começa a pesquisar no comprimento mais do array  fromIndex.
 * 
 * Caso você omita o fromIndex argumento, o indexOf() método começa a pesquisar a partir do início da string.
 * 
 * Observe que o indexOf() método usa o algoritmo de comparação de igualdade estrita que é semelhante ao operador triplo-igual ( ===) ao comparar o searchElement com os elementos na array.
*/