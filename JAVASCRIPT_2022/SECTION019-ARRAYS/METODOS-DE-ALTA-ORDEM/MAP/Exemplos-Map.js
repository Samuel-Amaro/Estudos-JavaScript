/**
 * * MAIS MAP() EXEMPLOS DE ARRAY DE JS
 * 
 *  O exemplo a seguir mostra como transformar uma array de números usando um método interno do Math tipo como a callback()função.
*/

//declara um array literal inicializado com 3 elementos
//array denso
let numeros = [16, 25, 36];

//chama o metodo map do tipo Array.map(callback);
//este metodo ira transformar os elementos do array de numeros e ira retornar um novo array com os elementos trasnformados, este metodo não modifica a array original
//ao chamar a map, tem que passar um argumento obrigatorio, a callback function
//que e chamada em cada elemento do array faz a transformação do elemento e retorna um novo array
//exemplo: a função de callback do exemplo abaixo e um metodo que ira calcular a raiz quadrada de cada elemento do array numeros
//e ira retorna um novo array com os valores das raiz
let results = numeros.map(Math.sqrt);

console.log(results);

/**
 * A nova array contém as raízes quadradas dos números na numbers array.
 * 
 * Neste tutorial, você aprendeu como usar o map() método JavaScript Array para transformar elementos de uma array de acordo com uma função fornecida.
*/