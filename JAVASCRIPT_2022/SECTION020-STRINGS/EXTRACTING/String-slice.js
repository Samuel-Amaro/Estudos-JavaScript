/**
 * * JAVASCRIPT STRING SLICE() - FATIA
 * 
 *  Resumo : neste tutorial, você aprenderá como usar o slice() método JavaScript String para extrair uma substring de uma string.
 * 
 * * INTRODUÇÃO AO MÉTODO JAVASCRIPT STRING SLICE()
 * 
 * O slice() método retorna um substr de startIndex para endIndex em str:
 
    let substr = str.slice(startIndex [, endIndex]);

 * 
 * O startIndex é um índice baseado em zero no qual a slice() extração inicia.
 * 
 * O endIndex também é um índice baseado em zero antes do qual slice() termina a extração. O substr não incluirá o caractere do endIndex índice.
 * 
 * Se você omitir o endIndex, as slice()extrações serão feitas no final da string.
 * 
 * Se o startIndex ou endIndex for negativo, o slice() tratará como str.length + startIndex ou str.length + endIndex, por exemplo, se startIndex ou endIndexfor -1, o slice() tratará como str.length - 1.
 * 
 * O slice() retorna uma nova string que contém a substring extraída da string.
 * 
 * * EXEMPLO DE MÉTODO DE SLICE DE STRING JS
 * 
 * Vamos dar um exemplo de uso do slice()método.
 * 
 * O exemplo a seguir usa o slice() método para obter a parte local de um endereço de e-mail:
*/

//string a ser usada
let email2 = 'john@example.com';
//o metodo slice, extrai um substring da string email, de um indice inicial até um indice final
//a substring extraida tera que começar em 0 e terminara no indice que for retornado por indexOf('@'), o indice final sera o indice onde se encontra a primeira ocorrencia da substring '@'
let parteLocal = email2.slice(0, email2.indexOf('@')); 

console.log(`'${email2}' : ${parteLocal}`);

/**
 * Como funciona:
 * 
 *      Primeiro, use o indexOf() método para localizar o @ sinal. O valor retornado de indexOf() é usado como o segundo argumento do slice() método.
 * 
 *      Em seguida, use o slice() método para extrair a parte local do e-mail começando do início da string até o caractere antes do @ sinal.   
*/