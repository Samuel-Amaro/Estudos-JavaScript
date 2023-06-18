/**
 * * MANIPULADORES DE EVENTOS IN-LINE - NÃO USE ESSES
 * 
 *  Você também pode ver um padrão como este em seu código:
*/

//elemento <button> do HTML5 com um atributo de evento de mouse
<button onclick="bgChange()">Press me</button>

//manipulador do evento
function bgChange() {
    var rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
    document.body.style.backgroundColor = rndCol;
}

/**
 * O método mais antigo de registrar manipuladores de eventos encontrados na Web envolveu atributos HTML de manipulador de eventos (também conhecidos como manipuladores de eventos inline) como o mostrado acima — o valor do atributo é literalmente o código JavaScript que você deseja executar quando o evento ocorre. O exemplo acima chama uma função definida dentro de um elemento <script> na mesma página, mas você também pode inserir JavaScript diretamente dentro do atributo, por exemplo:
 *  
*/

<button onclick="alert('Hello, this is my old-fashioned event handler!');">Press me</button>

/**
 * Você encontrará equivalentes de atributo HTML para muitas das propriedades do manipulador de eventos; no entanto, você não deve usá-los — eles são considerados uma prática ruim. Pode parecer fácil usar um atributo manipulador de eventos se você estiver apenas fazendo algo realmente rápido, mas eles se tornam rapidamente incontroláveis e ineficientes. 
 * 
 * Para começar, não é uma boa ideia misturar o seu HTML e o seu JavaScript, pois é difícil analisar — manter seu JavaScript em um só lugar é melhor; se estiver em um arquivo separado, você poderá aplicá-lo a vários documentos HTML.
 * 
 * Mesmo em um único arquivo, os manipuladores de eventos in-line não são uma boa ideia. Um botão está OK, mas e se você tivesse 100 botões? Você teria que adicionar 100 atributos ao arquivo; isso rapidamente se tornaria um pesadelo de manutenção. Com JavaScript, você poderia facilmente adicionar uma função de manipulador de eventos a todos os botões da página, não importando quantos fossem, usando algo assim:
*/

var buttons = document.querySelectorAll('button');

for (var i = 0; i < buttons.length; i++) {
    buttons[i].onclick = bgChange;
}

/**
 * Nota: Separar sua lógica de programação do seu conteúdo também torna seu site mais amigável aos mecanismos de pesquisa. 
*/