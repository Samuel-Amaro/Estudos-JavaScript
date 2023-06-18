/**
 * *  addEventListener() e removeEventListener()
 * 
 * O mais novo tipo de mecanismo de evento é definido na Especificação de Eventos Nível 2 do Document Object Model (DOM), que fornece aos navegadores uma nova função — addEventListener(). Isso funciona de maneira semelhante às propriedades do manipulador de eventos, mas a sintaxe é obviamente diferente. Poderíamos reescrever nosso exemplo de cor aleatória para ficar assim:
*/

//seleciona o elemento <button> do documento HTML5
var btn = document.querySelector('button');

//manipulador de eventos nomeado como uma função
function bgChange() {
  var rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
  document.body.style.backgroundColor = rndCol;
}

//registrando o manipulador de eventos, no elemento button, com o atributo de evento de mouse, click, e o manipulador do evento
btn.addEventListener('click', bgChange);

/**
 * Dentro da função addEventListener(), especificamos dois parâmetros — o nome do evento para o qual queremos registrar esse manipulador, e o código que compreende a função do manipulador que queremos executar em resposta a ele. Note que é perfeitamente apropriado colocar todo o código dentro da função addEventListener(), em uma função anônima, assim: 

 * SINTAXE do addEventListener();

  addEventListener(nomeDoEvento, codigoFuncaoManipuladorRespostaEvento);

*/


btn.addEventListener('click', function() {
    var rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
    document.body.style.backgroundColor = rndCol;
});

/**
 * Esse mecanismo tem algumas vantagens sobre os mecanismos mais antigos discutidos anteriormente. Para começar, há uma função de contraparte, removeEventListener(), que remove um listener adicionado anteriormente. Por exemplo, isso removeria o listener definido no primeiro bloco de código nesta seção: 
*/

btn.removeEventListener('click', bgChange);

/**
 * tudo o que você precisa fazer é adicionar/remover manipuladores de eventos conforme apropriado.
 * 
 *  Em segundo lugar, você também pode registrar vários manipuladores para o mesmo ouvinte. Os dois manipuladores a seguir não seriam aplicados:
 * 
*/

myElement.onclick = functionA;
myElement.onclick = functionB;

/**
 * Como a segunda linha sobrescreveria o valor de  onclick definido pelo primeiro. Isso funcionaria, no entanto: 
*/

myElement.addEventListener('click', functionA);
myElement.addEventListener('click', functionB);

/**
 * Ambas as funções serão executadas quando o elemento for clicado.
 *  
*/