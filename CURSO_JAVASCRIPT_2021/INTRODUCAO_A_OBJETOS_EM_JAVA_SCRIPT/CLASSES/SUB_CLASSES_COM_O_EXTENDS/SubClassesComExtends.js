/**
 * * SUB CLASSE COM O EXTENDS
 * 
 *  A palavra-chave extends é usada em uma declaração de classe, ou em uma expressão de classe para criar uma classe como filha de uma outra classe.
*/

//classe Pai(Super Classe)
class Animal{
    //construtor que define propriedades da intancia
    //toda intancia vai ser inicializada com um nome
    constructor(nome) {
        this.nome = nome;
    }

    //metodo da intancia, metodos da classe, mas que so pode ser acessado por uma instancia
    falar() {
        console.log(this.nome + ' emite um barulho.');    
    }
}

//classe Filha(SubClasse), a classe Cachorro herda todos os menbros e metodos de Animal
class Cachorro extends Animal{
    //metodo da intancia, metodos da classe, mas que so pode ser acessado por uma instancia
    falar() {
        console.log(this.nome + ' latidos.');
    }
}

//instanciando um obj de Cachorro
let cachorro = new Cachorro('Mat');
cachorro.falar();

/**
 * Se existir um contrutor nas subclasses, é necessário primeiro chamar super() antes de usar a keyword(palavra chave) "this".
 * 
 * Também é possivel ampliar (extends) "classes" baseadas em funções tradicionais.
*/

//função construtora Animal, que inicializa instancias com um nome
//vai ser a classe Pai(super classe)
function Animal(nome) {
    //propriedade de instancia
    this.nome = nome;
}

//definindo uma propriedade de instancia na função construtora animal, por meio da propriedade prototype.
//falar vai ser um metodo de instancia
Animal.prototype.falar = function() {
    console.log(this.nome + ' Faça barulho.');
}

//classe filha(subclasse)
//class Cachorro, herda menbros e metodos da
//função construtora Animal
//neste caso aqui não esta avendo herança, por que não tem como 
//uma classe herdar de objetos normais(não construives)
class Cachorro extends Animal{
    falar() {
        console.log(this.nome + ' lati.');
    }
}

//intanciado um obj da classe Cachorro
let cachorro = new Cachorro('Mitzie');
cachorro.falar(); //Mitzie lati.

/**
 *  Note que classes não extendem objetos normais (não construíveis). Se você quer herdar de um objeto, é necessário utilizar Object.setPrototypeOf():
*/

//definindo uma classe por meio de
//expressões de classe anonima
let Animal = {
    //metodo de instancia
    falar() {
        console.log(this.nome + ' faça barulho.');
    }
};

//criando uma classe por meio da declaração de classe
class Cachorro {
    //toda intancia vai ser inicializada com um nome
    constructor(nome) {
        //propriedade da classe
        this.nome = nome;
    }
}

//dizendo por meio dessa propriedade que quero que 
//Cachorro herde menbros e propriedade da class Animal
//Define o protótipo de um objeto especificado o para objeto proto ou nulo. Devolve o objeto o.
//Chachorro.prototype === Animal
Object.setPrototypeOf(Cachorro.prototype, Animal);

//instanciando um cachorro
let cachorro = new Cachorro('Mitzie');
cachorro.falar(); //Mitzie faça barulho