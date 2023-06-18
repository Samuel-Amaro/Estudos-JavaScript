/**
 * * OS indexOf() exemplos de método de array JS
 * 
 * Suponha que você tenha uma array scores que consiste em seis números como segue:
*/

//declara um array literal e o inicializa com 6 elementos, e um array denso, não ordenado
var scores = [10, 20, 30, 10, 40, 20];

/**
 * O exemplo a seguir usa o indexOf() método para encontrar os elementos na scores array:
*/

//utilizando o metodo Array.indexOf() do tipo array
//Este metodo retorna o indice da primeira ocorrencia do elemento no array, retorna em qual posição o elemento se encontra no array, somente a sua primeira ocorrencia
console.log(`${10} foi encontrado em qual indice ? ${scores.indexOf(10)}`); //0
console.log(`${30} foi encontrado em qual indice ? ${scores.indexOf(30)}`); //2
console.log(`${50} foi encontrado em qual indice ? ${scores.indexOf(50)}`); //-1 : e um indice que e retornado quando o elemento não e encontrado
console.log(`${20} foi encontrado em qual indice ? ${scores.indexOf(20)}`); //1

/**
 *  E o exemplo a seguir usa fromIndex() com os valores negativos:
*/

//o metodo indexOf() do tipo array aceita dois argumentos
//primeiro e o elemento que desejo procurar na array
//o segundo e um indice de array no qual a metodo inicia a pesquisa no array a partir daquele indice
//indice pode ser valores positivos e negativos
//testando com valores negativos
//se utilzar indices negativos tera que fazer uma aritmetica basica entre os operadores e ver qual valor resultante ira retorna para mostrar qual o indice correto
//indice positivo em que se encontra o elemento, da esquerda para direita
//e indice negativo da direita para esquerda(inicia-se em -1 a contagem)
//e fazer a soma entre os dois e ver em qual indice verdadeiro resulta
//numero de elementos no array + (fromIndexNegativo) = x;

console.log(`${20} pode ser encontrado a partir do indice ${-1} ? indice encontrado = ${scores.indexOf(20, -1)}`); //5 (fromIndex = 6 + (-1) = 5)
console.log(`${20} pode ser encontrado a partir do indice ${-5} ? indice encontrado = ${scores.indexOf(20, -5)}`); //1 (fromIndex = 6 + (-5) = 1)

/**
 *  Supondo que você tenha a seguinte array de objetos , onde cada objeto tem duas propriedades: name e age.
*/

//cria um array literal e o inicializa com 3 elementos, os elementos são objetos com duas propriedades
//um array denso
var guests = [
    {name: 'John Doe', age: 30},
    {name: 'Lily Bush', age: 20},
    {name: 'William Gate', age: 25}
];

/**
 * A instrução a seguir retorna -1, embora o primeiro elemento da guests array e searchElement tenham os mesmos valores nas propriedades name e ages. Isso ocorre porque eles são dois objetos diferentes. 
*/

//o metodo indexOf do tipo array abaixo
//ira procurar um elemento que possui um valor de objeto com duas propriedades 
//o indexOf retorna -1 pois não encontrou nenhuma ocorrencia desse objeto no array, mesmo tendo o primeiro elemento do array como objeto e com mesmas propriedades que o objeto que procuro
//isso ocorre porque são objetos diferentes
console.log(`Object com name: ${'John Doe'} e age: ${30} existe na array em qual indice ? ${guests.indexOf({name: 'John Doe', age: 30})}`); //-1

/**
 * Às vezes, você deseja encontrar os índices de todas as ocorrências de um elemento em uma array. A find() função a seguir usa o indexOf() método para fazer isso.
*/

function find(needle, haystack) {
    var results = [];
    //procura o indice da primeira ocorrencia do elemento needle no array haystack
    var idx = haystack.indexOf(needle);
    //enquanto o idx tiver um valor diferente de -1 que significa que esta encontrando indices das ocorrencias do elemento, quando o elemento possui mais de uma ocorrencia
    while(idx != -1) {
        //add o indice encontrado da ocorrencia no final de um novo array
        results.push(idx);
        //e chame o indexOf para começar a procurar  os indices das proximas ocorrencias, a partir de um novo fromIndex argumento, informando a indexOf a partir de qual indice deve procurar as novas ocorrencias no array
        idx = haystack.indexOf(needle, idx + 1);
    }
    return results;
}

/**
 * O exemplo a seguir usa a find() função acima para retornar uma array de posições do número 10 na scores array.
*/

//traz os indices das ocorrencias do valor 10 no array
console.log(`${10} foi encontrado em quais indices ? [${find(10, scores)}]`); //[0, 3]