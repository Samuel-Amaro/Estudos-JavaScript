/**
 * * MIX-INS
 * 
 *  Subclasses abstratas ou mix-ins são templates para classes. Uma classe do ECMAScript pode apenas ter uma classe pai, assim sendo, não é possível a classe ter herança múltipla.
 * 
 * Para se ter um comportamento similar ao de herança múltipla no ECMAScript usa-se mix-ins, uma forma de implementar mix-ins é usar um template de subclasse que é uma função que instancia uma classe base e retorna uma subclasse extendida desta classe base:
*/

//definindo uma classe
class Humano{
    //construtor que define propriedades de um Humano,
    //todo Humano precisa de um nome, toda intancia precisa-se de um nome
    constructor(nome) {
        //propriedade de instancia
         this.nome = nome;   
    }

    //metodo de instancia
    andar() {
        return this.nome + ' andou um passo';
    }
}

//usando o mix-ins
//classe Base extends Base e retorna para const HumanoFalante
const HumanoFalante = Base => class extends Base{
    //metodo de intancia da class Humano falante
    falar() {
        return this.nome + ' diz: olá mundo!';
    }
}

//usando mix-ins
//para mostrar como usar herança multipla
//const HumanoFalante == Base extends Base -> return uma subclasse para a const
const HumanoFalanteMixado = Base => class extends Base{

}

//mostrando como usar a herança multipla no JS
//usando o mix-ins
//HumanoFalanteMixado e sub classe de HumanoFalante, 
//HumanoFalante e sub Classe de Humano
//e Humano e a classe pai(Super classe)
const HumanoFinal = HumanoFalanteMixado(HumanoFalante(Humano));

//instanciando um objeto da classe Humano
const humano = new HumanoFinal('Bill Gates');

console.log(humano.andar()); //return 'Bill Gates andou um passo');
console.log(humano.falar()); //return 'Bill gates diz: ola mundo!';