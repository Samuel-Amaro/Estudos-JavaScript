/**
 * * ESPERANDO UMA PROMISE.ALL()
 * 
 *  async / await é baseado em promises , por isso é compatível com todos os recursos oferecidos por promessas. Isso inclui Promise.all() - você pode esperar alegremente uma Promise.all() chamada para obter todos os resultados retornados em uma variável de uma forma que se pareça com um código síncrono simples.
 * 
 * Convertendo isso para async/await agora parece assim:
*/

//função assicrona que retorna promise
async function fetchAndDecode(url, type) {
    //agurda fetch retorna resultado
    let response = await fetch(url);
  
    let content;
  
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    } else {
      if(type === 'blob') {
        //agurda blob() trazer o resultado
        content = await response.blob();
      } else if(type === 'text') {
        //agurda text() trazer o resultado  
        content = await response.text();
      }
    }
    //retorna uma promisse com um valor definido por content
    return content;
}
  
//função assicrona que retorna promise
async function displayContent() {
    let coffee = fetchAndDecode('coffee.jpg', 'blob');
    let tea = fetchAndDecode('tea.jpg', 'blob');
    let description = fetchAndDecode('description.txt', 'text');
    
    //espera todos as promessas terem sido resolvidas e obtiverem valor de retorno
    let values = await Promise.all([coffee, tea, description]);
  
    let objectURL1 = URL.createObjectURL(values[0]);
    let objectURL2 = URL.createObjectURL(values[1]);
    let descText = values[2];
  
    let image1 = document.createElement('img');
    let image2 = document.createElement('img');
    image1.src = objectURL1;
    image2.src = objectURL2;
    document.body.appendChild(image1);
    document.body.appendChild(image2);
  
    let para = document.createElement('p');
    para.textContent = descText;
    document.body.appendChild(para);
}
  
//se houver algum erro
displayContent()
  .catch((e) =>
    console.log(e)
);

/**
 * Você verá que a fetchAndDecode()função foi convertida facilmente em uma função assíncrona com apenas algumas alterações. Veja a Promise.all()linha: 
*/

let values = await Promise.all([coffee, tea, description]);

/** 
 * Usando await aqui, podemos obter todos os resultados das três promessas retornadas ao values array, quando todas estiverem disponíveis, de uma forma que se parece muito com o código de sincronização. Tivemos que envolver todo o código em uma nova função assíncrona displayContent(), e não reduzimos o código em muitas linhas, mas ser capaz de mover a maior parte do código para fora do .then() bloco fornece uma simplificação agradável e útil , deixando-nos com um programa muito mais legível.
 *
 *  Para tratamento de erros, incluímos um .catch()bloco em nossa displayContent()chamada; isso tratará os erros que ocorrem em ambas as funções.
*/