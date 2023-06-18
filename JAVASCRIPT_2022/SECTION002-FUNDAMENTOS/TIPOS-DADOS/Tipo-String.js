/**
 * * STRING TIPO
 * 
 *  Em JavaScript, uma string é uma sequência de zero ou mais caracteres. Uma string literal começa e termina com aspas simples (') ou aspas duplas (“).
 * 
 * Uma string que começa com aspas duplas deve terminar com aspas duplas e uma string que começa com aspas simples deve terminar com aspas simples.
*/

//string com aspas simples
let falando = 'Oi...';
//string com aspas duplas
let s = "Esta e uma string valida"; 
//string com aspas simples dentro de aspas simples, escapando caracteres com barra
let str = 'I\'m also a string';// use \ para escapar das aspas simples (')

/**
 * As strings de JavaScript são imutáveis. Isso significa que você não pode modificar uma string depois de criada.
 * 
 * No entanto, você pode criar uma nova string com base em uma operação na string original, como esta:
*/

//cria uma nova string
let str2 = 'JavaScript';
//concatena a string ja existente com uma nova add uma nova palavra na string, fazendo ser modificada
str2 = str2 + ' String';

/**
 * Primeiro, declare a str variável e inicialize-a com uma string de 'JavaScript'.
 * 
 * Em segundo lugar, use o +operador para combinar 'JavaScript'com ' String'para tornar seu valor como 'Javascript String'
 * 
 * Nos bastidores, o mecanismo JavaScript cria uma nova string que contém a nova string 'JavaScript String'e destrói duas outras strings originais 'JavaScript'e ' String'.
*/