/**
 * * OUTRAS MANEIRAS DE CRIAR INSTÂNCIA DE OBJETO
 *  
 * Até agora, vimos duas maneiras diferentes de criar uma instância de objeto — declarar um literal de objeto, e usar uma função de construtor.
 * 
 * Isso faz sentido, mas existem outras maneiras — queremos familiarizá-lo com essas informações caso você as encontre em suas viagens pela Web
 * 
 * * O CONSTRUTOR Object()
 * 
 * Primeiro de tudo, você pode usar o construtor Object() para criar um novo objeto. Sim, até objetos genéricos possuem um construtor, o que gera um objeto vazio.
 * 
 * Tente inserir isso no console JavaScript do seu navegador
*/

//cria um objeto generico vazio e armazena na variavel pessoa1 com o construtor Object()
var pessoa1 = new Object();

/**
 * Isso armazena um objeto vazio na variável person1. Você pode adicionar propriedades e métodos a esse objeto usando a notação de pontos ou colchetes conforme desejado; tente estes exemplos no seu console:
 * 
*/

//add propriedades e metodos ao obj usando a notação de ponto ou de colchetes
pessoa1.nome = 'Chris'; //propriedade do obj
pessoa1['idade'] = 38; //propriedade do obj
pessoa1.saudacao = function() { //metodo do obj
    alert('Ei! eu sou ' + this.nome + '.');
};

/**
 * Você também pode passar um literal de objeto para o construtor Object() como um parâmetro, para preenchê-lo com propriedades/métodos. Tente isso no seu console JS: 
*/

/* literal de objeto anonino
{
    nome: 'Chris',
    idade: 38,
    saudacao: function() {
        alert('Ei! eu sou ' + this.nome + '.');
    }
}*/

//passando o literal de objeto para o construtor Object, que cria um objeto com as propriedades e metodos definidos no literal de objeto e armazena o objeto criado em pessoa2
var pessoa2 = new Object({
    nome: 'Chris',
    idade: 38,
    saudacao: function() {
        alert('Ei! eu sou ' + this.nome + '.');
    }
});


/**
 * * USANDO O MÉTODO create()
 * 
 * Os construtores podem ajudá-lo a fornecer seu pedido de código — você pode criar construtores em um único local e, em seguida, criar instâncias conforme necessário, e fica claro de onde eles vieram.
 * 
 * No entanto, algumas pessoas preferem criar instâncias de objeto sem primeiro criar construtores, especialmente se estiverem criando apenas algumas instâncias de um objeto. JavaScript tem um método embutido chamado create() que permite que você faça isso. Com ele, você pode criar um novo objeto com base em qualquer objeto existente.
 * 
 * Com o exercício concluído das seções anteriores carregadas no navegador, tente isso no seu console JavaScript:
*/

//usando o metodo Object.create(); -> cria um novo objeto baseado no objeto passado por parametro, o novo obj e armazenado em pessoa2, a variavel pessoa2 vai ter as mesmas propriedades e metodos de pessoa1, mas no final são instancias de objetos diferentes
var pessoa2 = Object.create(pessoa1);

//acessando as propriedades e metodos do objeto
pessoa2.nome;
pessoa2.saudacao();

/**
 * Você verá que a person2 foi criada com base na  person1  —  ela tem as mesmas propriedades e métodos disponíveis para ela.
 * 
 *  
*/