/**
 * Define um arquivo chamado array.js que é um modulo
 * 
 * Este modulo não exporta nehuma variavel, class ou function ou objeto. 
*/

//so define um novo método interno no prototipo do Array, define um novo método para que todas instancias de array possam compartilhar
if(!Array.prototype.contain) {
    Array.prototype.contain = function(e) {
        //implementação da function anonima com paramentro e que e atribuida a proriedade contain como valor
        //...
    }
}

