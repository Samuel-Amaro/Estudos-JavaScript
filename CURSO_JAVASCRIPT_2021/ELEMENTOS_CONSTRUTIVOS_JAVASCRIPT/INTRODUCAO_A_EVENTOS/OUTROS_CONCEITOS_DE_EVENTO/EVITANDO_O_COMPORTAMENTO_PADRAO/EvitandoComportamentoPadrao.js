/**
 * * EVITANDO O COMPORTAMENTO PADRÃO
 * 
 *  Às vezes, você se deparará com uma situação em que deseja interromper um evento fazendo o que ele faz por padrão. O exemplo mais comum é o de um formulário da Web, por exemplo, um formulário de registro personalizado. Quando você preenche os detalhes e pressiona o botão Enviar, o comportamento natural é que os dados sejam enviados para uma página específica no servidor para processamento, e o navegador seja redirecionado para uma página de "mensagem de sucesso" de algum tipo (ou a mesma página, se outra não for especificada.)
 * 
 * O problema surge quando o usuário não submete os dados corretamente - como desenvolvedor, você deve interromper o envio para o servidor e fornecer uma mensagem de erro informando o que está errado e o que precisa ser feito para corrigir as coisas. Alguns navegadores suportam recursos automáticos de validação de dados de formulário, mas como muitos não oferecem isso, é recomendável não depender deles e implementar suas próprias verificações de validação. Vamos dar uma olhada em um exemplo simples.
*/

/*
<form>
  <div>
    <label for="fname">First name: </label>
    <input id="fname" type="text">
  </div>
  <div>
    <label for="lname">Last name: </label>
    <input id="lname" type="text">
  </div>
  <div>
     <input id="submit" type="submit">
  </div>
</form>
<p></p>
*/

/**
 * Agora algum JavaScript — aqui nós implementamos uma verificação muito simples dentro de um manipulador de evento onsubmit (o evento submit é disparado em um formulário quando é enviado) que testa se os campos de texto estão vazios. Se estiverem, chamamos a função preventDefault() no objeto de evento — que interrompe o envio do formulário — e, em seguida, exibir uma mensagem de erro no parágrafo abaixo do nosso formulário para informar ao usuário o que está errado: 
*/

var form = document.querySelector('form');
var fname = document.getElementById('fname');
var lname = document.getElementById('lname');
var submit = document.getElementById('submit');
var para = document.querySelector('p');

form.onsubmit = function(e) {
  if (fname.value === '' || lname.value === '') {
    e.preventDefault();
    para.textContent = 'You need to fill in both names!';
  }
}

/**
 * Obviamente, isso é uma validação de forma bastante fraca — ela não impediria o usuário de validar o formulário com espaços ou números inseridos nos campos, por exemplo — mas está tudo bem 
*/