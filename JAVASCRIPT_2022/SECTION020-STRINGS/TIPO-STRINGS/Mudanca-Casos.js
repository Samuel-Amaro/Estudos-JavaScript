/**
 * * 5) MUDANÇA DE CASOS
 * 
 * Para alterar as maiúsculas e minúsculas de uma string, você usa os métodos toLowerCase() e toUpperCase():
*/

console.log("Mudança de casos");
//string a ser usada
let saudacao = 'Hello';
console.log(`'${saudacao}' apos -> String.toLowerCase() = ${saudacao.toLowerCase()}`); //'hello' letras minusculas
console.log(`'${saudacao}' apos -> String.toUpperCase() = ${saudacao.toUpperCase()}`); //'HELLO' letras maiusculas

/**
 * Em alguns idiomas, as regras para converter uma string em minúsculas e maiúsculas são muito específicas. Portanto, é mais seguro usar os métodos toLocaleLowerCase() e toLocaleUpperCase(), especialmente quando você não sabe com qual linguagem o código lidará.
*/