/**
 * * MÉTODO JAVASCRIPT ARRAY MAP() EM DETALHES
 * 
 *  O seguinte ilustra o map() método.
 
    arrayObject.map(callback[, contextObject]);

 * 
 * O map() método chama uma função de retorno de chamada(callback) em cada elemento de uma array e retorna uma nova array que contém os resultados.
 * 
 * O map() método leva dois argumentos nomeados, o primeiro é obrigatório, enquanto o segundo é opcional.
 * 
 * Semelhante ao outro método iterativo, tais como every(), some(), filter(), forEach() e  sort(), a callback() função tem a seguinte forma:
 
    function callback(currentElement, index, array) {
        //...
    }

 * 
 * A callback() função leva três argumentos:
 
    - O currentElement é o elemento atual da array que está sendo processada.

    - O index é o índice do currentElement

    - O array é o objeto de array que está sendo percorrido.

 * 
 * O currentElement é obrigatório enquanto os argumentos index e array são opcionais.
 * 
 * Se você passar o contextObject para o map()método, poderá fazer referência ao contextObject dentro da callback() função usando a this palavra - chave.
 * 
 * É importante observar que o map() método não altera o array original, ele cria um novo array de todos os elementos que foram transformados pela função de retorno de chamada.
*/