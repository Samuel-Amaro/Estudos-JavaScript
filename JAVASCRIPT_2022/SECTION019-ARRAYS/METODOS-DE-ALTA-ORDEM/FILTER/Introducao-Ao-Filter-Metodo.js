/**
 * * INTRODUÇÃO AO FILTER() MÉTODO DE ARRAY JAVASCRIPT 
 * 
 * Uma das tarefas mais comuns ao trabalhar com um array é criar um novo array que contenha um subconjunto de elementos do array original.
 * 
 * Suponha que você tenha uma array de objetos de cidade em que cada objeto contenha duas propriedades: name e population.
*/

//declara um array literal que tera 5 elementos cada elemento e um objeto com duas propriedades, um array denso
let cities = [
    {name: 'Los Angeles', population: 3792621},
    {name: 'New York', population: 8175133},
    {name: 'Chicago', population: 2695598},
    {name: 'Houston', population: 2099451},
    {name: 'Philadelphia', population: 1526006}
];

/**
 * Para encontrar a cidade cuja população é maior que 3 milhões, você normalmente faz um loop sobre os elementos da array usando um loop for e testa se o valor da population propriedade satisfaz a condição, como este:
*/

let grandesCidades = [];

//forma convencional - tradicional de aplicar uma filtragem em um array e formar um novo subconjunto baseado em um filtro

//percorre(itera ou varre) cada elemento do array - sendo que cada elemento e um objeto
for (let index = 0; index < cities.length; index++) {
    //verifica se a cidade com população maior que 3 milhoes
    if(cities[index].population > 3000000) {
        //se tiver add essa cidade em um novo array(formando um subconjunto ou um array so com cidades com população acima de 3 milhões)
        //add cada objeto elemento no final do novo array
        //formando um subconjunto, devido a uma filtragem(uma condição aplicada) 
        grandesCidades.push(cities[index]);
    }
}

console.log(`Array cities = [${cities}]`);
console.log("---FORMA CONVENCIONAL DE APLICAR FILTER---");
console.log(`Array grandesCidades = [${grandesCidades}]`);

/**
 * JavaScript Array fornece o filter() método que permite que você execute essa tarefa de uma forma mais curta e limpa.
 * 
 * O exemplo a seguir retorna o mesmo resultado do exemplo acima:
*/

grandesCidades = cities.filter(function(e) {
    return e.population > 3000000;
});
console.log("---UTILIZANDO METODO Array.filter(callback() {});---");
console.log(`Array grandesCidades = [${grandesCidades}]`);

/**
 * Neste exemplo, chamamos o filter() método do cities objeto array e passamos para uma função que testa cada elemento
 * 
 * Dentro da função, verificamos se o population de cada cidade do array é maior que 3 milhões.
 * 
 * Se for o caso, a função retorna true; Caso contrário, ele retorna false. O filter() método inclui apenas o elemento na array de resultado se o elemento satisfizer o teste da função para a qual passamos.
 * 
 * No ES6, é ainda mais limpo quando você usa a função de seta (=>).
*/

grandesCidades = cities.filter(city => city.population > 3000000);
console.log("---UTILIZANDO METODO Array.filter(x => x);---");
console.log(`Array grandesCidades = [${grandesCidades}]`);
