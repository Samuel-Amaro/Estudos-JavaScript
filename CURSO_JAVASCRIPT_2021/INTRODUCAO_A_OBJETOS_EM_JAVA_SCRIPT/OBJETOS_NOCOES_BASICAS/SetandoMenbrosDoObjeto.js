/**
 * * SETANDO MENBROS DO OBJETO
 * 
*/

//OBJETO DE EXEMPLO QUE ESTA SENDO USADO

var pessoa = {
    nome: {
        primerio : 'Bob',
        ultimo: 'Smith'
    }, 
    idade: 32, //propried obejto
    sexo: 'masculino', //propried obejto
    interesses: ['música','esquiar'], //propried obejto
    bio: function() { //metodo do objeto
        alert(this.nome[0] + ' ' + this.nome.ultimo + 'tem ' + this.idade + ' anos de idade. Ele gosta de ' + this.interesses[0] + 'e ' + this.interesses[1] + '.')
    },
    saudacao: function() { //metodo do objeto
        alert('Oi! Eu sou ' + this.nome.primerio + '.');
    } 
};

/**
 *  Até agora nós apenas procuramos receber (ou apanhar) membros de objetos — podemos também setar (atualizar) o valor de membros de objetos simplesmente declarando o membro que queremos setar (usando notação de ponto ou colchete), tipo assim:
*/

//setando(atualizando uma nova idade), usando notação de ponto
pessoa.idade = 45;

//setando um novo ultimo nome, usando notação de colchetes
pessoa['nome']['ultimo'] = 'Cratchit';

//para obter os novos valores setados, acesse o console JS e digite:

pessoa.idade; //return '45'
pessoa['nome']['ultimo']; //return 'Cratchit';

/**
 * Não podemos apenas atualizar valores existentes de propriedades e métodos; podemos também criar membros completamente novos. Tente isso aqui no console: 
*/

//add nova prorprieda ao obj
pessoa['olhos'] = 'castanho';
//add um novo metodo ao objeto
pessoa.despedida = function() {
    alert("Adeus a todos!");
}

/**
 * acessando a nova propriedade e metodo
 */

pessoa['olhos'];
pessoa.despedida();

/**
 * Um aspecto útil de notação de colchetes é que ela pode ser usada não apenas para setar valores dinamicamente, mas também nomes de membros. Vamos dizer que queremos que usuários possam armazenar tipos de valores personalizados em seus dados de 'pessoa', digitando o nome e o valor do membro em dois inputs de texto. Podemos obter esses valores dessa forma:
 */

//var meuDadoNome = nameInput.value;
//var meuDadoValor = nameValue.value;

/**
 * Podemos, então, adicionar esse novo nome e valor ao objeto pessoa assim:
*/

//pessoa[meuDadoNome] = meuDadoValor;

/**
 * Para testar isso, tente adicionar as seguinte linhas em seu código, abaixo do fechamento da chaves do objeto pessoa : 
*/

var meuDadoNome = 'altura';
var meuDadoValor = '1.75m';
pessoa[meuDadoNome] = meuDadoValor;

/**
 * acessando a nova propriedade do objeto pessoa
 * 
 *  
*/

pessoa.altura;

/**
 * Adicionar uma propriedade a um objeto usando o método acima não é possível com a notação ponto, que só aceita um nome de membro literal, não aceita valor de variável apontando para um nome. 
*/