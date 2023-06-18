/**
 * * FILTER() MÉTODO ARRAY EM DETALHES
 * 
 * O seguinte ilustra a sintaxe do filter()método:
 
    arrayObject.filter(callback, contextObject);

 * 
 * O filter() método cria uma nova array com todos os elementos que passam no teste implementado pela callback() função.
 * 
 * Internamente, o filter() método itera sobre cada elemento da array e passa cada elemento para a callback função. Se a callback função retornar true, ela incluirá o elemento na array de retorno.
 * 
 * O filter() método aceita dois argumentos nomeados: uma callback função e um objeto opcional.
 * 
 * Como outros métodos iterativos do objeto Array, como every(), some(), map() e forEach(), a callback função tem a seguinte forma:
 
    function callback(currentElement, index, array) {
        //...
    } 

 *
 * A callback função leva três argumentos:

    - O currentElement argumento é o elemento atual na array que está sendo processada pela callback função.

    - O index do currentElement que está sendo processado pela callback função.

    - O array objeto que está sendo percorrido.

 * Os argumentos index e array são opcionais.
 * 
 * O contexObject argumento do filter()método é opcional. Se você passar o this valor, você pode referenciá-lo usando a this palavra-chave dentro da callback função.
 * 
 * É importante observar que o filter()método não altera a array original.
*/