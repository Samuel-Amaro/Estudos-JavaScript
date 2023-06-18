/**
 * * O PROBLEMA COM CHAMADAS DE RETORNO(CALLBACK)
 * 
 *  Para entender completamente por que as promessas são uma coisa boa, é útil pensar em retornos de chamada do velho estilo e avaliar por que eles são problemáticos.
 * 
 * Vamos falar sobre pedir pizza como uma analogia. Existem certas etapas que você deve seguir para que seu pedido seja bem-sucedido, que realmente não faz sentido tentar executar fora de ordem ou em ordem, mas antes de cada etapa anterior ter sido concluída:
 
    1. Você escolhe quais coberturas você deseja. Isso pode demorar um pouco se você estiver indeciso e pode falhar se você simplesmente não conseguir se decidir ou decidir comer um curry.

    2. Em seguida, você faz seu pedido. Isso pode demorar um pouco para devolver uma pizza e pode falhar se o restaurante não tiver os ingredientes necessários para cozinhá-la.

    3. Você então pega sua pizza e come. Isso pode falhar se, digamos, você esqueceu sua carteira e não pode pagar pela pizza!

 * 
 * 
 * Com retornos de chamada(CALLBACK) no estilo antigo , uma representação de pseudocódigo da funcionalidade acima pode ser parecida com esta:
 *  
*/

chooseToppings(function(toppings) {
    placeOrder(toppings, function(order) {
      collectOrder(order, function(pizza) {
        eatPizza(pizza);
      }, failureCallback);
    }, failureCallback);
}, failureCallback);

/**
 * Isso é confuso e difícil de ler (muitas vezes referido como "inferno de retorno de chamada"), requer que o failureCallback()seja chamado várias vezes (uma para cada função aninhada), com outros problemas além.
 * 
 * * MELHORIAS COM PROMISSES(PROMESSAS)
 * 
 * As promessas tornam as situações acima muito mais fáceis de escrever, analisar e executar. Se representássemos o pseudocódigo acima usando promessas assíncronas, terminaríamos com algo assim:
 * 
*/

chooseToppings()
.then(function(toppings) {
  return placeOrder(toppings);
})
.then(function(order) { //EXECUTA SE A OPERAÇÃO ANTERIOR ESTIVER SIDO CONCLUIDA
  return collectOrder(order);
})
.then(function(pizza) { //EXECUTA SE AS OPERAÇÕES ANTERIORES ESTIVEREM SIDO CONCLUIDAS
  eatPizza(pizza);
})
.catch(failureCallback); //TRATA TODOS OS ERROS DE QUALQUER OPERAÇÃO

/**
 * Isso é muito melhor - é mais fácil ver o que está acontecendo, nós só precisamos de um único .catch() bloco para lidar com todos os erros, ele não bloqueia o thread principal (para que possamos continuar jogando videogame enquanto esperamos a pizza estar pronto para coletar), e cada operação terá a garantia de aguardar a conclusão das operações anteriores antes de executar. Somos capazes de encadear várias ações assíncronas para ocorrer uma após a outra desta forma porque cada .then()bloco retorna uma nova promessa que é resolvida quando o .then() bloco termina de ser executado. Inteligente, certo?
 * 
 * Usando funções de seta, você pode simplificar o código ainda mais:
*/

chooseToppings()
.then(toppings =>
  placeOrder(toppings)
)
.then(order =>
  collectOrder(order)
)
.then(pizza =>
  eatPizza(pizza)
)
.catch(failureCallback);

/**
 * Ou mesmo isto:
*/

chooseToppings()
.then(toppings => placeOrder(toppings))
.then(order => collectOrder(order))
.then(pizza => eatPizza(pizza))
.catch(failureCallback);

/**
 * Isso funciona porque com funções de seta () => x é uma abreviação válida para () => { return x; }. 
 * 
 * Você poderia até fazer isso, já que as funções apenas passam seus argumentos diretamente, então não há necessidade dessa camada extra de funções:
*/

chooseToppings().then(placeOrder).then(collectOrder).then(eatPizza).catch(failureCallback);

/**
 * No entanto, isso não é tão fácil de ler e essa sintaxe pode não ser utilizável se seus blocos forem mais complexos do que o que mostramos aqui. 
 * 
 * Basicamente, as promessas são semelhantes aos ouvintes de eventos, mas com algumas diferenças:
 
    - Uma promessa só pode ter sucesso ou falhar uma vez. Ele não pode ter sucesso ou falhar duas vezes e não pode mudar de sucesso para falha ou vice-versa, uma vez que a operação foi concluída.

    - Se uma promessa foi bem-sucedida ou falhou e mais tarde você adicionar um retorno de chamada de sucesso / falha, o retorno de chamada correto será chamado, mesmo que o evento tenha ocorrido antes.
    
*/