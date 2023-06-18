/**
 * * O QUE É O "this" ?
*/

//OBJETO USANDO NO EXEMPLO
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
 * Você pode ter reparado algo levemente estranho em nossos métodos. Olhe esse aqui, por exemplo: 
*/

//metodo do objeto
saudacao: function(){
    alert("Oi! Meu nome é " + this.nome.primeiro + ".");
}

/**
 * Você deve estar se perguntando o que é o "this". A palavra-chave this se refere ao objeto atual em que o código está sendo escrito — nesse caso o this se refere a pessoa. Então por que simplesmente não escrever pessoa? quando começamos a criar funções construtoras, etc, o this é muito útil — sempre lhe assegurará que os valores corretos estão sendo usados quando o contexto de um mebro muda (exemplo: duas instâncias diferentes do objeto pessoa podem ter diferentes nomes, mas vão querer usar seu próprio nome ao usar a saudação).
 * 
 * Vamos ilustrar o que queremos dizer com um par de objetos pessoa:
*/

//CRIANDO UM OBJETO 
var pessoa1 = {
    nome: 'Chris', //proprieda do objeto
    saudacao: function() { //metodo do objeto
        alert('Oi! Meu nome é ' + this.nome + '.');
    }
};

//CRIANDO OUTRO OBJETO
var pessoa2 = {
    nome: 'Brian',
    saudacao: function() {
        alert('Oi! Meu nome é ' + this.nome + '.');
    }
};

pessoa1.saudacao(); //return "Oi! Meu nome é Chris."
pessoa2.saudacao(); //return "Oi! Meu nome é Brian."

/**
 * Neste caso, pessoa1.saudacao() gerará "Oi! Meu nome é Chris."; No entanto, pessoa2.saudacao() retornará "Oi! Meu nome é Brian.", mesmo que os códigos dos métodos sejam idênticos. Como dissemos antes, o this é igual ao código do objeto dentro dele — não é exatamente útil quando estamos escrevendo objetos literais na mão, mas é realmente incrível quando adicionamos objetos gerados dinamicamente (por exemplo usando construtores). Tudo ficará mais claro mais para frente. 
*/