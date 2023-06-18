/**
 * * CONCAT DE ARRAY DE JS: MERGE ARRAYS
 * 
 * Resumo : neste tutorial, você aprenderá como usar o método concat() de Array JavaScript para mesclar dois ou mais arrays em um único array. 
 * 
 * Para mesclar dois ou mais arrays, você usa o concat() método de um objeto Array. O concat() método retorna uma nova array e não altera as arrays originais. Por exemplo:
*/

//declara um array literal com 3 elementos
//array desso
let odds = [1, 3, 5];
let evens = [2, 4, 6];

//mesclar array de probabilidades e evens
//mescla os dois arrays odds e evens
//mescla o array evens em odds por estar chamando o metodo do tipo objeto array do odds
//primeiro vem os elementos do array odds, depois vem os elementos do array evens
//retornando um novo array, não alterando os originais
let combined = odds.concat(evens);

console.log(`Result: [${combined}]`);
console.log(`Odds: [${odds}]`);
console.log(`evens: [${evens}]`);

/**
 * Neste exemplo, temos duas arrays: odds e evens. Chamamos o concat() método do método odds array para mesclar elementos dos dois arrays. Os elementos da segunda array são anexados aos elementos da primeira array.
 * 
 * Da mesma forma, você pode chamar o concat()método em uma array vazia denotada por ( []):
*/

//mescla odds an evens array em um array vazio
//mescla o odds e evens e array vazio em um array combinado
//retorna um novo array com a mesclagem dos três arrays
//primeiro vem o elemento do array vazio, depois vem os elementos do array odds depois vem o elementos do array evens na mesclagem
combined = [].concat(odds, evens);

console.log(`Result: [${combined}]`);
console.log(`Odds: [${odds}]`);
console.log(`evens: [${evens}]`);

/**
 *  O concat() método permite mesclar mais de duas arrays, conforme mostrado no exemplo a seguir:
*/

//declara um array literal com 3 elementos
let maiusculas = ['A', 'B', 'C'];
let minusculas = ['a', 'b', 'c'];
let digits = [1, 2, 3];

//mescla maiusculas com minusculas e digits
//mescla o array minusculas com minusculas e digits array
//fazendo o concat retorna um novo array com mesclagem desses 3 arrays
let alphanumerics = maiusculas.concat(minusculas, digits);

console.log(`upper: [${maiusculas}]`);
console.log(`minusculas: [${minusculas}]`);
console.log(`digits: [${digits}]`);
console.log(`Alphanumerics: ${alphanumerics}`);

/**
 * Neste exemplo, nós mesclar as três arrays: upper, lower, e digits.
 * 
 * Quando você não passa nenhum argumento para o concat() método, ele simplesmente clona a array e a retorna:
*/

//declara um array e o inicializa com 3 elementos
let colors = ['red', 'green', 'blue'];
//se não passar nenhum argumento, para o concat metodo
//ele somente clona o array
let rgb = colors.concat();

console.log(`colors: [${colors}]`);
console.log(`rgb: ${rgb}`);

/**
 * Se você passar valores que não são arrays, para o concat() método, o método anexará cada valor ao final da array de resultado:
*/

//passando valores não array para o metodo concat
//o metodo simplementes anexara cada valor passado ao final da array de resultado
let moreColors = rgb.concat('yellow', 'magento');

console.log(`moreColors: ${moreColors}`);

/**
 *  No ES6, você pode usar o operador spread para mesclar várias arrays da seguinte maneira:
*/

//utilizando o operador spread para mesclar varias arrays
//neste caso mesclado o array odds e o evens,
//vai gerar um novo array mesclado com os elementos dos dois arrays
combined = [...odds, ...evens];

console.log(`combined: ${combined}`);

/**
 * Neste tutorial, você aprendeu duas maneiras de mesclar vários arrays em um único array usando o concat() método JavaScript Array e o operador spread.
*/