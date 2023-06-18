/**
 * * CORPO DE UMA CLASSE E DEFINIÇÕES DE MÉTODOS
 *  
 * O corpo de uma classe é a parte que está entre chaves {}. É aí onde você define os membros da classe, como os métodos, ou os construtores.
 * 
 * * MODO ESTRITO(strict mode)
 * 
 * Os corpos das Declarações de Classes e das Expressões de Classes são executados em modo estrito.
 * 
 * * CONSTRUTOR
 * 
 * O método constructor é um tipo especial de método para criar e iniciar um objeto criado pela classe. Só pode existir um método especial com o nome "constructor" dentro da classe. Um erro de sintáxe SyntaxError será lançado se a classe possui mais do que uma ocorrência do método constructor.
 * 
 * Um construtor pode usar a palavra-chave super para chamar o construtor de uma classe pai.
 * 
 * * MÉTODOS PROTÓTIPOS
 * 
*/

//classe 

class Retangulo{
    //metodo construtor da classe, precisa de dois parametros obrigatorios para se inicializado um objeto
    constructor(altura, largura) {
        this.altura = altura;
        this.largura = largura;
    }
    //metodos da classe
    //Getter
    get area() {
        return this.calculaArea();
    }

    calculaArea() {
        return this.altura * this.largura;
    }
}

//instanciando um objeto da classe retangulo
const quadrado = new Retangulo(10, 10);

//mostra a area do quadrado no console por meio do metodo
console.log(quadrado.area); //return 100

/**
 * * MÉTODOS ESTÁTICOS
 * 
 *  A palavra-chave static define um método estático de uma classe. Métodos estáticos são chamados sem a instanciação da sua classe e não podem ser chamados quando a classe é instanciada. Métodos estáticos são geralmente usados para criar funções de utilidades por uma aplicação.
*/

//classe
class Ponto{

    //construtor da classe, inicializa propriedades
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    //metodo estatico, pode ser acessado sem uma intancia dessa classe
    //um metodo static, e um metodo da classe, pode ser acessado por meio da classe, não precisa de instancia
    static distancia(a, b) {
        const dx = a.x - b.x;
        const dy = a.y - b.y;
        
        return Math.hypot(dx, dy);
    }
}

//instancias da classe Ponto
const p1 = new Ponto(5, 5);
const p2 = new Ponto(10, 10);

//tentando acessar um metodo static por meio de uma instancia da classe, isso não funciona, não existe
p1.distancia; //undefined
p2.distancia; //undefined

//metodo static so consegue ser acessado por meio da sua respectiva classe, onde o seu escopo e declarado
console.log(Ponto.distancia(p1, p2));

/**
 * * EMPACOTANDO COM PROTÓTIPOS E MÉTODOS ESTÁTICOS
 * 
 *  Quando um método estático ou protótipo é chamado sem um objeto "this" configurado (ou com "this" como boolean, string, number, undefined ou null), então o valor "this" será undefined dentro da função chamada. Autoboxing não vai acontecer. O comportamento será o mesmo mesmo se escrevemos o código no modo não-estrito.
*/

//classe
class Animal{

    //metodo de instancia da classe
    falar() {
        //return o este obj
        return this;
    }

    //metodo static, metodo da classe, sem a necessidade de uma instancia para acessar o metodo
    static comer() {
        //return o este class
        return this;
    }
}

//instanciado uma  instancia da classe Animal
let obj = new Animal();
obj.falar(); // Animal {}
let falar = obj.falar;
falar(); //undefined

//acessando metodo static por meio da classe
Animal.comer(); // class Animal
let comer = Animal.comer;
comer(); //undefined

/**
 * Se escrevemos o código acima usando classes baseadas em função tradicional, então o autoboxing acontecerá com base no valor de "this" para o qual a função foi chamada.
*/

//função construtora de Animal(class Animal)
function Animal() {

}

//definindo uma propriedade na Function construtora de Instancias de Animal
//propriedade falar que e uma propriedade de instancias da classe e seus filhos, recebe um metodo que retorna a referencia do obj;
Animal.prototype.falar = function() {
    return this;
}

//definindo uma propriedade na Function construtora de Instancias de Animal
//propriedade comer, que e uma propriedade static, somente a classe, vai receber um metodo que retorna a referencia da classe
Animal.comer = function() {
    return this;
}

//instanciado um obj Animal, por meio da função construtora
let obj = new Animal();
//acessando a propriedade de instancia
let falar = obj.falar;
falar(); //objeto global

//acessando a propriedade static, de classe
let comer = Animal.comer;
comer(); //objeto global

/**
 * * PROPRIEDADES DE INSTÂNCIA
 * 
 *  Propriedades de instâncias devem ser definidas dentro dos métodos da classe:
*/

class Retangulo{
    //construtor que define as instancias
    constructor(altura, largura) {
        //propriedades de intancia
        this.altura = altura;
        this.lagura = largura;
    }
}

/**
 *  Propriedades de dados estáticos e propriedades de dados prototipados (prototype) devem ser definidos fora da declaração do corpo da classe.
 * 
*/

//propriedades static, e propriedades prototype, definidas fora da declaração do corpo da classe
Retangulo.larguraEstatico = 20;
Retangulo.prototype.larguraPrototipagem = 25;