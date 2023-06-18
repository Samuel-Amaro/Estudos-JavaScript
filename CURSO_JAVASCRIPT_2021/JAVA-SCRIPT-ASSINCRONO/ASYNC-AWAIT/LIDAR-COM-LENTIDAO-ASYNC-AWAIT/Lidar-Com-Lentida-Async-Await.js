/**
 * * LIDAR COM LENTIDÃO ASYNC/AWAIT
 * 
 *  Async / await faz seu código parecer síncrono e, de certa forma, faz com que ele se comporte de maneira mais síncrona. A awaitpalavra-chave bloqueia a execução de todo o código que a segue até que a promessa seja cumprida, exatamente como faria com uma operação síncrona. Ele permite que outras tarefas continuem em execução nesse ínterim, mas o código esperado é bloqueado. Por exemplo:
*/

//declarando uma função assincrona
async function makeResult(items) {
    let newArr = [];
    for (let index = 0; index < newArr.length; index++) {
        //add o item no final do array
        newArr.push('word_' + index);
    }
    //retorna o array
    return newArr;
}

//declarando uma outra função assincrona
async function getResult() {
    //a await vai bloqueiar o resto do codigo ate que o makeResult() seja executado por completo ate retorna o array
    //enquanto isso nenhum outro codigo e executado
    let result = await makeResult(items); //Bloqueado nesta linha
    useTharResult(result); //Não será executado antes de makeResult () ser feito
}

/**
 *  Como resultado, seu código pode ser retardado por um número significativo de promessas aguardadas acontecendo uma após a outra. Cada um awaitvai esperar que o anterior termine, enquanto na verdade o que você pode querer é que as promessas comecem a ser processadas simultaneamente, como fariam se não estivéssemos usando async / await.
 * 
 * Vejamos dois exemplos - slow-async-await.html (Vejo Código fonte) e fast-async-await.html (Vejo Código fonte) Ambos começam com uma função de promessa personalizada que simula um processo assíncrono com uma setTimeout() chamada:
*/

function timeoutPromise(interval) {
    return new Promise(function(resolve, reject) {
      setTimeout(function(){
        resolve("done");
      }, interval);
    });
};

/**
 * Então, cada um inclui uma timeTest()função assíncrona que aguarda três timeoutPromise()chamadas: 
*/

async function timeTest() {
    //...
}

/**
 * Cada um termina registrando uma hora de início, vendo quanto tempo a timeTest()promessa leva para ser cumprida, depois registrando uma hora de término e relatando quanto tempo a operação levou no total:
 *  
*/

let startTime = Date.now();
timeTest().then(() => {
  let finishTime = Date.now();
  let timeTaken = finishTime - startTime;
  alert("Time taken in milliseconds: " + timeTaken);
})

/**
 * É a timeTest()função que difere em cada caso.
 * 
 *  No slow-async-await.html exemplo, timeTest()tem a seguinte aparência:
*/

async function timeTest() {
    await timeoutPromise(3000);
    await timeoutPromise(3000);
    await timeoutPromise(3000);
}

/**
 * Aqui aguardamos as três timeoutPromise()chamadas diretamente, fazendo cada uma alertar após 3 segundos. Cada um subsequente é forçado a esperar até que o último termine - se você executar o primeiro exemplo, verá a caixa de alerta relatando um tempo total de execução de cerca de 9 segundos. 
 * 
 * No fast-async-await.htmlexemplo, timeTest()tem a seguinte aparência:
 * 
 * 
*/

async function timeTest() {
    const timeoutPromise1 = timeoutPromise(3000);
    const timeoutPromise2 = timeoutPromise(3000);
    const timeoutPromise3 = timeoutPromise(3000);
  
    await timeoutPromise1;
    await timeoutPromise2;
    await timeoutPromise3;
}

/**
 * Aqui, armazenamos os três Promise objetos em variáveis, o que tem o efeito de disparar seus processos associados, todos rodando simultaneamente.
 * 
 * Em seguida, aguardamos seus resultados - porque as promessas começaram a ser processadas essencialmente ao mesmo tempo, as promessas todas serão cumpridas ao mesmo tempo; ao executar o segundo exemplo, você verá a caixa de alerta relatando um tempo total de execução de pouco mais de 3 segundos!
 * 
 * * MANIPULAÇÃO DE ERROS
 * 
 * No entanto, há um problema com o padrão acima - ele pode levar a erros não tratados.
 * 
 * Vamos atualizar os exemplos anteriores, desta vez adicionando uma promessa rejeitada e uma catch declaração no final:
*/

