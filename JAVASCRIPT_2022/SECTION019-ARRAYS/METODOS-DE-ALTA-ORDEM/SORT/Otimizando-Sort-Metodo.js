/**
 * * OTIMIZANDO O SORT() MÉTODO JS ARRAY
 * 
 * Na verdade, o sort() método chama a função de comparação várias vezes para cada elemento da array.
 * 
 * Veja o seguinte exemplo: 
*/

//declara um array literal com 5 elementos para inicializar
//um array dense, com nomes de rios famosos
let rivers = ['Nile', 'Amazon', 'Congo', 'Missisiippi', 'Rio-Grande'];

//chama o metodo de classificação, para classificar elementos em ordem crescente
//mas o modo de classificação e de string 
//elementos são classificados em ordem crescente de caracteres ASCII alfabeticamente.
//passando uma funçaõ como argumento para sort que ira controla o tipo da classificação de cada elemento
rivers.sort(function(a, b) {
    console.log(a, b);
    //exemplo: posição (a) - (b) gerar um resultado negativo, significa que tem que trocar de posição para classificar, (a) vem primeiro que (b), isso e (a) e inferior a (b), qualquer resultado menor que 0 (a) vem antes de (b). isso e (a) e menor que (b).
    //se (a) for maior que (b) na subtração abaixo resulta em um resultado > 0 isso e classifica (b) para um indice inferior a (a), (b) e menor que (a).
    //se (a) for igual a (b) e a subtração resulta em (0) não classficia e nem troca as posições.
    return a.length - b.length;
});

/**
 *  Como funciona:
 
    1. Primeiro, declare uma matriz rivers que consiste nos nomes de rios famosos.

    2. Em segundo lugar, classifique a rivers array pelo comprimento de seu elemento usando o sort() método. Produzimos os elementos da rivers array para o console da web sempre que o sort()método invoca a função de comparação.

 * 
 * Conforme mostrado na saída acima, cada elemento foi avaliado várias vezes, por exemplo, Amazon 4 vezes, Congo 2 vezes, etc.
 * 
 * Se o número de elementos da array estiver aumentando, isso diminuirá potencialmente o desempenho.
 * 
 * Você não pode reduzir o número de vezes que a função de comparação é executada. No entanto, você pode reduzir o trabalho que a comparação precisa fazer. Essa técnica é chamada de Transformação de Schwartzian.
 * 
 * Para implementar isso, siga estas etapas:
 
    1. Primeiro, extraia os valores reais em uma array temporária usando o método map ().

    2. Em segundo lugar, classifique o array temporário com os elementos que já foram avaliados (ou transformados).

    3. Terceiro, percorra o array temporário para obter um array com a ordem correta.
*/

//array temporário contém objetos com posição
//e comprimento do elemento
var lengths = rivers.map(function(e, i) {
    return {index: i, value: e.length};
});

//classificando a array de comprimentos contendo os comprimentos de
//nomes dos rios
lengths.sort(function(a, b) {
    return +(a.value > b.value) || +(a.value === b.value) - 1;
});

//copia o elemento de volta para o array
var sortedRivers = lengths.map(function(e) {
    return rivers[e.index];
});

console.log(sortedRivers);
