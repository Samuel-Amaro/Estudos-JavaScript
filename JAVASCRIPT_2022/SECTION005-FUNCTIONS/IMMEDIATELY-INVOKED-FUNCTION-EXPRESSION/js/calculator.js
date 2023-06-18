//biblioteca chamada calculator.js 
//possui as seguintes funções

//declara um function chamada add que possui dois paramentros
/*
function add(a, b) {
    //retorna a soma dos paramentros
    return a + b;
}*/

//declara uma function chamada multiply que possui dois paramentros
/*function multiply(a, b) {
    //retorna a multiplicação dos parametros
    return a * b;
}*/


//declara uma expressão de função imediatamente invocada
//a expressão de função e a propria function anonima dentro do ()
//a expressão de função fica apos o operador de atribuição no lado direito, tudo isso e expressão de função
//apos a declaração de expressão da function ela e invocada logo em seguinda e atribui o return a constante calculator
const calculator = (function() {
    
    //declara uma function que possui dois paramentros e retorna a soma deles
    function add(a, b) {
        return a + b;
    }

    //declara uma function que possui dois paramentros e retorna a multiplicação deles
    function multiply(a, b) {
        return a * b;
    }

    //a function anonima retorna um objeto literal anonimo com duas propriedades que fazem referencia as functions add() e multiply()
    return {
        //propriedades que referencia uma functions
        add: add,
        multiply: multiply
    }

})();
