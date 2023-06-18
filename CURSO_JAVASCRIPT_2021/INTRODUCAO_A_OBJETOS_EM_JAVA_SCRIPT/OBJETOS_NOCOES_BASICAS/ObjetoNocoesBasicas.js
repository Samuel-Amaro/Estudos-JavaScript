/**
 * * O BASICO SOBRE OBJETOS JAVASCRIPT
 * 
 * Neste artigo, veremos a sintaxe fundamental de objetos JavaScript
 * 
 * Entender a teoria básica por trás da programação orientada a objetos, como isso se relaciona com o JavaScript ("quase tudo é objeto"), e como começar a trabalhar com objetos JavaScript.
 * 
 * * OBJETO, NOÇÕES BÁSICAS
 *  
 * Um objeto é uma coleção de dados e/ou funcionalidades relacionadas (que geralmente consistem em diversas variáveis e funções — que são chamadas de propriedades e métodos quando estão dentro de objetos). Vamos trabalhar com um exemplo para entender como eles são.
 * 
 * Como acontece com muitas coisas em JavaScript, a criação de um objeto geralmente começa com a definição e a inicialização de uma variável.
*/

//criação de um objeto vazio
var pessoa = {};

/**
 * Parabéns, você acabou de criar seu primeiro objeto. Tarefa concluída! Mas este é um objeto vazio, então não podemos fazer muita coisa com isso. Vamos atualizar nosso objeto para ficar assim:
*/

var pessoa = {
    nome: ['Bob','Smith'], //propried obejto
    idade: 32, //propried obejto
    sexo: 'masculino', //propried obejto
    interesses: ['música','esquiar'], //propried obejto
    bio: function() { //metodo do objeto
        alert(this.nome[0] + ' ' + this.nome[1] + 'tem ' + this.idade + ' anos de idade. Ele gosta de ' + this.interesses[0] + 'e ' + this.interesses[1] + '.')
    },
    saudacao: function() { //metodo do objeto
        alert('Oi! Eu sou ' + this.nome[0] + '.');
    } 
};

/**
 * Depois de salvar e atualizar, tente inserir alguns dos itens a seguir no console JavaScript no devtools do seu navegador: 
*/

pessoa.nome //return 'Bob','Smith'
pessoa.nome[0] //return 'Bob'
pessoa.idade //return '32'
pessoa.interesses[1] //return 'música','esquiar'
pessoa.bio() //return 'Bob Smithtem 32 anos de idade. Ele gosta de músicae esquiar.'
pessoa.saudacao() //return 'Oi! Eu sou Bob.'

/**
 * Então, o que está acontecendo? Bem, um objeto é composto de vários membros, cada um  com um nome (ex.: nome e idade vistos acima), e um valor (ex.: ['Bob', 'Smith'] e 32). Cada par nome/valor deve ser separado por uma vírgula e o nome e valor, em cada caso, separados por dois pontos. A sintaxe sempre segue esse padrão: 
*/

//SINTAXE PARA CRIAÇÃO DE OBJETOS
var nomeDoObjeto = {
    nomeMembro1: valorMenbro1,
    nomeMembro2: valorMembro2,
    nomeMembro3: valorMembro3 
};

/**
 * O valor de um membro do objeto pode ser praticamente qualquer coisa. Em nosso objeto pessoa, temos uma string, um número, dois arrays e duas functions. Os primeiros quatro são data items (dados) e são referenciados como propriedades do objeto. Enquanto os dois últimos ítens são funções que permitem que o objeto faça algo com esses dados. São chamados de métodos do objeto. 
 * 
 * Um objeto como esse é chamado de  objeto literal — ao pé da letra, escrevemos o conteúdo do objeto conforme o criamos. Isto está em contraste com objetos instanciados de classes, que veremos mais adiante.
 * 
 * É muito comum criar um objeto usando um objeto literal quando você deseja transferir uma série de itens de dados relacionados estruturados de alguma maneira, por exemplo, enviando uma solicitação para o servidor para ser colocado em um banco de dados. Enviar um único objeto é muito mais eficiente do que enviar vários itens individualmente, e é mais fácil trabalhar com um array, quando você deseja identificar itens individuais pelo nome.
*/