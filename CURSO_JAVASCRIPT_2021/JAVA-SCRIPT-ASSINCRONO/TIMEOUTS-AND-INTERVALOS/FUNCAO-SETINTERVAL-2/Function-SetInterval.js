/**
 * * SETINTERVAL()
 * 
 * WindowOrWorkerGlobalScope.setInterval()
 * 
 * O método  setInterval() oferecido das interfaces  Windowe  Worker, repetem chamadas de funções ou executam trechos de código, com um tempo de espera fixo entre cada chamada. Isso retorna um ID único para o intervalo, podendo remover-lo mais tarde apenas o chamando  clearInterval().
 * 
 * SINTAXE:
 
    var intervalID = scope.setInterval(func, delay[, param1, param2, ...]);
    var intervalID = scope.setInterval(code, delay);

 * 
 * Parâmetros
 
    func : Uma function para ser executada a cada  delay em milissegundos. Não é passado nenhum parâmetro para a função, e não retorna nenhum valor esperado.

    code : Uma sintaxe opcional permite que você incuir uma string ao alterar de uma função, no qual é compilado e executado a cada  delayem milissegundos. Esta sintaxe não é recomendada pelos mesmos motivos que envolvem riscos de segurança de  eval().

    delay : O tempo, em milisegundos (milésimos de segundo), o temporizador deve atrasar entre cada execução de uma função específica ou código. Se esse parâmetro for menos que 10, um valor de 10 é usado.

    param1, ..., paramN Opcional : Parâmetros adicionais que são passados ​​através da função fonte pela  função  quando o temporizador expirar.

 * Valor de retorno

    O  intervalID retornado é um número, valor diferente de zero que identifica o temporizador criado pela chamada do setInterval(); este valor pode ser passado para  WindowOrWorkerGlobalScope.clearInterval() afim de cancelar o timeout.


 * 
 *  setTimeout() funciona perfeitamento quando você precisa executar algum código depois de um período de tempo. Mas o que acontece quando voce precisa executar o código de novo e de novo — por exemplo, no caso de uma animação?
 * 
 * É aí que o setInterval() entra. Ele funciona de uma maneira muito similar à setTimeout(), exceto que a função que você passar como primeiro parâmetro é executada repetidamente em não menos que um número determinado de milissegundos dado no segundo parâmetro, ao invés de apenas uma vez. Você também pode passar qualquer parâmetro sendo executado como um parâmetro subsequente da chamada de setInterval().
 * 
 * Vamos dar uma olhada em um exemplo. A função a seguir cria um novo objeto Date(), tira uma string de tempo usando toLocaleTimeString(), e depois a mostra na UI. Em seguida, ela executa a função uma vez por segundo usando setInterval(), criando o efeito de um relógio digital que é atualizado uma vez por segundo 
*/

function displayTime() {
    let date = new Date();
    let time = date.toLocaleTimeString();
    document.getElementById('demo').textContent = time;
}
 
const createClock = setInterval(displayTime, 1000);

/**
 * Assim como o setTimeout(), o setInterval() também retorna um valor identificador que você pode usar depois para cancelar o intervalo.
 * 
 * * CANCELANDO INTERVALOS
 * 
 * WindowOrWorkerGlobalScope.clearInterval()
 * 
 * O clearInterval()método do WindowOrWorkerGlobalScope mixin cancela uma ação cronometrada e repetitiva que foi previamente estabelecida por uma chamada para setInterval().
 * 
 * Sintaxe
 
    clearInterval(intervalID)

 * 
 * PARÂMETROS
 * 
 * intervalID : O identificador da ação repetida que você deseja cancelar. Esse ID foi retornado pela chamada correspondente para setInterval().
 * 
 *  setInterval() continua sua execução para sempre, a menos que você faça algo sobre isso. Você provavelmente quer um jeito de parar tais tarefas, do contrário você pode acabar com error quando o navegador não puder completar outras versões futuras da tarefa, ou se a animação acabar. Você pode fazer isso do mesmo jeito que você para timeouts — passando o identificador retornado por setInterval() para a função clearInterval():
*/

const myInterval = setInterval(myFunction, 2000);

clearInterval(myInterval);