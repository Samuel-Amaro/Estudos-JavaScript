/**
 * * EXLCUINDO ELEMENTOS USANDO O SPLICE() MÉTODO JAVASCRIPT ARRAY
 * 
 *  Para excluir elementos em uma array, você passa dois argumentos para o splice()método da seguinte maneira:
 
    Array.splice(position, num);

 * 
 * O position especifica a posição do primeiro item a ser excluído e o argumento num determina o número de elementos a serem excluídos.
 * 
 * O splice() método altera a array original e retorna uma array que contém os elementos excluídos.
 * 
 * Vamos dar uma olhada no exemplo a seguir.
 * 
 * Suponha que você tenha uma array scores que contém cinco números de 1 a 5.
 * 
*/

//declara um array literal com 5 elementos
let scores = [1, 2, 3, 4, 5];

/**
 * A instrução a seguir exclui três elementos da scores array, começando com o primeiro elemento:
*/

console.log("## EXLCUINDO ELEMENTOS USANDO Array.splice() ##");

console.log(`antes de aplicar o Array.splice(0, 3) : array = ${scores}`);

//utilizando o method Array.splice(0, 3);
//ira excluir três elementos do array, a partir do indice 0, então sera exlcuido o 
//[1, 2, 3] elementos
//retorna um array com os elementos exlcuidos, e modifica o array original os retirando
let scoresDeleted = scores.splice(0, 3);

/**
 * A scores array agora contém dois elementos.
*/

console.log(`Apos aplicar Array.slice : array = ${scores}`); //[4, 5]

/**
 *  E a deleted Scores array contém três elementos.
*/

console.log(`Elementos deletados: ${scoresDeleted}`); //[1, 2, 3]

