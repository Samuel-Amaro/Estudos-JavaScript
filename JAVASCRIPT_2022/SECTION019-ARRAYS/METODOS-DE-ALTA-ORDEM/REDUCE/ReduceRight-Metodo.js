/**
 * * JAVASCRIPT ARRAY REDUCERIGHT() METHOD
 * 
 *  O reduceRight() método funciona da mesma maneira que o reduce() método, mas na direção oposta.
 * 
 * O reduce() método começa no primeiro elemento e viaja em direção ao último, enquanto o reduceRight() método começa no último elemento e viaja em direção ao primeiro.
 * 
 * Veja o seguinte exemplo:
*/

//declara um array literal com 3 elementos array dense
let numbers2 = [1, 2, 3];

//utilizando o reduceRight() metodo do array
//funciona da mesma forma que o reduce() method mas a iteração acontece de forma diferente, começa no ultimo elemento e vai ate o primeiro
//o reduceRight() também possui argumento obrigatorios
//como a callback function que e responsavel por retorna um valor que é um resultado acumulado e esse resultado é fornecido como um argumento na próxima chamada da reducer() função callback.

let sum2 = numbers2.reduceRight(function(acc, curr) {
    //callback function recebe dois argumentos
    //primeiro argumento: O valor retornado da chamada anterior da reducer função. Se você passar o método initialValue para the reduce(), quando a reducer função for executada pela primeira vez, o accumulator é igual a initialValue.
    //segundo argumento: elemento atual do array que esta sendo passado para a callback function
    //exemplo de como a callback function funciona a sua iteração
    console.log(`accumulator: ${acc} currentValue: ${curr}`);
    //A reducer ou a callback() função é executada em cada elemento e retorna um valor. Este valor de retorno é atribuído ao accumulator argumento em cada iteração.
    // o valor a ser atribuido ao acc em cada retorno da função e a soma dos elementos do array a cada iteração
    //na iteração final quando estiver no primeiro elemento e retorna o accumulator para a reduceRight como o valor acumulado
    //o valor obtido de um array
    return acc + curr;
});

console.log(`sum = ${sum2}`);

/**
 * Neste exemplo, acc é 5 e curré 4 na primeira vez que a callback()f unção é executada.
 * 
 * Neste tutorial, você aprendeu como usar a matriz reduce() e reduceRight() métodos JavaScript para reduzir uma array a um valor.
*/