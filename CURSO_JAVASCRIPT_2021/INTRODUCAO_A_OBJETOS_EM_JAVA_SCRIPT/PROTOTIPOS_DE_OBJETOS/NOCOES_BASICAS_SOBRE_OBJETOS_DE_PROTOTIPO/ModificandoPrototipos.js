/**
 * * MODIFICANDO PROTÓTIPOS
 * 
 *  Vamos dar uma olhada em um exemplo de modificação da propriedade prototype de uma função construtora — os métodos adicionados ao protótipo estão então disponíveis em todas as instâncias de objeto criadas a partir do construtor. Neste ponto, finalmente adicionaremos algo ao protótipo do nosso construtor PessoaCompleta().
 * 
 * 
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
let pessoaTeste1 = new PessoaCompleta('Bob', 'Smith', 32, 'masculino', ['musica','skiar']);

/**
 * o seguinte código, que adiciona um novo método à propriedade prototype do construtor: 
*/

PessoaCompleta.prototype.farewell = function() {
    alert(this.name.primeiro + 'deixou o prédio. Tchau agora!');
};

/**
 * Salve o código e carregue a página no navegador e tente inserir o seguinte na entrada de texto: 
*/


pessoaTeste1.farewell(); //return "Bob deixou o prédio. Tchau agora!"

/**
 * Você deve receber uma mensagem de alerta, mostrando o nome da pessoa, conforme definido dentro do construtor. Isso é realmente útil, mas o que é ainda mais útil é que toda a cadeia de herança foi atualizada dinamicamente, disponibilizando automaticamente esse novo método em todas as instâncias de objeto derivadas do construtor.
 * 
 * Pense nisso por um momento. Em nosso código, definimos o construtor, então criamos um objeto de instância a partir do construtor, então adicionamos um novo método ao protótipo do construtor:
 * 
 * Mas o método  farewell() ainda está disponível na instância do objeto  pessoaTeste1 — seus membros foram atualizados automaticamente para incluir o método farewell().
 * 
 * Você raramente verá propriedades definidas na propriedade prototype, porque elas não são muito flexíveis quando definidas dessa forma. Por exemplo, você poderia adicionar uma propriedade assim:
 * 
 * 
*/

PessoaCompleta.prototype.nomeCompleto = 'Bob Smith';

/**
 * isso não é muito flexível, pois a pessoa pode não ser chamada assim. Seria muito melhor construir o nomeCompleto fora do nome.primeiro e nome.ultimo:
*/

PessoaCompleta.prototype.nomeCompleto = this.nome.primeiro + ' ' + this.nome.ultimo;

/**
 * No entanto, isso não funciona, pois  this fará referência ao escopo global nesse caso, não ao escopo da função. Chamar essa propriedade retornaria undefined undefined. Isso funcionou bem no método que definimos anteriormente no protótipo porque ele está dentro um escopo de função, que será transferido com sucesso para o escopo da instância do objeto, portanto, você pode definir propriedades constantes no protótipo (ou seja, aquelas que nunca precisam ser alteradas), mas geralmente funciona melhor definir propriedades dentro do construtor. 
 * 
 * Na verdade, um padrão bastante comum para mais definições de objetos é definir as propriedades dentro do construtor e os métodos no protótipo. Isso torna o código mais fácil de ler, pois o construtor contém apenas as definições de propriedade e os métodos são divididos em blocos separados. Por exemplo:
*/

//Construtor com definições de propriedade
function Test(a, b, c, d) {
    //definições de propriedade
}

//Definição do primeiro método
Test.prototype.x = function() {/*...*/};

//definição do segundo método
Test.prototype.y = function() {/*...*/};

//etc...