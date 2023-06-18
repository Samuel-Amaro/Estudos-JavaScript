/**
 * * SAINDO DO LOOP COM O BREAK
 * 
 *  Se você quiser sair de um loop antes que todas as iterações sejam concluídas, você poderá usar a instrução break.
 * 
 * um comando  break  irá imediatamente sair do loop e fazer o navegador passar para o código seguinte.
 * 
 * Digamos que quiséssemos pesquisar por uma variedade de contatos e números de telefone e retornar apenas o número que queríamos encontrar? Primeiro, algum HTML simples  — um texto <input> permitindo-nos iserir um nome para pesquisar, <button> elemento para submeter a pesquisa e um <p> elemento para mostrar o resultado.
 * 
 * 
*/

var contatos = ['Chris:2232322','Sarah: 3453456','Bill: 7654322', 'Mary:9998769','Dianne: 9384975'];

var paragrafo = document.querySelector('p');

var input = document.querySelector('input');
var botao = document.querySelector('button');

botao.addEventListener('click', function() {

    var buscaNome = input.value;
    input.value = '';
    input.focus();
    for(var i = 0; i < contatos.length; i++) {
        var cortaContato = contatos[i].split(':');
        if(cortaContato[0] === buscaNome) {
            paragrafo.textContent = cortaContato[0] + '\'s numero e ' + cortaContato[1] + '.';
            break;
        }else{
            paragrafo.textContent = 'Contato Não encontrado.';
        }
    }


});