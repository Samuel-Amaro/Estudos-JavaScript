/**
 * * NOTAÇÃO DE PONTO
 * 
 *  Acima, você acessou as propriedades de objetos e métodos usando notação de ponto. O objeto nome (pessoa) atua como namespace (espaço de nomes) — ele deve ser digitado primeiro para que você acesse qualquer coisa encapsulada dentro do objeto. Depois você escreve um ponto, então o item que quer acessar — isso pode ser o nome de uma simples propriedade, um item de um array ou a chamada para um dos métodos do objeto, por exemplo: 
*/

//OBJETO USADO NO EXEMPLO
var pessoa = {
    nome: ['Bob','Smith'], //propried obejto
    idade: 32, //propried obejto
    sexo: masculino, //propried obejto
    interesses: ['música','esquiar'], //propried obejto
    bio: function() { //metodo do objeto
        alert(this.nome[0] + ' ' + this.nome[1] + 'tem ' + this.idade + ' anos de idade. Ele gosta de ' + this.interesses[0] + 'e ' + this.interesses[1] + '.')
    },
    saudacao: function() { //metodo do objeto
        alert('Oi! Eu sou ' + this.nome[0] + '.');
    } 
};

//usando a notação de ponto, depois de ter escrevido declarado o objeto

pessoa.idade //return '32' -> acessa propriedade do obj
pessoa.interesses[1] //return 'esquiar' -> acessa propriedade do obj
pessoa.bio() //return 'Bob Smithtem 32 anos de idade. Ele gosta de músicae esquiar.' -> acessa um metodo de obj

/**
 * * SUB-NAMESPACES
 *  
 * É até possível fazer o valor de um membro de um objeto ser outro objeto. Por exemplo, tente alterar o nome do membro de:
*/

//nome: ['Bob','Smith'];

/**
 * para 
*/

//nome : {
//    primeiro: 'Bob',
//    ultimo: 'Smith'
//},

//fazendo o valor de um menbro ser outro objeto
var pessoa1 = {
    nome: {
        primerio : 'Bob',
        ultimo: 'Smith'
    }, 
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
 * Aqui estamos efetivamente criando um sub-namespace. Parece difícil, mas não é — para acessar esses itens você apenas precisa encadear mais um passo ao final de outro ponto. Tente isso aqui no console: 
*/

pessoa1.nome.primerio; //return 'Bob'
pessoa1.nome.ultimo; //return 'Smith'