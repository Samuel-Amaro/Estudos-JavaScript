/**
 * Um EventListener é chamado sempre quando um MessageEvent do tipo message é passado através do worker — ou seja, quando uma mensagem é enviada para o documento pai do worker via DedicatedWorkerGlobalScope.postMessage. A mensagem é armazenada na propriedade de dados do evento data.
*/
//por meio desse evento onmessage o worker vai receber a mensagem enviada do script pai global
//a mensagem pode ser acessada usando uma propriedade data, mas a mensageam aqui não importa, aqui quando a mensagem e recebida e tratada com uma função anonima que executa uma tarefa
Worker.prototype.onmessage = function() {
    //variavel
    let myDate;
    //um for de 10 milhões de iteração
    for(let i = 0; i < 10000000; i++) {
        //instancia um novo objeto da class Date
        let date = new Date();
        myDate = date;
    }

    //Envia uma mensagem — qual pode consistir de qualquer objeto do JavaScript — para o escopo interno do worker.
    // Clona a mensagem e a transmite para o ambiente global do worker para a thead pai. transfer pode ser passada como uma lista de objetos que devem ser transferidos em vez de clonados.
    Worker.prototype.postMessage(myDate);
}



