/**
 * * DEFININDO CLASSES
 * 
 *  As Classes são, de fato, "funções especiais", e, assim como você pode definir "function expressions" e "function declarations", a sintaxe de uma classe possui dois componentes: "class expressions" e  "class declarations".
 * 
 * * DECLARANDO CLASSES
 * 
 * Uma maneira de definir uma classe é usando uma declaração de classe. Para declarar uma classe, você deve usar a palavra-chave class seguida pelo nome da classe (aqui "Retangulo").
*/

//SINTAXE

class NomeClasse{
    //construtor, define propriedades da classe
    constructor(){

    }

    //metodos da classe, getter e setter entre outros
}

//EXEMPLO DECLARANDO UMA CLASSE

class Retangulo{
    //propriedades da classe(atributos) que são obrigatorios
    constructor(altura, largura) {
        //propriedades da classe
        this.altura = altura;
        this.largura = largura;
    }
}

/**
 * * EXPRESSÕES DE CLASSES
 * 
 *  Uma Expressão de Classe (class expression) é outra forma para definir classes. Expressões de Classes podem possuir nomes ou não (anônimas). O nome dado para uma expressão de classe é local ao corpo da classe.
*/

//DEFININDO CLASSE POR MEIO DE UMA EXPRESSÃO DE CLASSE, QUE E ANONIMA SEM NOME, EXPRESSÃO SEM NOME
let Retangulo = class {
    constructor(altura, largura) {
        this.altura = altura;
        this.largura = largura;
    }
};

//DEFININDO CLASSE POR MEIO DE UMA EXPRESSÃO DE CLASSE, QUE E NOEMADA, EXPRESSÃO COM NOME
let Retangulo = class Retangulo{
    constructor(altura, largura) {
         this.altura = altura;
         this.largura = largura;  
    }
};

/**
 * Nota: As expressões de classe também sofrem com o mesmo problema de hoisted mencionados em declarações de classe. 
*/



