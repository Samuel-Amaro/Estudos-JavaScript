/**
 * * EXECUTAR ALGUM CÓDIGO APÓS UMA PROMESSA CUMPRIR/REJEITAR
 * 
 *  Haverá casos em que você deseja executar um bloco final de código após a conclusão de uma promessa, independentemente de ela ter sido cumprida ou rejeitada. Anteriormente, você teria que incluir o mesmo código nos retornos de chamada .then()e .catch(), por exemplo:
*/

myPromise
.then(response => {
  doSomething(response);
  runFinalCode();
})
.catch(e => {
  returnError(e);
  runFinalCode();
});

/**
 * Em navegadores modernos mais recentes, o .finally()método está disponível, que pode ser encadeado no final de sua cadeia de promessa regular, permitindo que você reduza a repetição de código e faça as coisas de maneira mais elegante. O código acima agora pode ser escrito da seguinte forma: 
*/

myPromise
.then(response => {
  doSomething(response);
})
.catch(e => {
  returnError(e);
})
.finally(() => {
  runFinalCode();
});

/**
 * Para um exemplo real, dê uma olhada em nosso promessa-finalmente.html demo (Veja o Código fontetb). Isso funciona exatamente da mesma forma que a Promise.all()demonstração que vimos na seção acima, exceto que, na fetchAndDecode() função, encadeamos uma finally()chamada ao final da cadeia: 
*/

function fetchAndDecode(url, type) {
    return fetch(url).then(response => {
      if(type === 'blob') {
        return response.blob();
      } else if(type === 'text') {
        return response.text();
      }
    })
    .catch(e => {
      console.log(`There has been a problem with your fetch operation for resource "${url}": ` + e.message);
    })
    .finally(() => {
      console.log(`fetch attempt for "${url}" finished.`);
    });
}