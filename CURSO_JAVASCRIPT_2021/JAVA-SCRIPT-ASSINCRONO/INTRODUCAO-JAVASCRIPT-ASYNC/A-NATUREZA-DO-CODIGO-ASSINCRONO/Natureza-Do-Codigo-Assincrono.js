/**
 * * A NATUREZA DO CÓDIGO ASSÍNCRONO
 * 
 *  Vamos explorar um exemplo que ilustra a natureza do código assíncrono, mostrando o que pode acontecer quando nós não estamos cientes da ordem de execução e dos problemas em tentar tratar código async como código síncrono. O exemplo a seguir é muito similar ao que vimos antes Uma diferença e que nós icluimos um número de declarações console.log() para ilustrar na ordem que você pensa que o código fosse executado.
*/

console.log ('Starting');
let image;

fetch('coffee.jpg').then((response) => {
  console.log('It worked :)')
  return response.blob();
}).then((myBlob) => {
  let objectURL = URL.createObjectURL(myBlob);
  image = document.createElement('img');
  image.src = objectURL;
  document.body.appendChild(image);
}).catch((error) => {
  console.log('There has been a problem with your fetch operation: ' + error.message);
});

console.log ('All done!');

/**
 *  O navegador vai começar a executar o código, veja a primeira declaração console.log()(Starting) e a execute, e depois crie a variável image.
 * 
 * Depois a segunda linha vai começar a ser executada começando com o bloco fetch(), mas desde que fetch() é executado assíncronamente sem bloquear nada, a execução do código continua mesmo depois do código promise, alcançando a última declaração console.log()(All done!) e imprimindo a no console.
 * 
 * Uma vez que o bloco fetch() tenha terminado a sua execução e retornado seu resultado com os blocos .then(), nós finalmente veremos a segunda mensagem console.log() (It worked :)) appear. Então as mensagens aparecem nessa ordem:
 
    - Starting
    
    - All done!
    
    - It worked :)

 * 
 * Se isso te deixa confuso, então considere o exemplo a seguir:
*/

console.log("registering click handler");

button.addEventListener('click', () => {
  console.log("get click");
});

console.log("all done");

/**
 * Isso é bem similar no comportamento — a primeira e a terceira mensagens console.log() são mostradas imediatamente, mas a segunda está bloqueada até alguém clique no botão. O exemplo anterior funciona da mesma forma, exceto que no caso a segunda mensagem está bloqueada na promise pegando um recurso e depois o mostra na tela.
 * 
 *  Em um exemplo mais superficial, esse tipo de configuração poderia causar um problema — você não pode incluir um bloco async que retorna um resultado, que depois depende de um código síncrono. Você não pode garantir que a função async vai retornar antes que o navegador processou o bloco síncrono.
 * 
 * Para ver isso em ação, tente fazer uma cópia local do nosso exemplo, e mudar o terceiro console.log() para o seguinte:
*/

console.log ('Tudo Feito! ' + image.src + 'mostrada.');

/**
 * Agora você deve ter um erro no seu console ao invés da terceira mensagem: TypeError: image is undefined; can't access its "src" property.
 * 
 * Isso acontece porque o navegador tenta executar o terceiro console.log() e o bloco fetch() não terminou de ser executado e não foi dado  um valor para a variável image. 
 * 
 * Nota:Por razões de segurança, você não pode usar o fetch()  com arquivos do seu sistema local (ou executar operações localmente); para executar o exemplo acima você teria que rodá-lo em um servidor local.
*/