function timeoutPromiseResolve(interval) {
    return new Promise(function(resolve, reject) {
      setTimeout(function(){
        resolve("successful");
      }, interval);
    });
};
  
function timeoutPromiseReject(interval) {
    return new Promise(function(resolve, reject) {
      setTimeout(function(){
        reject("error");
      }, interval);
    });
};
  
async function timeTest() {
    await timeoutPromiseResolve(5000);
    await timeoutPromiseReject(2000);
    await timeoutPromiseResolve(3000);
}
  
let startTime = Date.now();
timeTest().then(function() {})
  .catch(function(e) {
    console.log(e);
    let finishTime = Date.now();
    let timeTaken = finishTime - startTime;
    alert("Time taken in milliseconds: " + timeTaken);
});


/**
 * No exemplo acima, o erro é tratado corretamente e o alerta aparece após aproximadamente 7 segundos.
 * 
 * Agora no segundo padrão:
*/

function timeoutPromiseResolve(interval) {
    return new Promise(function(resolve, reject) {
      setTimeout(function(){
        resolve("successful");
      }, interval);
    });
};
  
function timeoutPromiseReject(interval) {
    return new Promise(function(resolve, reject) {
      setTimeout(function(){
        reject("error");
      }, interval);
    });
};
  
async function timeTest() {
    const timeoutPromiseResolve1 = timeoutPromiseResolve(5000);
    const timeoutPromiseReject2 = timeoutPromiseReject(2000);
    const timeoutPromiseResolve3 = timeoutPromiseResolve(3000);
  
    await timeoutPromiseResolve1;
    await timeoutPromiseReject2;
    await timeoutPromiseResolve3;
}
  
let startTime = Date.now();
timeTest().then(function() {
}).catch(function(e) {
    console.log(e);
    let finishTime = Date.now();
    let timeTaken = finishTime - startTime;
    alert("Time taken in milliseconds: " + timeTaken);
});

/**
 * Neste exemplo, temos um erro não tratado no console (após 2 segundos) e o alerta aparece após aproximadamente 5 segundos.
 * 
 * Para iniciar as promessas em paralelo e detectar o erro corretamente, poderíamos usar Promise.all(), conforme discutido anteriormente:
*/

function timeoutPromiseResolve(interval) {
    return new Promise(function(resolve, reject) {
      setTimeout(function(){
        resolve("successful");
      }, interval);
    });
};
  
function timeoutPromiseReject(interval) {
    return new Promise(function(resolve, reject) {
      setTimeout(function(){
        reject("error");
      }, interval);
    });
};
  
async function timeTest() {
    const timeoutPromiseResolve1 = timeoutPromiseResolve(5000);
    const timeoutPromiseReject2 = timeoutPromiseReject(2000);
    const timeoutPromiseResolve3 = timeoutPromiseResolve(3000);
    
    //espera bloqueia o resto do codigo abaixo até que todas as promessa tenham sido resolvidas e retornada o valor
    const results = await Promise.all([timeoutPromiseResolve1, timeoutPromiseReject2, timeoutPromiseResolve3]);
    return results;
  }
  
let startTime = Date.now();
timeTest().then(function() {
}).catch(function(e) {
    console.log(e);
    let finishTime = Date.now();
    let timeTaken = finishTime - startTime;
    alert("Time taken in milliseconds: " + timeTaken);
});

/**
 * Neste exemplo, o erro é tratado corretamente após cerca de 2 segundos e também vemos o alerta após cerca de 2 segundos.
 * 
 *  As Promise.all()rejeições quando qualquer uma das promessas de entrada é rejeitada. Se você quiser que todas as promessas sejam cumpridas e depois usar alguns de seus valores cumpridos, mesmo quando alguns deles forem rejeitados, você pode usar em seu Promise.allSettled() lugar.
*/