/**
 * * EXECUÇÃO DE CÓDIGO EM RESPOSTAS A VÁRIAS PROMESSAS CUMPRIDAS
 * 
 *  O exemplo acima nos mostrou alguns dos fundamentos reais do uso de promessas. Agora vamos dar uma olhada em alguns recursos mais avançados. Para começar, o encadeamento de processos de ocorrer um após o outro é tudo muito bem, mas o que se deseja executar algum código somente após um monte de promessas têm tudo cumprida?
 * 
 * Você pode fazer isso com o Promise.all()método estático engenhosamente denominado . Isso leva uma matriz(array) de promessas como um parâmetro de entrada e retorna um novo Promise objeto que cumprirá apenas se e quando todas as promessas na matriz forem cumpridas. É mais ou menos assim:

    Promise.all([a, b, c]).then(function(values) {
          ...  
    });

    ou 

    Promisse.all([a, b, c]).then(values => {
        ...
    });

 * 
 * Se todos forem .then() cumpridos, a função do executor do bloco encadeado receberá um array contendo todos os resultados como parâmetro. Se alguma das promessas passou a ser Promise.all()rejeitada, todo o bloco irá rejeitar.
 * 
 * Isso pode ser muito útil. Imagine que estamos buscando informações para preencher dinamicamente um recurso de IU em nossa página com conteúdo. Em muitos casos, faz sentido receber todos os dados e só então mostrar o conteúdo completo, ao invés de exibir informações parciais.
 * 
 * Vamos construir outro exemplo para mostrar isso em ação.
*/