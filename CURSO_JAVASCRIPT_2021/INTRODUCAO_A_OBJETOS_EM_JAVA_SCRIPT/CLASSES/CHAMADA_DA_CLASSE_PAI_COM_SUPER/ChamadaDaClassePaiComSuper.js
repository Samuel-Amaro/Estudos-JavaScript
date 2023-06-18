/**
 * * CHAMADA DA CLASSE PAI COM SUPER
 * 
 * A palavra-chave (keyword) super é utilizada para chamar funções que pertencem ao pai do objeto. 
*/

//definindo uma classe Pai(super classe)
class Gato{
    //construtor da classe, toda intancia precisa de um nome
    constructor(nome) {
        //propriedade de instancia
        this.nome = nome;
    }

    //metodo da intancia
    falar() {
        console.log(this.nome + ' faça barulho.');
    }
}

//definindo uma classe filha(sub classe)
class Leao extends Gato{
    //metodo de instancia da classe
    falar() {
        //chama o metodo de instancia da classe Pai(super classe)
        super.falar(); //'nome + faça barulho';
        console.log(this.nome + ' roars.'); //'nome + roars'
    }
}

//instanciando uma intancia da classe Leao
let leao = new Leao('Fuzzy'); // Fuzzy faça barulho
leao.falar(); // Fuzzy roars.

