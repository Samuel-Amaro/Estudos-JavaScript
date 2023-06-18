/**
 * * EXEMPLOS DA FILTER() METODO DE ARRAY 
 * 
 *  Como o filter() método retorna uma nova array, você pode encadear o resultado com outros métodos iterativos, como sort() e map().
 * 
 * Por exemplo, o seguinte ilustra como encadear os três métodos: filter(), sort(),e map():
*/

//declara um array literal que tera 5 elementos cada elemento e um objeto com duas propriedades, um array denso
let cities2 = [
    {name: 'Los Angeles', population: 3792621},
    {name: 'New York', population: 8175133},
    {name: 'Chicago', population: 2695598},
    {name: 'Houston', population: 2099451},
    {name: 'Philadelphia', population: 1526006}
];

//o metodo filter da array tipo cities2
//ira retorna um novo array com todos os elementos que passarem no teste criado pela 
//callback function argumento do filter metodo
//com isso apos o filter retorna um novo subconjunto do resultado de filter podera 
//encadear outros metodos na array de resultado 
cities2.filter(city => city.population < 3000000).sort((c1, c2) => c1.population - c2.population).map(city => console.log(city.name + ':' + city.population));


/**
 * Como funciona.

    - Primeiro, o filter() método retorna as cidades cujas populações são inferiores a 3 milhões.

    - Em segundo lugar, o sort() método classifica as cidades resultantes pelas populações em ordem decrescente

    - Terceiro, o map() método mostra cada elemento na array de resultados no console da web.

 * 
 * O exemplo a seguir ilustra o uso do contextObject argumento que especifica um objeto que pode ser referenciado na callback() função usando a this palavra - chave.
*/

//esta função sera usada como a função de callback do metodo filter do array data
function isInRange(value) {
    //se o elemento do array passado pela filter, para a callback for diferente do tipo number, retorna false, condição ou teste não atingido
    if(typeof value != 'number') {
        return false;
    }
    //se for do tipo number, verifica se esta dentro do intervalo, passado pelo segundo argumento da filter metodo
    //os valores do intervalo são obtidos por meio do objeto range, passado como segundo argumento para o filter
    //por meio do this operador dentro do escopo da callback function pode se referencia ao objeto
    //com isso pode aplicar a condição e se for correto retorna true, se não false
    //o true retorno dado pela callback function faz o filter metodo add o valor avalido no momento pela callback ser add no novo array de subconjunto que passaram no teste para ser retorna pelo filter, para mostrar os valores que passaram no teste, e formam o novo subconjunto
    return value >= this.lower && value <= this.uper;
}

//declara um array literal com 9 elementos
//um array denso com diferentes tipos de valores de elementos
let data = [10, 20, "30", 1, 5, 'JavaScript filter', undefined, 'example'];

//declara um objeto que possui duas propriedades
let range = {
    lower: 1,
    uper: 10
};

//o data array tipo, chama o metodo filter,
//passando como primeiro argumento a callback function que ira aplicar o teste no elemento que esta sendo avaliado no momento a cada iteração feita internamente pela filter e passada para a callback
//a callback ira retornar um bolean valor associado ao teste efetuado no valor, se o boolean valor for true, o valor associado na filter testado no momento internamente e add na array de subconjunto e retornado pela filter quando terminar iteração do filter internamente
//o segundo argumento e um objeto que possui duas propridades, esse objeto pode ser usado dentro da callback function, sendo referenciado pela this valor dentro do escopo da function callback
let numberInRange = data.filter(isInRange, range);

console.log(`Array original = [${data}]`);

//numberInRange tem que ser um array que so possui valores numericos do tipo number
//filter aplica teste para retorna somente os numeros
console.log(`Array data = [${numberInRange}]`); //[10, 1, 5]  o 20 não foi retornado porque esta fora do intervalo

/**
 * Como funciona.
 
    - Primeiro, defina a isInRange() função que verifica se seu argumento é um número e está no intervalo especificado pelas propriedades lower e upper de um objeto.

    - Em seguida, defina uma array de dados mistos que contenha números , strings e indefinidos.

    - Em seguida, defina o range objeto com duas propriedades lower e upper.

    - Depois disso, chame os filter() métodos do data array e passe a isInRange() função e o range objeto. Como passamos o rangeobjeto, dentro da isInRange() função, a this palavra - chave faz referência ao range objeto.  

    - Por fim, mostre a array de resultados no console da web.

 * 
 * Neste tutorial, você aprendeu como usar o filter() método JavaScript Array para filtrar elementos em uma array com base em um teste fornecido por uma função de retorno de chamada(callback).
*/