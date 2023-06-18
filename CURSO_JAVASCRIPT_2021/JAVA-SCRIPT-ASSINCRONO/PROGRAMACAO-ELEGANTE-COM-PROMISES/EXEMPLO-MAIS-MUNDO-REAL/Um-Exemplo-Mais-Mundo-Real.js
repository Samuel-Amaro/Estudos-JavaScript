/**
 * * UM EXEMPLO MAIS DO MUNDO REAL
 * 
 *  O exemplo acima foi mantido deliberadamente simples para tornar os conceitos fáceis de entender, mas não é realmente muito assíncrono. A natureza assíncrona é basicamente falsa usando setTimeout(), embora ainda mostre que as promessas são úteis para criar uma função personalizada com fluxo de operações sensível, bom tratamento de erros, etc.
 * 
 * Um exemplo que gostaríamos de convidar você a estudar, que mostra uma aplicação assíncrona útil do Promise()construtor, é Biblioteca idb de Jake Archibald Isso leva a API IndexedDB , que é uma API baseada em retorno de chamada de estilo antigo para armazenar e recuperar dados no lado do cliente, e permite que você a use com promessas. Se você olhar para oarquivo de biblioteca principalvocê verá o mesmo tipo de técnica que discutimos acima sendo usado lá. O bloco a seguir converte o modelo de solicitação básico usado por muitos métodos IndexedDB para usar promessas:
*/

function promisifyRequest(request) {
    return new Promise(function(resolve, reject) {
      request.onsuccess = function() {
        resolve(request.result);
      };
  
      request.onerror = function() {
        reject(request.error);
      };

    });
}

/**
 * Isso funciona adicionando alguns manipuladores de eventos que cumprem e rejeitam a promessa nos momentos apropriados:
 
    - Quando o evento de request é disparado, o manipulador cumpre a promessa com a solicitação .successonsuccess result

    - Quando o evento derequest é disparado, o manipulador rejeita a promessa com a solicitação .error onerror error
*/