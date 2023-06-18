/**
 * * 8) Substituindo Substrings 
 * 
 * Para substituir uma substring em uma string, você usa o replace() método.
 
    string.replace(regularExpression, replaceText);
    
 * 
 * O primeiro argumento do replace()método pode ser uma expressão regular ou uma string. Se for uma expressão regular, o replace() método encontrará as correspondências e as substituirá pelo segundo argumento (replaceText). Caso seja uma string, o replace() método fará uma busca exata e fará a substituição.
 * 
 * O replace()método retorna uma cópia da string original após fazer as substituições.
 * 
 * O exemplo a seguir ilustra como usar uma expressão regular para substituir the por a:
*/

//string a ser usada
let str6 = "the baby kicks the ball";

//susbtitui "the" com "a"
//susbtitui a expressão regular que procura substring '/the/g' por 'a'
let newStr = str6.replace(/the/g, "a");
console.log(newStr); //"a baby kicks a ball"
console.log(str); //"the baby kicks the ball"

/**
 * E os seguintes exemplo mostra como substituir kicks com holds usando o primeiro argumento como uma string literal.
*/

newStr = str6.replace('Kicks', 'holds');
console.log(newStr); //"the baby holds the ball"