/* 
 * PROPRIEDADES DO MANIPULADOR DE EVENTOS
 * 
 * Essas são as propriedades que existem para conter o código do manipulador de eventos que vimos com mais frequência durante o curso. Voltando ao exemplo abaixo:
*/

//seleciona o elemento <button>
var btn = document.querySelector('button');

//função java scritp que retorna um numero aleatorio
function random(number) {
    return Math.floor(Math.random() * (number + 1));
}

//registrando um manipulador de eventos, na proprieadade onclick, com uma função anonima
btn.onclick = function() {
    var rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
    document.body.style.backgroundColor = rndCol;
}

/**
 * A propriedade onclick é a propriedade do manipulador de eventos que está sendo usada nesta situação. É essencialmente uma propriedade como qualquer outra disponível no botão (por exemplo, btn.textContent, ou btn.style), mas é um tipo especial — quando você configura para ser igual a algum código, esse código será executado quando o evento é acionado no botão.
 * 
 * Você também pode definir a propriedade handler(manipulador de eventos) para ser igual a um nome de função nomeado. 
*/

//seleciona o elemento <button> do documento HTML5
var btn = document.querySelector('button');

//manipulador de eventos nomeado, como uma função
function bgChange() {
    var rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
    document.body.style.backgroundColor = rndCol;
}

//propriedade de evento do elemento button, que e o onclick, tem um manipulador de evento registrado
btn.onclick = bgChange();

/**
 *  Agora tente alterar btn.onclick para os seguintes valores diferentes, por sua vez, e observando os resultados no exemplo:
 * 
 * btn.onfocus e btn.onblur — A cor mudará quando o botão estiver focado e fora de foco (tente pressionar a guia para aba no botão e desligar novamente). Eles geralmente são usados para exibir informações sobre como preencher campos de formulário quando eles estão focalizados ou exibir uma mensagem de erro se um campo de formulário tiver acabado de ser preenchido com um valor incorreto.
 * 
 * btn.ondblclick — A cor só será alterada quando for clicada duas vezes.
 * 
 * window.onkeypress, window.onkeydown, window.onkeyup — A cor mudará quando uma tecla for pressionada no teclado. keypress refere-se a um pressionamento geral (botão para baixo e depois para cima), enquanto keydown e keyup refere-se apenas a parte do pressionamento da tecla para baixo e de soltar a tecla para cima, respectivamente. Note que não funciona se você tentar registrar este manipulador de eventos no próprio botão — nós tivemos que registrá-lo no objeto window, que representa toda a janela do navegador.
 * 
 * btn.onmouseover e btn.onmouseout — A cor mudará quando o ponteiro do mouse for movido, de modo que comece a passar o mouse sobre o botão, ou quando parar de passar o mouse sobre o botão e sair dele, respectivamente.
 * 
 * Alguns eventos são muito gerais e estão disponíveis praticamente em qualquer lugar (por exemplo, um manipulador  onclick pode ser registrado em quase qualquer elemento), enquanto alguns são mais específicos e úteis apenas em certas situações (por exemplo, faz sentido usar onplay apenas em elementos específicos, como <video>).
*/