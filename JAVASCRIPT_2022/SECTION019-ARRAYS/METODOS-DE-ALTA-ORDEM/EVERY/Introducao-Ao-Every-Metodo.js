/**
 * * INTRODUÇÃO AO EVERY() MÉTODO JS ARRAY
 * 
 *  A partir do ES5, o tipo Array JavaScript fornece um método every() que testa cada elemento em um array.
 * 
 * O exemplo a seguir usa o every() para verificar se cada elemento da array de números é maior que zero:
*/

//declara e inicializa um array literal denso com 3 elementos
let numeros = [1, 3, 5];

//verifica(testa) se cada elemento do array e maior que 0
let resultado = numeros.every(function(e) {
    return e > 0;
});

console.log(`Todos elementos > 0 = ${resultado}`);

/**
 * Usando as funções de seta ES6 , o código pode ser ainda mais curto:
*/

resultado = numeros.every(e => e > 0);

console.log(`Todos elementos > 0 = ${resultado}`);

/**
 * Também é muito mais limpo, não é?
 * 
 * O seguinte ilustra a sintaxe do every()método.
 
    arrayObject.every(callback[, thisArg]);

 * 
 * O every() método aceita dois argumentos nomeados: callback e thisArg.
 * 
 * * 1) O CALLBACK ARGUMENTO
 * 
 * O callback é uma função que testa cada elemento da array. A callback() função tem o seguinte formato:
 
    function callback(currentElement, index, array) {
        //...
    }

 * A callback() função leva três argumentos:
 
    - Primeiro, currentElement é o elemento atual que está sendo processado.

    - Em segundo lugar, index é o índice de currentElement.

    - Terceiro, array é a array em que o every() método foi chamado.

 * 
 * O currentElement argumento é obrigatório, enquanto os argumentos index e array são opcionais.
 * 
 * * 2) O thisArg ARGUMENTO
 * 
 * O thisArg argumento do every() método é opcional. Se você passar o thisArg argumento para o método, o this valor dentro da callback função fará referência ao thisArg argumento.
 * 
 * O every() método retorna true se a callback função retornar um valor verdadeiro para cada elemento da array; caso contrário, ele retorna false.
 * 
 * Observe que o every() método executa a callback() função em cada elemento do array até encontrar aquele que causa o callback()retorno de um valor falso
 * 
 * Em outras palavras, o every() irá parar de chamar a callback() função e retornar false quando houver um elemento da array que callback() retorne um valor falso.
 * 
 * Vamos dar uma olhada em mais alguns exemplos de uso do every() método.
 * 
 * * MAIS EVERY() EXEMPLOS DE MÉTODOS DE ARRAY DE JS * 
 * 
 * O exemplo a seguir testa se todos os elementos da array são números pares
*/

//o metodo every tem um função callbak que verifica se cada elemento do array e um numero par, se sim retorna um true boolean valor se todos os elementos do array forem pares
let isEven = numeros.every(function(e) {
    return e % 2 == 0;
});

console.log(`Todos elementos pares = ${isEven}`); //false, temos elemento com numero impar no array

/**
 * Em contraste, o exemplo a seguir testa se todos os elementos da array são números ímpares.
*/

//o metodo every testa se cada elemento do array e um numero impar, se sim retorna true
//utilizando o metodo every e passando uma função callback como argumento
let isOdd = numeros.every(function(e) {
    //utiliza a função every para retirar o negativo do valor resultante, para trazer o absoluto do resultado do modulo do valor do elemento divido por 2 sendo que tenha o resto da divisão como 1
    return Math.abs(e % 2) == 1;
});

console.log(`Todos elementos impares = ${isOdd}`);

/**
 * Suponha que você tenha um objeto com duas propriedades: min e max:
*/

let range = {
    min: 0,
    max: 10
};

/**
 * O exemplo a seguir testa se todos os elementos da numbers array estão no intervalo especificado por min e max do range objet
*/

//o exemplo abaixo testa se os elementos do array estão dentro do intervalo especificado pela propriedades do objeto range
//passa um  primeiro argumento para o metodo every que e uma funçaõ callback que responsavel pela tarefa do teste
//e passando um segundo argumento que e o objeto range onde contem as propriedades a serem usadas para o teste
//lembrando: que o operador this dentro da função callback faz referencia ao segundo argumento da função every, então tem acesso ao segundo argumento dentro do escopo da callbakc que e o primeiro argumento
//metodo que retorna true se todos elementos estiverem no intervalo e false se não estiverem
let isInRange = numeros.every(function(e) {
    return e >= this.min && e <= this.max;
}, range);

console.log(`Todos elementos do array estão dentro do intervalo min = ${0} e max = ${10} ? ${isInRange}`);

/** 
 * Neste exemplo, passamos o range objeto para o every() método como o segundo argumento. E dentro da callback() função, referenciamos o range objeto usando a this palavra - chave.
 * 
 * * CUIDADO: ARRAY VAZIAS
 * 
 * Se você chamar o every() método em uma array vazia, o método sempre retornará true para qualquer condição. Por exemplo:
*/

//como aplicar testes em um array vazio sem elementos, o every metodo retorna true, mas não tem condição e nem elemento para testar
let gtZero = [].every(e => e > 0); //qualquer condição
let ltZero = [].every(e => e < 0); //qualquer condição

console.log(`gtZero: ${gtZero}`);
console.log(`ltZero: ${ltZero}`);

/**
 * Neste tutorial, você aprendeu como usar o every() método JavaScript Array para testar se todos os elementos em uma array passam no teste fornecido por uma função de teste. 
*/

