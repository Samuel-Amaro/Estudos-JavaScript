/**
 * * REESCREVENDO O CÓDIGO DE PROMISE COM ASYNC/AWAIT
 * 
 *  Vejamos um exemplo simples de busca que vimos no artigo anterior:
*/

fetch('coffee.jpg')
.then(function(response) {
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  return response.blob();
})
.then(function(myBlob) {
  let objectURL = URL.createObjectURL(myBlob);
  let image = document.createElement('img');
  image.src = objectURL;
  document.body.appendChild(image);
})
.catch(function(e) {
  console.log('There has been a problem with your fetch operation: ' + e.message);
});

/**
 * Agora, você deve ter um entendimento razoável das promessas e como elas funcionam, mas vamos converter isso para usar async / await para ver como isso torna as coisas mais simples:
*/

//declarando uma função assicrona que retorna um promise resolvida com seu value de retorno
async function myFetch() {
    //solicita um recurso na rede ou servidor por meio de API fetch(url)
    //retorna um Promise<Response>
    //o await vai travar nessa linha até que o recurso seja trago na promisse
    let response = await fetch('coffee.jpg');
    
    //se a promisse trazer o seguinte valor de resultado
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    //Retorna a o recurso como uma promise<Blob> um tipo que o java scrit entenda
    let myBlob = await response.blob();
    
    //cria um obejto URL
    let objectURL = URL.createObjectURL(myBlob);
    //cria elementos por meio do DOM API
    let image = document.createElement('img');
    image.src = objectURL;
    document.body.appendChild(image);
}
  
//caso de algum erro
myFetch()
  .catch(function(e) {
    console.log('There has been a problem with your fetch operation: ' + e.message);
});

/**
 * Isso torna o código muito mais simples e fácil de entender - sem mais .then()blocos em todos os lugares!
 * 
 * Como uma async palavra - chave transforma uma função em uma promessa, você pode refatorar seu código para usar uma abordagem híbrida de promessas e aguardar, trazendo a segunda metade da função em um novo bloco para torná-la mais flexível:
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
}).catch(e => console.log(e));