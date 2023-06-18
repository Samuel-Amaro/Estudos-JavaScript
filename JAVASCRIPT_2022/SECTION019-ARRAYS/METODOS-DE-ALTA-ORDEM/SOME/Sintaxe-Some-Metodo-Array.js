/**
 * * SOME() SINTAXE DE ARRAY DE JS
 * 
 * O seguinte ilustra a sintaxe do some()método:
 
    arrayObject.some(callback[, thisArg]);

 * 
 * O some() método aceita dois argumentos:
 *
 * * 1) O CALLBACK ARGUMENTO
 * 
 * A some() função executa a callback função uma vez para cada elemento na array até encontrar aquele onde a callback função retorna um true. O some() método retorna imediatamente true e não avalia os elementos restantes.
 * 
 * Se nenhum elemento fizer com que o callback() retorne true, o some() método retornará false.
 * 
 * A callback função leva três argumentos:
 
    function callback(currentElement[[, currentIndex], array]) {
        //...
    } 

    - O currentElement é o elemento atual sendo processado na array.

    - O currentIndex é o índice do elemento atual sendo processado na array.

    - O array é array que some() foi chamado.
 
 * 
 * * 2) O thisArg argumento
 * 
 * O thisArg argumento é opcional. Se você passar o thisArg para o método, poderá usar o thisArg como o this valor dentro da callback função.
*/ 
