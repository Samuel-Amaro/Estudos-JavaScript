/**
 * * A PROPRIEDADE DO CONSTRUTOR
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

//criando um novo objeto usando o metodo create, que cria um novo objeto a partir, de um novo objeto
var pessoa2 = Object.create(pessoaTeste1);

/**
 * Toda função de construtor possui uma propriedade prototype cujo valor é um objeto que contém uma propriedade constructor. Esta propriedade construtora aponta para a função construtora original. Como você verá na próxima seção, as propriedades definidas na propriedade PessoaCompleta.prototype (ou, em geral, na propriedade prototype de uma função construtora, que é um objeto, conforme mencionado na seção acima) tornam-se disponíveis para todos os objetos de instância criados usando Construtor PessoaCompleta(). Portanto, a propriedade constructor também está disponível para os objetos pessoaTeste1 e pessoa2.
 * 
 * Por exemplo, tente estes comandos no console:
*/

pessoaTeste1.constructor;
pessoa2.constructor;

/**
 * Estes devem retornar o construtor PessoaCompleta(), pois contém a definição original dessas instâncias. 
 * 
 * Um truque inteligente é que você pode colocar parênteses no final da propriedade do constructor (contendo quaisquer parâmetros necessários) para criar outra instância de objeto daquele construtor. O construtor é uma função depois de tudo, então pode ser chamado usando parênteses; você só precisa incluir a palavra-chave new para especificar que deseja usar a função como um construtor.
*/

var pessoa3 = new pessoaTeste1.constructor('Karen', 'Stephenson', 26, 'female', ['playing drums', 'mountain climbing']);

/**
 * Agora tente acessar os recursos do seu novo objeto, por exemplo:
*/

pessoa3.nome.primeiro;
pessoa3.idade;
pessoa3.bio();

/**
 * Isso funciona bem. Você não precisará usá-lo com frequência, mas pode ser realmente útil quando você deseja criar uma nova instância e não tem uma referência ao construtor original facilmente disponível por algum motivo.
 * 
 * A propriedade do constructor tem outros usos. Por exemplo, se você tiver uma instância de objeto e desejar retornar o nome do construtor do qual ela é uma instância, use o seguinte:
*/

nomeIntancia.constructor.name;

//exemplo, return um nome de função no caso retorna o nome do construtor do objeto
//return "PessoaCompleta"
pessoaTeste1.constructor.name;

/**
 * Nota: O valor de  constructor.name pode mudar (devido à herança prototípica, ligação, pré-processadores, transpilers, etc.), portanto, para exemplos mais complexos, você desejará usar o operador instanceof. 
*/