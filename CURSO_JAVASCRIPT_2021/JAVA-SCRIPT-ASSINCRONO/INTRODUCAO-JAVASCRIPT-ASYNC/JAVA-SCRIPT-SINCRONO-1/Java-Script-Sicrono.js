/**
 * * JAVA SCRIPT SÍNCRONO
 * 
 * Para entendermos o que é o asynchronous(ASSICRONO) JavaScript, nós primeiro temos que ter certeza que entedemos o que é o synchronous(SICRONO) JavaScript. Essa seção revê um pouco das informações que nós vimos no artigo anterior.
 * 
 * Muitas das funcionalidades que nós vimos em áreas anteriores são síncronas — você executa um código, e o resultado é retornado assim que o navegador puder. Vamos ver um exemplo simples: 
 * 
 * EXEMPLO JAVA SCRIPT SICRONO.js
*/

/*codigo do arquivo*/
const btn = document.querySelector('button');
btn.addEventListener('click', () => {
  alert('Você clicou em mim!');

  let pElem = document.createElement('p');
  pElem.textContent = 'Este é um novo parágrafo adicionado';
  document.body.appendChild(pElem);
});

/**
 * Neste bloco, as linhas são executadas uma após a outra:
 
    1. Nós damos referência à um elemento <button> que já está disponível na DOM.

    2. Nós adicionamos um evento de click, e quando ele for clicado ele fará o seguinte:

        1. Mostrar uma mensagem no alert()
        2. Uma vez que o alert for dispensado, nós criamos um elemento <p>.
        3. Depois nós o preenchemos com um texto.
        4. E finalmente, o adicionamos no body.

 * 
 * 
 * Enquanto cada operação é processada, nada mais pode acontecer — a renderização é pausada. Isso acontece porque o JavaScript opera em uma única thread (JavaScript é single threaded). Apenas uma coisa pode acontecer por vez, em uma única thread principal, e tudo é bloqueado até que a operação seja concluída.
 * 
 * Então, no exemplo acima, depois que você tenha clicado no botão, o parágrafo não vai aparecer até que o botão OK do alert seja pressionado.
 * 
 * Nota: É importante lembrar que, mesmo sendo muito útil para demonstar uma situação de blocking, o alert() não é de bom uso em aplicativos reais.
*/