/**
 * * O TIPO SYMBOL
 *  
 * JavaScript adicionou um tipo primitivo no ES6: o symbol. Diferente de outros tipos primitivos, o symbol tipo não possui uma forma literal.
 * 
 * Para criar um símbolo, você chama a Symbol função da seguinte maneira:
*/

//função symbol cria um novo valor toda vez que a chamo
let s1 = Symbol();

/**
 * Observe que Symbol é uma função, não um construtor de objeto, portanto, você não pode usar o new operador. Se você fizer isso, receberá um TypeError. 
 * 
 * A Symbol função cria um novo valor exclusivo toda vez que você a chama.
 * 
*/

console.log("Symbol() == Symbol() = " + (Symbol() === Symbol())); //false

/**
 * Você pode passar uma string descritiva para a Symbol função para fins de registro e depuração.
*/

//usando a symbol função tipo 
let s2 = Symbol('event.save');

/**
 * Quando você chama o toString() método na variável de símbolo, ele retorna um nome mais descritivo, conforme mostrado abaixo:
*/

console.log(("s2.toString() = " + (s2.toString()))); //Symbol(event.save)

/**
 *  Você pode usar símbolos para muitos propósitos. Um deles é criar uma constante semelhante a uma string que não entre em conflito com nenhum outro valor.
 * 
 * O exemplo a seguir cria um símbolo que representa o clickevento.
*/

const click = Symbol('click');

/**
 * A string 'click'pode ser usada para finalidades diferentes e não exclusivas. No entanto, o click símbolo é absolutamente único.
*/