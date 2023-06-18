/**
 * * JAVASCRIPT ARRAY EVERY: DETERMINANDO SE TODOS OS ELEMENTOS DO ARRAY PASSAM NO TESTE 
 * 
 * Resumo : neste tutorial, você aprenderá como verificar se todos os elementos do array passam em um teste usando o every()método JavaScript Array.
 * 
 * * VERIFICANDO OS ELEMENTOS DA ARRAY USANDO O FOR LOOP
 * 
 * Às vezes, você precisa testar se cada elemento de uma array satisfaz uma condição especificada.
 * 
 * Normalmente, você usa um for loop para iterar todos os elementos e verificar cada elemento individual em relação à condição. Suponha que você tenha uma array numbers com três elementos:
*/

//declara e inicializa um array literal denso com 3 elementos
let numbers = [1, 3, 5];

/**
 * O código a seguir verifica se todos os elementos da numbers array são maiores que zero:
*/
 
let result = true;
//itera(percorre sobre cada elemento do array)
for(let i = 0; i < numbers.length; i++) {
    //teste de condição para verificar se um elemento do array e menor ou igual a 0
    if(numbers[i] <= 0) {
        result = false;
        //sai do for lop(encerra o loop)
        break;
    }
}

console.log(result);

/**
 * Como funciona:
 * 
 *      primeiro, inicialize a   result variável para true.
 *      Em segundo lugar, itere sobre os elementos da numbers array e verifique se cada elemento é menor ou igual a zero. Se for o caso, defina a result variável como false e termine o loop imediatamente usando a break instrução. Caso nenhum elemento seja menor ou igual a zero, o valor da result variável permanece true.
 * 
 * Este código é simples e direto. No entanto, é bastante prolixo.
 * 
 * O Array tipo JavaScript fornece o every()método que permite verificar se todos os elementos de uma array passam no teste de uma forma mais curta e limpa.
 * 
*/