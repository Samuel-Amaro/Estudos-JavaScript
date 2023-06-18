/**
 * * INTRODUÇÃO AO SOME() MÉTODO JAVASCRIPT ARRAY 
 * 
 * Às vezes, você deseja verificar se uma array tem pelo menos um elemento que atende a uma condição especificada.
 * 
 * Por exemplo, para verificar se a seguinte array tem pelo menos um elemento menor que 5:
*/

//declaração e inicialização de um array literal denso com 6 elementos
let marcas = [4, 5, 7, 9, 10, 3];

/**
 * ... você normalmente usa um for loop, como este:
*/

//forma tradicional e convencional de testa uma condição em cada elemento do array

let lessThanFive = false;

//itera-percorre-varre cada elemento do array
for(let index = 0; index < marcas.length; index++) {
    //verificação(teste) se cada elemento do array e menor que 5
    if(marcas[index] < 5) {
        //quando possui elemento < 5
        //armazene o resultado
        lessThanFive = true;
        //encerre o loop for
        //sai do loop
        break;
    }
}

console.log(`Pelo menos algum elemento do array [${marcas}] e < 5 ? ${lessThanFive}`);

/**
 * Como funciona:
 
    - Primeiro, declare uma variável de sinalização lessThanFive e defina seu valor como false.

    - Em segundo lugar, itere sobre os elementos. Se um elemento for menor que 5, defina o sinalizador como true e saia imediatamente do loop usando a break instrução.

 * 
 * O código funciona conforme o esperado. No entanto, é bastante prolixo(dificil entendimento).
 * 
 * O Array tipo fornece um método de instância chamado some() que permite testar se uma array tem pelo menos um elemento que atende a uma condição.
*/

//forma correta de testar um condição em um elemento
//pelo metodo de instancia do tipo array
//verifica se pelo menos um elemento atende a condição ou passa no teste
//somente um elemento do array e menor que 5
//esse elemento e o unico que passa no teste
lessThanFive = marcas.some(function(e) {
    return e < 5;
});

console.log(`Algum elemento do array = ${marcas} e < 5 ? [${lessThanFive}]`);

/**
 * A condição é implementada por meio de uma função de retorno de chamada(callback) passada para o some() método. 
 * 
 * Agora, o código é mais curto. Para torná-lo mais expressivo, você pode usar a sintaxe da função de seta no ES6:
*/

lessThanFive = marcas.some(e => e < 5);

console.log(`Algum elemento do array = [${marcas}] e < 5 ? ${lessThanFive}`);

