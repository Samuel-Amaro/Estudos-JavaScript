/**
 * * JAVASCRIPT ARRAY MAP: TRANSFORMAÇÃO DE ELEMENTOS 
 * 
 * Resumo : neste tutorial, você aprenderá como usar o map() método JavaScript Array para transformar elementos em um array.
 * 
 * * INTRODUÇÃO AO MAP() MÉTODO JAVASCRIPT ARRAY
 * 
 * Às vezes, você precisa pegar um array , transformar seus elementos e incluir os resultados em um novo array.
 * 
 * Normalmente, você usa um for loop para iterar sobre os elementos, transformar cada um individualmente e enviar os resultados para uma nova array.
 * 
 * Vamos dar uma olhada em um exemplo.
 * 
 * Suponha que você tenha uma array de números onde cada elemento representa o raio de um círculo da seguinte maneira:
*/

//declara um array literal inicializado com 3 elementos
//um array denso
let circles = [10, 30, 50];

/**
 * O seguinte ilustra como calcular a área de cada círculo e inserir o resultado em uma nova array 
*/

//para armazenar os valores dos circulos
//novo array literal declarado vazio
let areas = [];
let area = 0;

//exemplo de como transformar os elementos de um array em novos valores
//de forma tradicional

for(let i = 0; i < circles.length; i++) {
    //calcula area de um elemento que possui um valor de circulo
    //mostra como percorrer cada elemento-valor do array e fazer um calculo usando o elemento do array e add em um novo array
    area =  Math.floor(Math.PI * circles[i] * circles[i]);
    //add o valor da area em um novo array
    areas.push(area);
}

console.log(`Forma tradicional areas = [${areas}]`);

/**
 * É preciso uma grande quantidade de código para fazer isso.
 * 
 * A partir do ES5, o tipo JavaScript Array fornece o map() método que permite transformar os elementos do array de uma maneira mais limpa.
*/

//função que calcula a area do circulo 
//recebe o valor do circulo como paramentro e retorna o resultado do calculo da area
function circleArea(radius) {
    return Math.floor(Math.PI * radius * radius);
}

areas2 = [];

//passa a function circleArea como um paramentro para a metodo map
//o map metodo chamara a function circleArea function para cada elemento da circle array e retornara um nova array com os elementos transformados
areas = circles.map(circleArea);

console.log(`Forma recomendada 1 = [${areas}]`);


/**
 * Como funciona.
 
    - Primeiro, defina uma função que calcule a área de um círculo.

    - Em seguida, passe a circleArea função para o map() método. O map() método chamará a circleArea função em cada elemento da circles array e retornará uma nova array com os elementos que foram transformados.

 
 * 
 * Para torná-lo mais curto, você pode passar ao map() método uma função anônima da seguinte maneira.
*/

areas = [];

areas = circles.map(function(radius) {
    return Math.floor(Math.PI * radius * radius);
});

console.log(`Forma recomendada 2 = [${areas}]`);

/**
 * Além disso, você pode usar a função de seta no ES6 para obter o mesmo resultado com um código mais limpo: 
*/

areas = [];

areas = circles.map(radius => Math.floor(Math.PI * radius * radius));

console.log(`Forma recomendada 3 = [${areas}]`);