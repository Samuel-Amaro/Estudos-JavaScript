/**
 * * SUBSTITUIÇÃO DE VARIÁVEIS AND EXPRESSÕES(Variable and expression substitutions) 
 * 
 * Neste ponto, um literal de modelo é como uma versão melhor de uma string JavaScript normal. A grande diferença entre um literal de template e uma string normal são as substituições.
 * 
 * As substituições permitem incorporar variáveis ​​e expressões em uma string. O mecanismo JavaScript substituirá automaticamente essas variáveis ​​e expressões por seus valores. Esse recurso é conhecido como interpolação de string.
 * 
 * Para instruir o JavaScript a substituir uma variável e expressão, coloque a variável e a expressão em um bloco especial da seguinte maneira
 
    ${variable_name}

*/

let firstName = 'John', lastName = 'Doe';
//usando a substituição e expressão em um bloco especial para que a string permita incorporar expressões e variaveis
let saudacao = `Oi ${firstName}, ${lastName}`;
console.log(saudacao); //Oi John, Doe

/**
 * A substituição ${firstName} e ${lastName} acesso às variáveis   firstName e lastName inserir seus valores na greeting string.
 * 
 *  A greeting variável então contém o resultado das substituições. O exemplo a seguir substitui uma expressão:
*/

let price = 8.99, tax = 0.1;

var netPrice = `Net Price: $${(price * (1 + tax)).toFixed(2)}`; //permite um numero com no maximo duas cadas decimais apos o .

console.log(netPrice); //netPrice: $9.89

