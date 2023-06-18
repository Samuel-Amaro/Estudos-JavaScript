/**
 * * USANDO UMA FUNÇÃO CONSTRUTORA
 * 
 *  Alternativamente, você pode criar um objeto com estes dois passos:
 
    1. Defina o tipo de objeto escrevendo uma função construtora. Há uma forte convenção, e com boa razão, de se usar uma letra inicial maiúscula.

    2. Crie uma instância do objeto com new.

 * 
 * Para definir um tipo de objeto, crie uma função para o tipo de objeto que especifique seu nome, suas propriedades e seus métodos. Por exemplo, suponha que você queira criar um tipo objeto para carros. Você quer que esse tipo de objeto seja chamado carro, e você quer ele tenha propriedades de marca, modelo, e ano. Para fazer isto, você escreveria a seguinte função:
 *  
*/

//cria uma tipo Objeto Carro com as propriedades que são informadas por parametro, por meio de uma Função construtora
/*
function Carro(marca, modelo, ano) {
    this.propMarca = marca;
    this.proModelo = modelo;
    this.propAno = ano;
}
*/

/**
 * Note o uso de this para atribuir valores às propriedades do objeto com base nos valores passados para a função. 
 * 
 * Agora você pode criar um objeto chamado meucarro como se segue:
*/

//intanciando um novo Objeto do tipo Carro usando a palavra chave new
//var meuCarro = new Carro("Eagle", "Talos TSi", 1993);

/**
 * Esse comando cria meucarro e atribui a ele valores especificados para suas propriedade. Então o valor de meucarro.marca é a string "Eagle", meucarro.ano é o inteiro 1993, e assim por diante.
*/

//para acessar as propriedades do objeto
//meuCarro.proModelo;
//meuCarro.propAno;

/**
 * Você pode criar qualquer número de objetos carro com o uso de new. Exemplo
*/

//var carroDeKen = new Carro("Nissan", "300ZX", 1992);
//var carroDeVPG = new Carro("Mazda", "Miata", 1990);

/**
 * Um objeto pode ter uma propriedade que por si só também é um objeto. Por exemplo, suponha que você define um objeto chamado pessoa como se segue:
*/

//definindo um tipo de objeto Chamado Pessoa usando a função construtora
function Pessoa(nome, idade, sexo) {
    this.propNome = nome;
    this.propIdade = idade;
    this.propSexo = sexo;
}

/**
 * e então você instancia dois novos objetos pessoa da seguinte forma:
*/

//cria objetos do tipo Pessoa
var jose = new Pessoa("Jose Silva", 33, "M");
var paulo = new Pessoa("Paulo Santos", 39, "M");

/**
 * Então, você pode reescrever a definição de carro de modo a incluir uma propriedade dono que recebe um objeto pessoa, como se segue:
*/

//cria um tipo de objeto Carro, usando a função cosntrutora
function Carro(marca, modelo, ano, dono) {
    this.propMarca = marca;
    this.propModelo = modelo;
    this.propAno = ano;
    //a propriedade dono e um objeto de tipo Pessoa
    this.propDono = dono;
}

/**
 * Para instanciar os novos objetos, você então usa o seguinte:
*/
var carro1 = new Carro("Eagle", "Talon TSi", 1993, jose);
var carro2 = new Carro("Nissan", "300ZX", 1992, paulo);

/**
 * Perceba que ao invés de passar uma string literal ou um valor inteiro na hora de criar os novos objetos, os comandos acima passam os objetos jose e paulo como os argumentos para os donos. Então se você quiser descobrir o nome do dono de carro2, você pode acessar a seguinte propriedade:
*/

carro2.propDono;

/**
 * Note que você pode sempre adicionar uma propriedade a um objeto definido anteriormente. Por exemplo, o comando
*/
//add uma nova propriedade a um objeto existente
carro1.propCor = "preto";

/**
 * adiciona uma propriedade cor ao carro1, e dá a ele o valor "preto." No entanto, isso não afeta nenhum outro objeto. Para adicionar a nova propriedade a todos os objetos do mesmo tipo, você deve adicionar a propriedade na definição do tipo de objeto carro.
*/

