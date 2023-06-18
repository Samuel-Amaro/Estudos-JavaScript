/**
 * * MAS COMO ISSO FUNCIONA ?
 * 
 *  Você notará que empacotamos o código dentro de uma função e incluímos a async palavra - chave antes da function palavra - chave. Isso é necessário - você deve criar uma função assíncrona para definir um bloco de código no qual executará seu código assíncrono; como dissemos antes, await só funciona dentro de funções assíncronas.
 * 
 * Dentro da myFetch() definição da função, você pode ver que o código se parece muito com a versão anterior da promessa, mas existem algumas diferenças. Em vez de precisar encadear um .then()bloco no final de cada método baseado em promessa, você só precisa adicionar uma await palavra - chave antes da chamada do método e, em seguida, atribuir o resultado a uma variável. A await palavra-chave faz com que o tempo de execução do JavaScript pause seu código nesta linha, não permitindo que outros códigos sejam executados até que a chamada de função assíncrona retorne seu resultado - muito útil se o código subsequente depender desse resultado!
 * 
 * Depois de concluído, seu código continua a ser executado, começando na próxima linha. Por exemplo:
*/

//O AWAIT ASSEGURA QUE fetch retorne seu resultado antes de executar qualquer outro codigo
let response = await fetch('coffee.jpg');

/**
 * A resposta retornada pela fetch()promessa cumprida é atribuída à response variável quando essa resposta se torna disponível e o analisador pausa nesta linha até que isso ocorra. Assim que a resposta estiver disponível, o analisador se move para a próxima linha, que cria um Blob fora dela. Essa linha também invoca um método assíncrono baseado em promessa, portanto, usamos await aqui também. Quando o resultado da operação retorna, nós o devolvemos da myFetch() função.
 * 
 * Isso significa que, quando chamamos a myFetch()função, ela retorna uma promessa, então podemos encadear um .then()no final dela, dentro do qual manipulamos a exibição do blob na tela.
 * 
 * Você provavelmente já está pensando "isso é muito legal!", E está certo - menos .then() blocos para envolver o código e, na maioria das vezes, parece apenas um código síncrono, por isso é realmente intuitivo.
 * 
 * * ADICIONANDO TRATAMENTO DE ERROS
 * 
 * E se você deseja adicionar tratamento de erros, você tem algumas opções.
 * 
 * Você pode usar uma try...catchestrutura síncrona com async/ await. Este exemplo se expande na primeira versão do código que mostramos acima:
*/

async function myFetch() {
    //Faça
    try {
      let response = await fetch('coffee.jpg');
  
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      let myBlob = await response.blob();
      let objectURL = URL.createObjectURL(myBlob);
      let image = document.createElement('img');
      image.src = objectURL;
      document.body.appendChild(image);

      //erro
    } catch(e) {
      console.log(e);
    }
}
  
myFetch();

/**
 * O catch() {}bloco recebe um objeto de erro, que chamamos e; agora podemos registrar isso no console, e isso nos dará uma mensagem de erro detalhada mostrando onde o erro foi lançado no código.
 * 
 *  Se você quiser usar a segunda versão (refatorada) do código que mostramos acima, será melhor apenas continuar a abordagem híbrida e encadear um .catch() bloco no final da .then()chamada, assim:
*/

async function myFetch() {
    let response = await fetch('coffee.jpg');
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.blob();
  
  }
  
myFetch().then((blob) => {
    let objectURL = URL.createObjectURL(blob);
    let image = document.createElement('img');
    image.src = objectURL;
    document.body.appendChild(image);
})
.catch((e) =>
    console.log(e)
);

/**
 * Isso ocorre porque o .catch() bloco detectará erros que ocorrem na chamada de função assíncrona e na cadeia de promessa. Se você usou o bloco try/ catch aqui, ainda pode obter erros não tratados na myFetch()função quando ela for chamada. 
*/