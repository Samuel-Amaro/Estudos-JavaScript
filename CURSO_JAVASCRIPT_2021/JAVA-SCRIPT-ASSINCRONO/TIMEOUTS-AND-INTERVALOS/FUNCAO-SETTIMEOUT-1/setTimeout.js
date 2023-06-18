/**
 *  * SETTIMEOUT()
 * 
 * WindowOrWorkerGlobalScope.setTimeout()
 * 
 * O setTimeout() método do mixin define um cronômetro que executa uma função ou parte do código especificado quando o cronômetro expira.
 * 
 * SINTAXE:
 
    var timeoutID = setTimeout(function[, delay, arg1, arg2, ...]);
    var timeoutID = setTimeout(function[, delay]);
    var timeoutID = setTimeout(code[, delay]);

 * 
 * Como foi dito anteriormente, o setTimeout() executa um bloco de código particular depois que um determinado período de tempo passou. Ele toma os seguintes parâmetros:
 
    - Uma função a ser executada, ou uma referência de uma função definida em outro lugar.

    - Um número representando o intervalo de tempo em milissegundos (1000 milissegundos equivalem a 1 segundo) para esperar antes de executar o código. Se você especificar um valor de 0 (ou simplesmente omitir o valor), a função será executada assim que possível (mas não imediatamente).

    - Zero ou mais valores que representam quaisquer parâmetros que você quiser passar para a função quando ela for executada.

 *  
 * NOTA: O tempos especificaDo não é o tempo garantido de execução, mas sim o tempo mínimo de execução. As callback que você passa para essas funções não podem ser executadas até que a main thread esteja vazia. Como consequência, códigos como setTimeout(fn, 0) serão executados assim que a fila estiver vazia, não imediatamente. Se você executar código como setTimeout(fn, 0) e depois imediatamente executar um loop que conta de 1 a 10 bilhões, sua callback será executada depois de alguns segundos.
 * 
 * No exemplo a seguir, o navegador vai esperar dois segundos antes de executar a função anônima, e depois vai mostrar a mensagem de alerta
 * 
*/

let myGreeting = setTimeout(function() {
    alert('Hello, Mr. Universe!');
}, 2000);

/**
 * As funções especificadas não tem que  ser anônimas. Você pode dar o nome da função, e até mesmo definir ela em outro lugar e passar uma referência para o timeout setTimeout(). As versões a seguir do código são equivalentes à primeira:
*/

// With a named function
let myGreeting = setTimeout(function sayHi() {
    alert('Hello, Mr. Universe!');
}, 2000)
  
// With a function defined separately
function sayHi() {
    alert('Hello Mr. Universe!');
}
  
let myGreeting = setTimeout(sayHi, 2000);

/**
 * Isso pode ser útil se você tem uma função que precisa ser chamada de um timeout e também em resposta à um evento, por exemplo. Mas também pode servir para manter seu código organizado, especialmente se a callback timetout é mais do que algumas linhas de código.
 * 
 * setTimeout() retorna um valor identificador que pode ser usado para se referir ao timeout depois, como em quando você que pará-lo. Veja Cancelando timetous (abaixo) e aprenda como fazer isso.
 * 
 * * PASSANDO PARÂMETROS PARA UMA FUNÇÃO setTimeout()
 * 
 * Quaisquer parâmetros que você quiser passar para a função sendo executada dentro do setTimeout() devem ser passados como parâmetros adicionais no final da lista.
 * 
 * Por exemplo, você pode mudar a função anterior para que ela diga oi para qualquer nome que foi passada para ela:
*/

function sayHi(who) {
    alert(`Hello ${who}!`);
}

/**
 * Agora, você pode passar o nome da pessoa no setTimeout() como um terceiro parâmetro:
*/

let myGreeting = setTimeout(sayHi, 2000, 'Mr. Universe');

/**
 * * CANCELANDO TIMEOUTS
 * 
 *  Finalmente, se um timeout foi criado, você pode cancelá-lo antes que o tempo especificado tenha passado, chamando clearTimeout(), passando para o identificador a chamada setTimeout() como um parâmetreo. então para cancelar o timeout acima, você fará isso:
*/

//WindowTimers.clearTimeout ()
//O método clearTimeout()do escopo cancela um timeout estabelecido pela função. WindowOrWorkerGlobalScope.setTimeout()
//Sintaxe
//escopo.clearTimeout(timeoutID)
//timeoutID: O ID do timeout que você deseja cancelar. Esse ID é o retorno da função setTimeout().
clearTimeout(myGreeting);