/**
 * * USANDO O MÉTODO Object.create
 * 
 * Objetos podem também ser criados usando-se o método Object.create(). Esse método pode ser muito útil, pois permite que você escolha o objeto protótipo para o objeto que você quer criar, sem a necessidade de se definir uma função construtora.
 *  
*/

//cria um objeto com as propriedades e metodos usando o inicializador de objetos

//Encapsulamento das propriedades e métodos de Animal
var Animal = {
    tipo: "Invertebrados", //proprieddades de valores padrão
    qualTipo: function() {
        //método que ira mostrar o tipo de Animal
        console.log(this.tipo);
    }
}

//cria um novo tipo de animal chamada animal1
//(método) ObjectConstructor.create (o: objeto): qualquer (+1 sobrecarga)
//Cria um objeto que possui o protótipo especificado ou que possui protótipo nulo.
//@param o - Objeto a ser usado como protótipo. Pode ser nulo.
//cria um novo objeto baseado na classe passada por parametro, ou cria um novo objeto baseado em um objeto existente
var animal1 = Object.create(Animal);
animal1.qualTipo(); //Saida: Invertebrados

//cria um novo tipo de animal chamado Peixes
var peixe = Object.create(Animal);
peixe.tipo = "Peixes";
peixe.qualTipo(); //Saída: Peixes
