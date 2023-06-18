/**
 * * TAGGED TEMPLATES(MODELOS MARCADOS)
 * 
 *  Uma tag de modelo carrega a transformação no literal de modelo e retorna a string de resultado.
 * 
 * Você coloca a tag no início do modelo antes do caractere crase (`) da seguinte maneira:
*/

//exemplo de modelo marcado
let greeting = tag`Oi`;

/**
 * Neste exemplo, tag é a tag de modelo que se aplica ao Oi literal de modelo. O tag pode ser qualquer função com a seguinte assinatura:
*/

function tag(literals, ...substitutions) {
    //return uma string
}

/**
 * Nesta função:
 * 
 *      O literals parâmetro é uma array que contém as strings literais.
 *      
 *      O substitutions parâmetro contém os argumentos subsequentes interpretados para cada substituição.   
 * 
*/

//toda string entre as `` vai para o array literals
//toda substituição que e usada ${variable_name}, que e usada que recebe ou uma variavel ou uma expressão, e passada para substitutions

function format(literals, ...substitutions) {
    let result = '';
    for(let i = 0; i < substitutions.length; i++) {
        console.log("Literal: " + literals[i]);
        result += literals[i];
        console.log("Subst " + substitutions[i]);
        result += substitutions[i];
    }
    //add o último literal
    result += literals[literals.length - 1];
    return result;
}

//literals: '', items const
//substitutions: 9 80.91

let quantity = 9, priceEach = 8.99, result = format`${quantity} items const $${(quantity * priceEach).toFixed(2)}.`;

console.log(result); //9 items const $80.91

/**
 * Neste exemplo, a format() função aceita três argumentos: a literals array e dois outros argumentos armazenados na substitutions array.
 * 
 * O primeiro argumento é a literals array que contém três elementos:
 * 
 *      Uma string vazia antes da primeira substituição ( ” ). Observe que o primeiro argumento da matriz de literais é uma string vazia. 
 * 
 *     Uma string 'items cost'localizada entre a primeira e a segunda substituições.
 * 
 *      Uma string que segue a segunda substituição ( '.')
 * 
 * O segundo argumento é 9, que é o valor interpretado da quantity variável. Ele se torna o primeiro elemento da substitutions array. O terceiro argumento é 80.91, que é o valor interpretado da expressão (quantity * priceEach).toFixed(2). Ele se torna o segundo elemento da array de substituições.
 * 
 * Agora, você deve ter um bom entendimento dos modelos literais de JavaScript e como aplicá-los em seu código.
*/