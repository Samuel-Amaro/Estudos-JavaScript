/**
 * * JAVASCRIPT NUMBER OBJETC VS PRIMITIVE NUMBER(Objeto de número JavaScript vs. número primitivo) 
 * 
 * A tabela a seguir ilustra as diferenças entre um Number objeto e um número primitivo:
 
    operator = typeof
    Number Object = "object"
    Number value = number
    -------------------------------
    operator = instanceof number
    Number object = true
    Number value = false

 *
 * E aqui estão alguns exemplos:
 * */

//cria uma instancia de objeto do tipo de referencia Number
let objectNumber = new Number(10);

//declara e inicializa uma variavel com o valor primitivo numerico 
let number = 10;

//typeof(operador que mostra o tipo de um variavel ou objeto)
console.log(`typeof objectNumber = ${typeof objectNumber}`);
console.log(`typeof number = ${typeof number}`);

//instanceOf(operador que mostra se um variavel ou objeto ou um tipo e de uma determinada instancia de um tipo de referencia)
console.log(`objectNumber instanceof Number = ${objectNumber instanceof Number}`); //true
console.log(`number instanceof Number = ${number instanceof Number}`); //false