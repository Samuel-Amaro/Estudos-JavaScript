/**
 * * PARÂMETROS DE FUNÇÃO
 * 
 *  Começando com ECMAScript 6, há dois tipos novos de parâmetros: parâmetros padrão e parâmetros rest.
 * 
 * * PARÂMETROS PADRÃO(DEFAULT)
 * 
 * Em JavaScript, parâmetros padrões de funções são undefined. No entanto, em algumas situações pode ser útil definir um valor padrão diferente. Isto é onde os parâmetros padrão podem ajudar.
 * 
 * No passado, a estratégia geral para definir padrões era testar os valores de parâmetro no corpo da função e atribuir um valor se eles fossem undefined. Se, no exemplo a seguir, nenhum valor é fornecido para b na chamada, seu valor seria undefined ao avaliar a*b e a chamada para multiplicar retornaria NaN. No entanto, isso é pego com a segunda linha neste exemplo:
 * 
*/

function multiplicar(a, b) {
    b = typeof b !== 'undefined' ? b : 1;
    return a * b;
}

multiplicar(5); //5

/**
 * Com parâmetros padrão, a verificação no corpo da função não é mais necessária. Agora você pode simplesmente colocar 1 como valor padrão para b no campo de declaração de parâmetros: 
*/

function multiplicar(a, b = 1) {
    return a * b;
}

multiplicar(5); //5