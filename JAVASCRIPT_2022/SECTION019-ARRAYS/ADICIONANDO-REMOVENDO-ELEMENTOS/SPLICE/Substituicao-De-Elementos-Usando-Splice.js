/**
 * * SUBSTITUIÇÃO DE ELEMENTOS USANDO O SPLICE() MÉTODO JAVASCRIPT ARRAY
 * 
 * O splice() método permite inserir novos elementos em uma array enquanto exclui os elementos existentes simultaneamente.
 * 
 * Para fazer isso, você passa pelo menos três argumentos, sendo o segundo que especifica o número de itens a serem excluídos e o terceiro que indica os elementos a serem inseridos.
 * 
 * Observe que o número de elementos a serem excluídos não precisa ser igual ao número de elementos a serem inseridos.
 * 
 * Suponha que você tenha uma array de linguagens de programação com quatro elementos, como segue:
*/

//declara um array literal denso com 4 elementos
let languages = ['C', 'C++', 'Java', 'JavaScript'];

console.log("## SUBSTITUIÇÃO DE ELEMENTOS USANDO Array.splice() ##");

console.log(`ARRAY ORIGINAL = ${languages}`);

/**
 * A instrução a seguir substitui o segundo elemento por um novo.
*/

//o metodo a seguir
//splice, ira substituir um item do posição 1 do array
//primeiro argumento a posição do elemento a ser exlcuido e receber o novo elemento
//segundo argumento indica o numero de elementos a serem excluidos do array na posição passada
//o elemento a ser inserido na posição
//modifica o array original
languages.splice(1, 1, 'Python');

console.log(`ARRAY APOS USO DO SPLICE = ${languages}`); //["C", 'C++', 'Java', 'JavaScript'];

/**
 * A languages array agora ainda tem quatro elementos com o novo segundo argumento, em 'Python' vez de 'C++'. 
 * 
 * Você pode substituir um elemento por vários elementos passando mais argumentos para o splice() método da seguinte maneira:
*/

//susbstitui os elementos existetens na posição 3 do array por novos elementos a seguir
languages.splice(2, 1, 'C#', 'Swift', 'Go');

/**
 * A instrução exclui um elemento do segundo elemento, ou seja, Java e insere três novos elementos na languages array. O resultado é o seguinte.
*/

console.log(`ARRAY APOS USO DO SPLICE = ${languages}`); //["C", 'C++', 'C#', 'Swift', 'Go', 'JavaScript'];


