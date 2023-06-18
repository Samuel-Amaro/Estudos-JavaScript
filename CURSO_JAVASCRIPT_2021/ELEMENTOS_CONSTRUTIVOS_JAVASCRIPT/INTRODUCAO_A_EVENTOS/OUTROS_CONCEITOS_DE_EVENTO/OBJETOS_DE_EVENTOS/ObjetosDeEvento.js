/**
 * * OBJETOS DE EVENTO
 * 
 * Às vezes, dentro de uma função de manipulador de eventos, você pode ver um parâmetro especificado com um nome como event, evt, ou simplesmente e. Isso é chamado de event object, e é passado automaticamente para os manipuladores de eventos para fornecer recursos e informações extras. Por exemplo, vamos reescrever nosso exemplo de cor aleatória novamente:
*/

function bgChange(e) {
    var rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
    e.target.style.backgroundColor = rndCol;
    console.log(e);
}
  
btn.addEventListener('click', bgChange);

/**
 * Aqui você pode ver que estamos incluindo um objeto de evento, e, na função, e na função definindo um estilo de cor de fundo em e.target — que é o próprio botão. A propriedade target do objeto de evento é sempre uma referência ao elemento em que o evento acabou de ocorrer. Portanto, neste exemplo, estamos definindo uma cor de fundo aleatória no botão, não na página.
 * 
 * Note: Você pode usar qualquer nome que desejar para o objeto de evento — você só precisa escolher um nome que possa ser usado para referenciá-lo dentro da função de manipulador de eventos. e/evt/event são mais comumente usados pelos desenvolvedores porque são curtos e fáceis de lembrar. É sempre bom manter um padrão. 
 * 
 * e.target é incrivelmente útil quando você deseja definir o mesmo manipulador de eventos em vários elementos e fazer algo com todos eles quando ocorre um evento neles. Você pode, por exemplo, ter um conjunto de 16 blocos que desaparecem quando são clicados. É útil poder sempre apenas definir a coisa para desaparecer como e.target, ao invés de ter que selecioná-lo de alguma forma mais difícil. No exemplo a seguir,  criamos 16 elementos <div> usando JavaScript. Em seguida, selecionamos todos eles usando document.querySelectorAll()  e, em seguida, percorremos cada um deles, adicionando um manipulador onclick a cada um, de modo que uma cor aleatória seja aplicada a cada um deles quando clicados:
*/

//seleciona todos os elementos <div> do docuento HTML5
var divs = document.querySelectorAll('div');

//percorrendo a constante de elementos <div>
for (var i = 0; i < divs.length; i++) {
  //para cada elemento <div> percorrido, registra um manipulador de eventos usando uma função anonima, e um objeto de evento e, que a sua propriedade target, define o evento diretamente em cada elemento <div>, e não na pagina     
  divs[i].onclick = function(e) {
    e.target.style.backgroundColor = bgChange();
  }
}