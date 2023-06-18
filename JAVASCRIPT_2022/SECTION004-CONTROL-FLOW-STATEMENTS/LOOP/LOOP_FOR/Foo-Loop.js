/**
 * * JAVASCRIPT FOR LOOP
 * 
 *  Resumo : neste tutorial, você aprenderá como usar a for instrução de loop JavaScript para criar um loop com várias opções.
 * 
 * * INTRODUÇÃO Á FOR INSTRUÇÃO DE LOOP JAVASCRIPT
 * 
 * A for instrução de loop JavaScript permite que você crie um loop com três expressões opcionais. O seguinte ilustra a sintaxe da for instrução de loop:
 * 
*/

//for(initialization; condition; post-expression) {
    //declarações
//}

/**
 * * 1) inicialização
 * 
 *  A initializationexpressão inicializa o loop. A expressão de inicialização é executada apenas uma vez quando o loop começa. Normalmente, você usa initialization is para inicializar uma variável de contador. Se você usar a palavra-chave var para declarar a variável do contador, a variável terá uma função ou escopo global. Em outras palavras, você pode fazer referência à variável do contador após o término do loop. No entanto, se você usar a let palavra-chave para declarar a variável do contador, a variável terá um escopo bloqueado, que só pode ser acessado dentro do loop.
 * 
 * * 2) condição
 * 
 * O condition é uma expressão avaliada uma vez antes de cada iteração. O statement dentro do loop é executado apenas quando o condition avalia para true. O loop é encerrado se for condition avaliado como false. Observe que o condition é opcional. Se você omiti-lo, a for instrução loop o considerará como true.
 * 
 * * 3) pós-expressão
 * 
 * A for instrução de loop também avalia o post-expression após cada iteração de loop. Geralmente, você usa o post-expression para atualizar a variável do contador. O fluxograma a seguir ilustra o for loop:
 * 
 * No for loop, as três expressões são opcionais. O seguinte mostra como usar o for loop sem quaisquer expressões:
*/

//for( ; ; ) {
    //declarações
//}

/**
 * * FOR EXEMPLOS DE LOOP DE JS
 * 
 *  Vamos dar alguns exemplos de como usar o for loop.
 * 
 * * 1) For exemplos de loop simples
 * 
 * O exemplo a seguir usa a for instrução de loop que mostra os números de 1 a 5 na janela do console
*/

for(var contador = 1; contador < 5; contador++) {
    console.log('Inside the loop: ' + contador);
}

console.log('Outside the loop: ' + contador);

/**
 * Como funciona.
 * 
 * Primeiro, declare uma variável   counter e inicialize-a como 1.
 * 
 * Em segundo lugar, exiba o valor de counterna janela do console se counter for menor que 5.
 * 
 * Terceiro, aumente o valor de counter em um em cada iteração do loop.
 * 
 * Como o forloop usa a varpalavra-chave para declarar counter, o escopo de counter é global. Portanto, podemos acessar a counter variável após o término do loop. No ES6, você pode usar a let palavra-chave para declarar a variável do contador que é local para o loop:
 */

for(let contador = 1; contador < 5; contador++) {
    console.log('Inside the loop: ' + contador);
}
console.log('Outside the loop: ' + contador);

/**
 * ReferenceError: counter is not defined
 * 
 * Acessar a counter variável depois que o loop causou a ReferenceError.
 * 
 * * 2) O FOR LOOP SEM O EXEMPLO DA PARTE DE INICIALIZAÇÃO
 * 
 * O exemplo a seguir usa um for loop que omite a parte de inicialização:
*/

var j = 1;
for(; j < 10; j += 2) {
    console.log(j);
}

/**
 * * 3) O FOR LOOP SEM O EXEMPLO DE CONDIÇÃO
 * 
 * Semelhante à initialization expressão, a condition expressão é opcional. Se você omitir a condition expressão, precisará usar uma  break instrução para encerrar o loop.
*/

for(let j = 1; ; j+= 2) {
    console.log(j);
    if(j > 10) {
        break;
    }
}

/**
 * * 3) FOR LOOP SEM NENHUM EXEMPLO DE EXPRESSÃO
 * 
 *  Todas as três expressões das for instruções de loop são opcionais, portanto, você pode omitir todas elas. Novamente, você deve usar uma break instrução para encerrar o loop e também modificar a variável do contador para fazer com que a condição para a break instrução se torne true em algum ponto.
*/

//inicializa p variavel
let p = 1;
for( ; ; ) {
    //termina o loop se p é maior que 10
    if(p > 10)
        break;
    console.log(p);
    //incrementa o contador p
    p += 2;
}

/**
 * * 4) O FOR LOOP SEM O EXEMPLO DO CORPO DO LOOP
 * 
 *  Curiosamente, a for declaração pode ter uma declaração vazia. Nesse caso, você coloca um ponto-e-vírgula ( ;) imediatamente após a for instrução. O exemplo a seguir calcula o total de números de 1 a 10.
 * 
 * A expressão é colocada em post-expression, portanto, ela usa uma instrução vazia no corpo do loop.
*/

let sum = 0;
for(let i = 0; i<= 9; i++, sum += i) {
    console.log(sum);
}