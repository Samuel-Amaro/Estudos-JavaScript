/**
 * * JAVASCRIPT ARRAY JOIN
 * 
 * Resumo : neste tutorial, você aprenderá como usar o join() método JavaScript Array para concatenar todos os elementos de um array em uma string separada por um separador.
 * 
 * * INTRODUÇÃO AO MÉTODO JAVASCRIPT ARRAY JOIN()
 * 
 * O join() método permite concatenar todos os elementos de uma array e retorna uma nova string:
 
    Array.prototype.join([separator]);

 * 
 * O join() método aceita um argumento opcional separator que é uma string que separa cada par de elementos adjacentes da array na string de resultado.
 * 
 * O separator padrão é uma vírgula se você não passar para o join() método.
 * 
 * Caso a array tenha um elemento, o join()método retorna esse elemento como uma string sem usar o separator.
 * 
 * E se a array estiver vazia, o join() método retorna uma string vazia.
 * 
 * Quando os elementos do array não são strings, o join() método os converte em strings antes de unir.
 * 
 * Observe que o join() método converte undefined, null e um array vazio[] em uma string vazia.
 * 
 * * EXEMPLOS DE MÉTODOS JAVASCRIPT ARRAY JOIN
 * 
 * Vamos dar alguns exemplos de uso do join()método.
 * 
 * * 1) USANDO O MÉTODO JOIN() DE ARRAY JAVASCRITP PARA JUNTAR CLASSES CSS
 * 
 * O exemplo a seguir usa o join() método JavaScript Array para unir classes CSS:
*/

//declara um array literal inicializado com 3 elementos 
//array denso
const cssClasses = ['btn', 'btn-primary', 'btn-active'];
//utilizando o metodo join, ira concatenar todos os elementos de uma array e retorna uma nova string
//o paramentro de join e separator que é uma string que separa cada par de elementos adjacentes da array na string de resultado.
//aqui cada par de elementos sera separado por um espaço em branco entre cada elemento
const btnClass = cssClasses.join(' ');

console.log(`cssClasses = [${cssClasses}]`);

console.log(`btnClass = [${btnClass}]`);

/**
 * Neste exemplo, temos um array que contém uma lista de classes CSS. E usamos o join()método junta todos os elementos do cssClasses array e retorna uma string das classes CSS separadas por um espaço.
 * 
 * * 2) USANDO O MÉTODO JOIN() DE ARRAY JAVASCRIPT PARA SUBSTITUIR TODAS AS OCORRÊNCIAS DE UMA STRING   
 * 
 * Este exemplo usa o join() método JavaScript Array para substituir todas as ocorrências do espaço ' 'pelo hífen ( -):
*/

const title = 'JavaScritp array join example';

console.log(`title = ${title}`);

//o split metodo retorna o array de substrings separada pelo separator argumento do split, corta a string em substring a partir do argumento do split, o join junta novamente as substrings usando o - como separator a cada substring, e converte a string final de join em minuscula
const url = title.split(' ').join('-').toLowerCase();

console.log(`url = ${url}`);

/**
 * Como funciona:
 
    - Primeiro, divida a title string pelo espaço em uma array usando o split()método string.

    - Em segundo lugar, concatene todos os elementos na array de resultado em uma string usando o join() método.

    - Terceiro, converta a string de resultado em minúsculas usando o toLowerCase() método.

 * 
 * Use o join()método JavaScript Array para concatenar todos os elementos de uma array em uma string separada por um separador.
*/