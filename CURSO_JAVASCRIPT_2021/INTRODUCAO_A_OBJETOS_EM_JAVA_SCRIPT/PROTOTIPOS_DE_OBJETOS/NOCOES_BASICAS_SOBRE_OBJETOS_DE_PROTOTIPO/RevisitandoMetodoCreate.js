/**
 * * REVISITANDO O METODO create()
*/

//função construtora de classe com paramentros obrigatorios para a definição da classe, essa função construtora e a maneira de representar uma classe no JS
function PessoaCompleta(primeiro, ultimo, idade, sexo, interesses) {
    //a propriedade nome do obj e um objeto
    this.nome = {
        'primeiro' : primeiro,
        'ultimo' : ultimo
    };
    //propriedade do obj 
    this.idade = idade;
    //propriedade do obj
    this.sexo = sexo,
    //propriedade do obj
    this.interesses = interesses;
    //metodo do obj
    this.bio = function() {
        alert(this.nome.primeiro + ' ' + this.nome.ultimo + 'e ' + this.idade + 'anos. E gosto de ' + this.interesses[0] + ' e ' + this.interesses[1] + '.');
    };
    //metodo do obj
    this.saudacao = function() {
        alert('Ei! Eu sou ' + this.nome.primeiro + '.');
    };
}

//criando uma istancia da classe PessoaCompleta() pelo seu construtor 
var pessoaTeste1 = new PessoaCompleta('Bob', 'Smith', 32, 'masculino', ['musica','skiar']);

/**
 *  Anteriormente mostramos como o método Object.create() pode ser usado para criar uma nova instância de objeto.
 *
 *  Por exemplo, tente isso no console JavaScript do seu exemplo anterior:
*/

var pessoa2 = Object.create(pessoaTeste1);

/**
 * O que create() realmente faz é criar um novo objeto a partir de um objeto de protótipo especificado. Aqui, perssoa2 está sendo criado usando  pessoaTeste1 como um objeto de protótipo. Você pode verificar isso inserindo o seguinte no console: 
*/

pessoa2.__proton__; //return pessoaTeste1;