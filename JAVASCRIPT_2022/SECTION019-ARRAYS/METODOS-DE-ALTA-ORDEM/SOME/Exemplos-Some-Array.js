/** 
 * * SOME() EXEMPLOS DE ARRAY DE JS
 * 
 * Vamos dar mais alguns exemplos de uso do some() método.
 * 
 * * 1) VERIFIQUE SE EXISTE UM ELEMENTO NA ARRAY
 * 
 * A exists() função a seguir usa o some()método para verificar se existe um valor em uma array:
 * 
*/

//esta função verifica se existe um elemento na array
//usando o metodo da Array tipo
//Metodo Array.some
//esta função retorna true
function exists(value, array) {
    //chamando o metodo some do array
    //vai verificar se o array possui o 
    //value paramentro passado para function exists na array
    //se existir retorna true
    //a callback paramentro de some recebe cada elemento do array e retorna o elemento para some quando o elemento for encontrado(condição true na callback e atingida)
    //o valor retornado e comparado com a value paramentro de existis se os dois forem iguais o resultado da comparação e retornado para quem chamou a função existis
    return array.some(e => e === value);
}

//declaração e inicialização de um array literal denso com 6 elementos
let marcas2 = [4, 5, 7, 9, 10, 3];

console.log(`No array = [${marcas2}] existe um elemento com valor = ${4} ? ${exists(4, marcas2)}`);
console.log(`No array = [${marcas2}] existe um elemento com valor = ${11} ? ${exists(11, marcas2)}`);

/**
 * * 2) VERIFIQUE SE UMA ARRAY TEM UM ELEMENTO QUE ESTÁ EM UM INTERVALOR
 * 
 * O exemplo a seguir mostra como verificar se algum número na marks2 array está no intervalo de (8, 10): 
*/

//declara um objeto com duas propriedades
const range = {
    min: 8,
    max: 10
};

//o metodo some do array tipo marcas2
//recebe um callback de primeiro paramentro
//essa callback ira retornar o elemento que atingir a confição e der como resultado true,
//retornara esse elemento para a some utilizar
//o segundo paramentro e um objeto para utilizar na metodo some
//o this operador utilizado dentro da some metodo e refernciado pelo objeto range, toda vez que utilizar o this dentro do escopo da callback estara referenciando o range objeto
let result2 = marcas2.some(function(e) {
    //se o valor retornado pela callback estiver dentro da condição teste(imposta abaixo) retorna true para a some metodo, se não retorna false
    return e >= this.min && e <= this.max;
}, range);

console.log(`Array = [${marcas2}] possui algum elemento dentro do intervalor min = ${0} e max = ${10} ? ${result2}`);

/**
 * Como funciona.
 
    - Primeiro, defina um objeto de alcance com propriedades mín e máx.

    - Em segundo lugar, chame o some() método no objeto de array de marcas e passe o retorno de chamada e o objeto de intervalo. Como passamos o objeto range como o segundo argumento (thisArg), podemos referenciá-lo dentro do callback por meio do this valor.

 * 
 * Observe que, se você usar a função de seta neste exemplo, o this valor dentro da função de retorno de chamada não se vincula ao range objeto, mas ao global objeto.
 * 
 * * CUIDADOS: ARRAY VAZIAS
 * 
 * Se você chamar o some() método em uma array vazia, o resultado será sempre false independente de qualquer condição. Por exemplo:
*/

//chamar o metodo some do array tipo vazio
//faz o some retornar false, independente de qualquer condição
//devido não ter nenhum elemento no array a ser testado ou passado pela condição
//e não ter elementos a serem testados
let result3 = [].some(e => e > 0);
console.log(`Teste em array = [${[]}] e ? ${result3}`);

result3 = [].some(e => e <= 0);
console.log(`Teste em array = [${[]}] e ? ${result3}`);

/**
 * Neste tutorial, você aprendeu como usar o some() método JavaScrip Array para testar se uma array tem pelo menos um elemento que atende a uma condição 
*/
