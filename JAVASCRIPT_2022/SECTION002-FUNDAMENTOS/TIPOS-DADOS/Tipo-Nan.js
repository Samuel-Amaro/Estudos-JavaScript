/**
 * * TIPO DE DADO NAN
 * 
 * JavaScript tem um valor numérico especial chamado NaN, que significa Not a Number. Na verdade, significa um número inválido. 
 * 
 * Por exemplo, a divisão de uma string por um número retorna NaN como no exemplo a seguir.
*/

//operações com Tipo NaN retorna NaN
console.log("\'a\' / 2 = " + ('a'/2)); //NaN;

/**
 * O NaN tem duas características especiais:
 
    1. Qualquer operação com NaN retornos NaN.

    2. O NaN não é igual a nenhum valor, incluindo ele mesmo.

 * 
 * aqui estão alguns exemplos:
*/
//operações com Tipo NaN retorna NaN
console.log("NaN / 2 = " + (NaN/2)); //NaN

//NaN não e igual a ele mesmo
console.log("NaN == NaN = " + (NaN == NaN));//false
