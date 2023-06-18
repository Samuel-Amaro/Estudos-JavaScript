/**
 * * NOÇÕES BÁSICAS SOBRE OBJETOS DE PROTÓTIPO
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
 * Se você digitar "pessoa1." em seu console JavaScript, você deve ver o navegador tentar concluir automaticamente isso com os nomes de membros disponíveis neste objeto: Nesta lista, você verá os membros definidos no construtor de pessoa1 constructor — PessoaCompleta() — nome, idade, sexo, interesses, bio, e saudacao. No entanto, você também verá alguns outros membros — watch, valueOf, etc — estes estão definidos no objeto de protótipo do Person(), que é Object.
 * 
 * O que acontece se você chamar um método em pessoa1, que é realmente definido em Object? Por exemplo:
 * 
*/

//Object.valueOf(); -> retorna o valor do objeto em que é chamado
pessoaTeste1.valueOf(); //return PessoaCompleta {nome: {…}, idade: 32, sexo: "masculino", interesses: Array(2), bio: ƒ, …}


/**
 * Este método — Object.valueOf() é herdado por  pessoa1 porque seu construtor é PessoaCompleta(), e o protótipo de PessoaCompleta() é  Object().valueOf() retorna o valor do objeto em que é chamado — experimente e veja! Nesse caso, o que acontece é: 
 
    - O navegador verifica inicialmente se o objeto  pessoa1 tem um método  valueOf() disponível nele, conforme definido em seu construtor, PessoaCompleta().

    - Se não tem, então o navegador verifica se o objeto(Object()) de protótipo do construtor PessoaCompleto() tem um método valueOf() disponível, então ele é chamado, e tudo está bem!

 * Nota: Queremos reiterar que os métodos e as propriedades não são copiados de um objeto para outro na cadeia de protótipos — eles são acessados ao percorrer a cadeia como descrito acima.
 *
 * Nota: Não existe uma maneira oficial de acessar diretamente o objeto protótipo de um objeto — os "links" entre os itens da cadeia são definidos em uma propriedade interna, chamada de [[prototype]] na especificação da linguagem JavaScript.   A maioria dos navegadores modernos, no entanto, tem uma propriedade disponível neles chamada __proto__ (que é sublinhada em ambos os lados), que contém o objeto de protótipo do construtor do objeto. Por exemplo, tente pessoaTeste1.__proto__ and pessoaTeste1.__proto__.__proto__ para ver como a cadeia se parece no código!
*/