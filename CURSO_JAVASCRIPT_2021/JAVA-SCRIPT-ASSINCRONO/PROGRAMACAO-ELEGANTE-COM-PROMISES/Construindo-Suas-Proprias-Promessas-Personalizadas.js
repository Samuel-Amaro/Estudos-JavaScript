/**
 * * CONSTRUINDO SUAS PRÓPRIAS PROMESSAS PERSONALIZADAS
 * 
 *  A boa notícia é que, de certa forma, você já construiu suas próprias promessas. Depois de encadear várias promessas com .then() blocos, ou combiná-las de outra forma para criar uma funcionalidade personalizada, você já está criando suas próprias funções assíncronas baseadas em promessa. Veja nossa fetchAndDecode() função dos exemplos anteriores, por exemplo.
 * 
 * Combinar diferentes APIs baseadas em promessas para criar funcionalidade personalizada é de longe a maneira mais comum de fazer coisas personalizadas com promessas e mostra a flexibilidade e o poder de basear a maioria das APIs modernas em torno do mesmo princípio. Porém, há outra maneira.
 * 
 * * USANDO O CONTRUTOR PROMISSE()
 * 
 * É possível construir suas próprias promessas usando o Promise()construtor. A principal situação em que você deseja fazer isso é quando você tem um código baseado em uma API assíncrona da velha escola que não é baseada em promessa, que você deseja prometer. Isso é útil quando você precisa usar código de projeto, bibliotecas ou estruturas existentes e mais antigas, juntamente com código moderno baseado em promessa.
 * 
 * Vamos dar uma olhada em um exemplo simples para você começar - aqui encerramos uma setTimeout() chamada com uma promessa - que executa uma função após dois segundos que resolve a promessa (usando a resolve()chamada passada ) com uma string de "Sucesso!"
*/

let timeoutPromisse = new Promisse(function(resolve, reject) {
    //chama a função resolve(), apos passar dois segundos
    setTimeout(function() {
        resolve('Sucesso!');
    }, 2000);
});

/**
 * resolve()e reject()são funções que você chama para cumprir ou rejeitar a promessa recém-criada. Nesse caso, a promessa é cumprida com uma sequência de "Sucesso!".
 * 
 * Então, quando você chama essa promessa, você pode encadear um .then() bloco no final dela e ele receberá uma sequência de "Sucesso!". No código a seguir, simplesmente alertamos essa mensagem:
*/

timeoutPromisse.then(function(message) {
    alert(message);
});

/**
 * ou mesmo apenas
*/

timeoutPromisse.then(alert);

/**
 * * REJEITANDO UMA PROMESSA PERSONALIZADA
 * 
 *  Podemos criar uma promessa que rejeita usando o reject()método - da mesma forma resolve(), isso assume um único valor, mas neste caso é o motivo da rejeição com, ou seja, o erro que será passado para o .catch()bloco.
 * 
 * Vamos estender o exemplo anterior para ter algumas reject()condições, bem como permitir que mensagens diferentes sejam transmitidas em caso de sucesso.
*/