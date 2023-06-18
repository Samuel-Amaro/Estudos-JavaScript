/**
 * * VALORES DE RETORNO DE FUNÇÃO
 * 
 *   Algumas funções não retornam um valor significativo após a conclusão, mas outras o fazem, e é importante entender quais são seus valores, como utilizá-los em seu código e como fazer com que suas próprias funções personalizadas retornem valores úteis.
 * 
 * * QUAIS SÃO OS VALORES DE RETORNO ?
 * 
 * Valores de retorno são exatamente como soam — valores retornados pela função quando são concluídos.
*/

var meuTexto = 'Eu sou uma string';
var novaString = meuTexto.replace('string','sausage');
//a função de sequência () substitui uma sequência,
//substitui um substring por outro, e retorna
//uma nova sequência com a substituição feita

/**
 * Algumas funções não retornam um valor de retorno como tal (em nossas páginas de referência, o valor de retorno é listado como void ou undefined em tais casos)
 * 
 * * USANDO VALORES DE RETORNO EM SUAS PRÓPRIAS FUNÇÕES
 * 
 *  Para retornar um valor de uma função personalizada, você precisa usar ... aguarde por isso ... a palavra-chave return.
 * 
 * A função random() recebe um parâmetro — um número inteiro — e retorna um número aleatório inteiro entre 0 e esse número. Se parece com isso:
*/

function randomNumber(number) {
    return Math.floor(Math.random() * number);
}

//Isso pode ser escrito da seguinte maneira:

function randomNumber(number) {
    var result = Math.floor(Math.random() * number);
    return result;
}

