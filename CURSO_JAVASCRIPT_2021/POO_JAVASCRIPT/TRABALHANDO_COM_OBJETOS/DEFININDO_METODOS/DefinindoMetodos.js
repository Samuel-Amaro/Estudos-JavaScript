/**
 * * DEFININDO MÉTODOS
 * 
 *  Um método é uma função associada a um objeto, ou, simplesmente, um método é uma propriedade de um objeto que é uma função. Métodos são definidos da forma que as funções normais são definidas, exceto que eles tenham que ser atribuídos como propriedade de um objeto. São exemplos:
*/

nomeDoObjeto.nomedometodo = nome_da_funcao;

var meuObjeto = {
    //cria um metodo para o objeto, a propriedade meu metodo tem um valor, que e uma função anonima definida
    meuMetodo: function(parametros) {
        //...faça algo
    }
};

/**
 *  Onde nomeDoObjeto é um objeto existente, nomedometodo é o nome que você atribuiu ao método, e nome_da_funcao é o nome da função.
 * 
 * Em seguida, você pode chamar o método no contexto do objeto da seguinte forma:
*/

meuObjeto.nomedometodo(parametros);

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

//cria um tipo de objeto Carro, usando a função cosntrutora
/*
function Carro(marca, modelo, ano, dono) {
    this.propMarca = marca;
    this.propModelo = modelo;
    this.propAno = ano;
    //a propriedade dono e um objeto de tipo Pessoa
    this.propDono = dono;
}
*/


/**
 * Você pode definir métodos para um tipo de objeto incluindo uma definição de metodo na função construtora do objeto. Por exemplo, você poderia definir uma função que iria formatar e mostrar as propriedades do objeto carro previamente definido; por exemplo,
*/

function mostreCarro() {
    var resultado = "Um belo " + this.propAno + " " + this.propModelo + " " + this.propModelo;
    pretty_print(resultado);
}

/**
 * onde pretty_print é uma função que mostra uma linha horizontal e uma string. Observe o uso de this para referenciar o objeto ao qual o método pertence.
 * 
 * Você pode fazer desta função um método de carro, adicionando seu estado à definição do objeto.
*/

this.mostreCarro = mostreCarro;

/** 
 * Assim, a definição completa de carro seria agora, parecida com essa:
*/

function Carro(marca, modelo, ano, dono) {
    this.propMarca = marca;
    this.propModelo = modelo;
    this.propAno = ano;
    //a propriedade dono e um objeto de tipo Pessoa
    this.propDono = dono;
    this.mostreCarro = mostreCarro;
}

/**
 * Então você pode chamar o método mostreCarro para cada objeto seguinte:
*/

var carro1 = new Carro("Eagle", "Talon TSi", 1993, jose);
var carro2 = new Carro("Nissan", "300ZX", 1992, paulo);

carro1.mostreCarro();
carro2.mostreCarro();