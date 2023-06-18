/**
 * * BORBULHAMENTO E CAPTURA DE EVENTOS
 * 
 * Borbulhamento e captura de eventos são dois mecanismos que descrevem o que acontece quando dois manipuladores do mesmo tipo de evento são ativados em um elemento. Vamos dar uma olhada em um exemplo para facilitar isso 
 * 
 * Este é um exemplo bastante simples que mostra e oculta um <div> com um elemento <video> dentro dele:
*/

/*
<button>Display video</button>

<div class="hidden">
  <video>
    <source src="rabbit320.mp4" type="video/mp4">
    <source src="rabbit320.webm" type="video/webm">
    <p>Your browser doesn't support HTML5 video. Here is a <a href="rabbit320.mp4">link to the video</a> instead.</p>
  </video>
</div>
*/

/**
 * Quando o <button> é clicado, o vídeo é exibido, alterando o atributo de classe em <div> de hidden para showing (o CSS do exemplo contém essas duas classes, que posicione a caixa fora da tela e na tela, respectivamente): 
*/

btn.onclick = function() {
    videoBox.setAttribute('class', 'showing');
}

/**
 * Em seguida, adicionamos mais alguns manipuladores de eventos onclick — o primeiro ao <div> e o segundo ao <video>. A ideia é que, quando a área do <div> fora do vídeo for clicada, a caixa deve ser ocultada novamente; quando o vídeo em si é clicado, o vídeo deve começar a tocar. 
*/

videoBox.onclick = function() {
    videoBox.setAttribute('class', 'hidden');
};
  
video.onclick = function() {
    video.play();
};

/**
 * Mas há um problema — atualmente, quando você clica no vídeo, ele começa a ser reproduzido, mas faz com que o <div> também fique oculto ao mesmo tempo. Isso ocorre porque o vídeo está dentro do <div> — é parte dele — portanto, clicar no vídeo realmente executa os dois manipuladores de eventos acima.
 * 
 * * BORBULHANDO E CAPTURANDO EXPLICADOS
 * 
 *  Quando um evento é acionado em um elemento que possui elementos pai (por exemplo, o <video> no nosso caso), os navegadores modernos executam duas fases diferentes — a fase de  captura e a fase de bubbling.
 * 
 * Na fase de captura:
 
  - O navegador verifica se o ancestral mais externo do elemento (<html>) tem um manipulador de eventos onclick registrado nele na fase de captura e o executa em caso afirmativo.
  -
  - Em seguida, ele passa para o próximo elemento dentro de <html>  e faz a mesma coisa, depois o próximo, e assim por diante até alcançar o elemento que foi realmente clicado.

 * 
 * Na fase de bubbling, ocorre exatamente o oposto:
 * 
   - O navegador verifica se o elemento que realmente foi clicado tem um manipulador de eventos onclick registrado nele na fase de bubbling e o executa em caso afirmativo.
   - 
   - Em seguida, ele passa para o próximo elemento ancestral imediato e faz a mesma coisa, depois o próximo, e assim por diante, até alcançar o elemento <html>.

 * Nos navegadores modernos, por padrão, todos os manipuladores de eventos são registrados na fase de bubbling. Portanto, em nosso exemplo atual, quando você clica no vídeo, o evento de clique passa do elemento <video> para o elemento <html> Pelo caminho:
   
     - Ele encontra o manipulador video.onclick... e o executa, então o vídeo começa a ser reproduzido pela primeira vez.
     - 
     - Em seguida, ele encontra o manipulador videoBox.onclick... e o executa, então o vídeo também está oculto.

 * 
 * * CORRIGINDO O PROBLEMA COM stopPropagation()
 * 
 * Este é um comportamento irritante, mas existe uma maneira de corrigir isso! O objeto de evento padrão tem uma função disponível chamada stopPropagation(), que quando invocada no objeto de evento de um manipulador, faz com que o manipulador seja executado, mas o evento não borbulha mais acima na cadeia, portanto, mais nenhum manipulador rodará.
 * 
 * Podemos, portanto, consertar nosso problema atual alterando a segunda função do manipulador no bloco de códigos anterior para isto:
*/

video.onclick = function(e) {
    e.stopPropagation();
    video.play();
};