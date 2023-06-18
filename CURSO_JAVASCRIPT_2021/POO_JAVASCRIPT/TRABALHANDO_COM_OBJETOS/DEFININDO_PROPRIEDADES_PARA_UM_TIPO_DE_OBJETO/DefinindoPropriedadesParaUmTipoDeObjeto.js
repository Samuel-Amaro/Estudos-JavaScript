/**
 * * DEFININDO PROPRIEDADES PARA UM TIPO DE OBJETO
 * 
 *  Você pode adicionar uma propriedade a um tipo de objeto definido anteriormente, utilizando a propriedade prototype. Esta define uma propriedade que é partilhada por todos os objetos do tipo especificado, em vez de apenas uma instância do objeto. O código a seguir adiciona uma propriedade cor para todos os objetos do tipo Carro, em seguida adiciona um valor a propriedade cor do objeto carro1.
*/

//definindo um tipo de objeto Chamado Pessoa usando a função construtora
function Pessoa(nome, idade, sexo) {
    this.propNome = nome;
    this.propIdade = idade;
    this.propSexo = sexo;
}

//cria objetos do tipo Pessoa
var jose = new Pessoa("Jose Silva", 33, "M");

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

//add uma nova propriedade a um tipo de objeto ja definido, utilizando  a propriedade prototype.
//todos os objetos ja criados, existentes vão receber essa propriedade.

Carro.prototype.cor = null;
carro1.cor = "preto";

