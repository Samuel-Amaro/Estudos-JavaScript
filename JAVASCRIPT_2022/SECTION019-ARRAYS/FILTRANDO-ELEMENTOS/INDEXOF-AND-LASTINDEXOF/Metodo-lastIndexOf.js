/**
 * * LASTINDEXOF() METODO DE ARRAY JS
 * 
 *  O tipo Array tem outro método chamado lastIndexOf() que fornece a funcionalidade semelhante ao indexOf() método.
 * 
 * O seguinte ilustra a sintaxe do lastIndexOf() método:
 
    Array.lastIndexOf(searchElement[, fromIndex = Array.length - 1]);

 * 
 * O lastIndexOf() método retorna o índice da última ocorrência de searchElement na array. Ele retorna -1 se não puder encontrar o elemento.
 *
 * Diferente do indexOf() método, o lastIndexOf() método procura o elemento de trás para frente, começando em fromIndex.
 * 
 * As instruções a seguir retornam os últimos índices dos números 10 e 20 na scores array.
*/

//declara um array literal e o inicializa com 6 elementos, e um array denso, não ordenado
var scores2 = [10, 20, 30, 10, 40, 20];

//o metodo do array tipo lastIndexOf
//ira retorna o indice da ultima ocorrencia do elemento na array
console.log(`[${scores2}] possui a ocorrencia do valor = ${10} em qual indice ? ${scores2.lastIndexOf(10)}`); //indice 3
console.log(`[${scores2}] possui a ocorrencia do valor = ${20} em qual indice ? ${scores2.lastIndexOf(20)}`); //indice 5

/** 
 *  Como o número 50 não está na scores array, a seguinte instrução retorna -1
*/

console.log(`[${scores2}] possui a ocorrencia do valor = ${50} em qual indice ? ${scores2.lastIndexOf(50)}`); //-1 significa que nenhuma ocorrencia do elemento foi encontrado no array

/**
 * Neste tutorial, você aprendeu como usar a array indexOf() e lastIndexOf() métodos JavaScript para localizar um elemento na array. 
*/