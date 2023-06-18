/**
 * * CALLBACKS ASSINCRONAS
 * 
 *  Callback são funções que são passada como parâmetros na chamada de outra função que vai executar código por trás do panos. Quando esse código por trás dos panos terminar de ser executado, a função callback será chamada para te informar que a tarefa foi finalizada ou que algo do seu interesse aconteceu. O uso das callbacks é um pouco antiquado agora, mas você ainda pode vê-las em um número de APIs comumente usadas.
 * 
 * Um exemplo de uma callback async é o segundo parâmetro do método addEventListener() (como vimos em ação anteriormente):
*/

//o segundo parametro do metodo addEventListener() e um callback assicrona que executa alguma tarefa
btn.addEventListener('click', () => {
    alert('Você clicou em mim!');
  
    let pElem = document.createElement('p');
    pElem.textContent = 'Este é um novo parágrafo.';
    document.body.appendChild(pElem);
});

/**
 * O primeiro parâmetro é o tipo de evento a ser executado e o segundo parâmetro é uma função callback que é chamada quando o evento é disparado.
 * 
 * Quando passamos uma função callback como um parâmetro em outra função, nós apenas estamos passando a rêferencia da função como argumento, ou seja, a função callback não é executada imediatamente. Ela é chamada de volta assíncronamente dentro do corpo da função que a contém, que é responsável por executar a função callback quando for necessário.
 * 
 * Você pode escrever a sua própria função que contém uma callback facilmente. Vamos dar uma olhada em outro exemplo que carrega uma arquivo usando a API XMLHttpRequest xhr-async-callback.html
*/

function loadAsset(url, type, callback) {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.responseType = type;
  
    xhr.onload = function() {
      callback(xhr.response);
    };
  
    xhr.send();
}
  
  function displayImage(blob) {
    let objectURL = URL.createObjectURL(blob);
  
    let image = document.createElement('img');
    image.src = objectURL;
    document.body.appendChild(image);
}
  
loadAsset('coffee.jpg', 'blob', displayImage);

/**
 * Aqui nós criamos uma função displayImage() que simplesmente representa um blob que foi passada à ela como uma URL de objeto, e depois cria uma imagem para mostrar a URL, adicionando-a ao <body> do documento. Entretando, nós criamos depois uma função loadAsset() que pega uma callback como parâmetro, junto com uma URL a ser buscada e um tipo para o conteúdo. Ela usa o XMLHttpRequest (abreviação: "XHR") para buscar o recurso na URL dada, para depois passar a resposta para a callback para fazer algo com isso. Neste caso a callback está esperando o XHR  terminar de baixar o recurso (usando o manipulador de eventos onload) antes de passá-lo para a callback.
 * 
 * Callback são versáteis — elas não apenas lhe permitem controlar a ordem em que as funções são executadas e quais dados são passados entre elas, elas também podem passar dados para diferentes funçoes dependendo das circunstâncias. Então você pode ter ações diferentes para executar na resposta baixada, como processJSON(), displayText(), etc.
 * 
 * Note que nem todas as callback são assíncronas — algumas são executadas de um modo síncrono. Um exemplo é quando nós usamos o método Array.prototype.forEach() para iterar sobre os itens de uma array 
*/

const gods = ['Apollo', 'Artemis', 'Ares', 'Zeus'];

gods.forEach(function (eachName, index){
  console.log(index + '. ' + eachName);
});

/**
 * Neste exemplo nós iteramos sobra uma array de Deuses Gregos e imprimos o índice e seus valores no console. O parâmetro de forEach() é uma callback function, que por si só toma dois parâmetros: uma refêrencia ao nome da array e e os valores dos índices. Entretanto, ela não espera por algo para fazer a execução, pois isso acontece imediatamente
*/