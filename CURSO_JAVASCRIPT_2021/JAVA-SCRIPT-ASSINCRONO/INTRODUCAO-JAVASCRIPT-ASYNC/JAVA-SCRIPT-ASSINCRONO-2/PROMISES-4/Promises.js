/**
 * * PROMISSES
 * 
 *  Promises são uma nova maneira de escrever código assíncrono que você verá em APIs Web modernas. Um bom exemplo disso é a API fetch(), que é basicamente uma versão mais moderna e eficiente de XMLHttpRequest. Vamos dar uma olhada em um exemplo rápido, do nosso artigo de Pegando dados do servidor:
*/

fetch('products.json').then(function(response) {
    return response.json();
}).then(function(json) {
    products = json;
    initialize();
}).catch(function(err) {
    console.log('Fetch problem: ' + err.message);
});

/**
 * Aqui nós vemos fetch() pegando um único parâmetro — a URL de um recurso que você quer pegar da rede — e retornando uma promise. A promise é um objeto que representa a conclusão ou falha da operação assíncrona. Ela represente um estado intermediário, por assim dizer. É praticamente o jetio do navegador de dizer "Eu prometo voltar para você com a resposta o mais rápido possível", daí o nome "promessa".
 * 
 * Você pode levar um tempo para se acostumar com esse conceito; Ele se parece um pouco com o Gato de Schrödinger em ação. Nenhum dos possíveis resultados aconteceu ainda, então a operação fetch está esperando pelo resultado do navegador que vai completar a operação em algum ponto no futuro.
 * 
 * Nós temos três blocos de código encadeados ao fim do fetch():
 
    - Dois blocos then(). Ambos contém uma função callback que será executada se a operação anterior for executada, então você pode fazer algo com o resultado. Cada bloco .then() retorna outra promise, o que significa que você pode encadear múltiplos blocos .then() um ao outro, para que múltiplas operações assíncronas possam ser executadas uma atrás da outra.

    - O bloco catch() no final será executado em casos em que erros ocorrem quando um dos .then() falhe — de um modo similar aos blocos try...catch síncronos, um objeto de erro fica disponível dentro do catch(), e pode ser usado para reportar erros que ocorreram. Note que o bloco try...catch não funcionará com promises, embora funcione com async/await, como você aprenderá mais adiante.

    - Nota: Você vai aprender mais sobre promises mais tarde no módulo, então não se preocupe se você não entendeu muito bem.

 * 
 * * A FILA DE EVENTOS
 * 
 * Operações assíncronas como as promises são colocadas em uma fila de eventos, que é executada depois que a main thread terminar de ser processada. As operações serão completadas assim que for possível e depois retornam seus resultados para o ambiente JavaScript.
 * 
 * * PROMISES VERSUS CALLBACKS
 * 
 * As promises tem algumas semelhanças com as callbacks. Elas são basicamente um objeto retornado em que você vincula funções callback, ao invés de passar as callbacks para uma função.
 * 
 * Entretanto, as promises são feitas especificamente para lidarmos com operações async, e ter muitas vantagens sobre as velhas callbacks:
 
  - Você pode encadear múltiplas operações assíncronas usando múltiplos blocos .then(), passando o resultado de uma delas como o resultado como parâmetro da próxima operação. Isso é muito mais difícil de se fazer usando as callback, que normalmente termina em algo chamado de callback hell.

  - As callbacks das promises sempre são chamadas na ordem estrita em quesão colocadas na fila de eventos.

  - O tratamento de erros é muito melhor — todos os erros são tratados por um único bloco .catch() no final do encadeamento, ao invés de ser tratado individualmente em cada função callback.

  - Promessas evitam inversão de controle. Ao contrário das callbacks, que perdem totalmente o controle de como a função será executada quando passada para uma biblioteca de terceiros.
*/