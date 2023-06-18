/**
 * * FUNÇÕES ANÕNIMAS
 * 
 *  Você viu funções definidas e invocadas de maneiras ligeiramente diferentes. Até agora nós só criamos funções como esta:
*/

function minhaFuncao() {
    alert('ola');
}

/**
 * Mas você também pode criar funções que não tem nome:
*/

//  function() {
//       alert('Ola');
//  }

/**
 * Isto é chamado Função anônima — não tem nome! E também não fará nada em si mesma. Você geralmente cria funções anônimas junto com um  manipulador de eventos, o exemplo a seguir poderia rodar o código dentro da função sempre que o botão associado é clicado: 
*/

var meuBotao = document.querySelector('button');

meuBotao.onclick = function() {
    alert('hello');
    //eu posso colocar código aqui 
    //dentro o quanto eu quiser
}

/**
 *  Voce também pode atribuir uma função anônima para ser o valor de uma variável, por exemplo:
*/

var minhaSaudacao = function() {
    alert('Hello');
}

/**
 * esta função agora pode ser invocada usando:
*/

minhaSaudacao();

/**
 * Isso dá efetivamente um nome a função; você também pode atribuir uma função para ser o valor de múltiplas variáveis , por exemplo:
 *  
*/

var outraSaudacao = function() {
    alert('hello');
}

/**
 * Esta função agora pode ser invocada usando qualquer das funções abaixo:
*/

minhaSaudacao();
outraSaudacao();

/**
 * Mas isso pode simplesmente ser confuso, então não faça! Quando criar funções, é melhor ficar com apenas uma forma: 
*/

function nomeFuncao() {
    alert('Hello');
}

/**
 * De modo geral você irá usar funções anônimas só para rodar um código em resposta a um disparo de evento — como um botão ao ser clicado — usando um gerenciador de eventos. 
*/