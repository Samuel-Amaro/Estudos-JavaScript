/**
 * * UMA VISÃO ABRANGENTE DOS OPERADORES DE COMPARAÇÃO DE JAVASCRIPT 
 * 
 * RESUMO: neste tutorial, você aprenderá como usar operadores de comparação JavaScript para comparar dois valores
 * 
 * * INTRODUÇÃO AOS OPERADORES DE COMPARAÇÃO DE JAVASCRIPT
 * 
 * Para comparar dois valores, você usa os operadores de comparação. A tabela a seguir ilustra os operadores de comparação JavaScript:
 
    Operador: <
    Significado: Menor que
    ----------------------
    Operador: >
    Significado: Maior que
    ----------------------
    Operador: <=
    Significado: Menos que ou igual a
    ----------------------
    Operador: >=
    Significado: Maior que ou igual a
    ----------------------
    Operador: ==
    Significado: Igual a
    ----------------------
    Operador: !=
    Significado: não e igual a

 *
 * Um operador de comparação retorna um valor booleano indicando se a comparação é verdadeira ou não. Veja o seguinte exemplo:
 * 
*/

let r1 = 20 > 10; //true
let r2 = 20 < 10; //false
let r3 = 10 == 10; //true

/**
 * O operador de comparação assume pelo menos dois valores (ou operandos). Se um dos dois valores tiver um tipo diferente, o JavaScript executará uma conversão com base em regras específicas antes de compará-los. Discutiremos cada regra em detalhes nas seções a seguir.
 * 
 * * COMPARANDO NÚMEROS
 * 
 * Se os operandos forem números, o JavaScript fará uma comparação numérica. Por exemplo:
*/

console.log("###Comparando Números###");
let a = 10, b = 20;
console.log(`10 >= 20 = ${a >= b}`); //false
console.log(`10 == 10 = ${a == 10}`); //true

/**
 * Este exemplo é direto. a variável aé 10, bé 20. A a>=b expressão retorna e a a==10 expressão retorna   true.
 * 
 * * COMPARANDO STRINGS
 * 
 * Se os operandos forem strings, o JavaScript compara os códigos de caracteres numericamente, um a um na string.
 * 
*/

//exemplo
//'alice' = com codigos de caracteres e igual a
//'a' = 97, 'l' = 108, 'i' = 105, 'c' = 99, 'e' = 101 
//'bob' = com codigos de caracteres e igual a
//'b' = 98, 'o' = 111, 'b' = 98

console.log("###Comparando Strings###");
let name1 = 'alice', name2 = 'bob';
let result = name1 < name2;
//os dois primeiros codigos de caracteres do nome da alice são menores que o do bob
console.log(`\'alice\' < \'bob\' = ${result}`); //true
console.log(`\'alice\' === \'alice\' : ${name1 === 'alice'}`); //true

/**
 * Como o JavaScript compara códigos de caracteres nas strings numericamente, você pode receber um resultado inesperado, por exemplo:
*/

let f1 = 'apple', f2 = 'Banana';
let result2 = f2 < f1;
//exemplo
//'a' = 97, 'p' = 112, 'p' = 112, 'l' = 108, 'e' = 101
//'B' = 66, 'a' = 97, 'n' = 110, 'a' = 97, 'n' = 110, 'a' = 97 
console.log(`\'apple\' < \'Banana\' = ${result2}`); //true

/**
 * Neste exemplo, f2 é menor que f1 porque a letra B possui o código do caractere, 66 enquanto a letra a possui o código do caractere 97.
 * 
 * Para corrigir isso, você deve primeiro converter as strings em um formato comum, em minúsculas ou maiúsculas e, em seguida, realizar a comparação da seguinte maneira:
*/

//'b' = 66, 'a' = 97, 'n' = 110, 'a' = 97, 'n' = 110, 'a' = 97
//'a' = 97, 'p' = 112, 'p' = 112, 'l' = 108, 'e' = 101 
let result3 = f2.toLowerCase() < f1.toLowerCase();
console.log(`${f2.toLowerCase()} < ${f1.toLowerCase()} = ${result3}`);

/**
 * Observe que toLowerCase() é um método do objeto String que converte a própria string em minúsculas. 
 * 
 * * COMPARANDO UM NÚMERO COM UM VALOR DE OUTRO TIPO
 * 
 * Se um operando for um número e o outro não, JavaScript converte o operando não numérico em um número e realiza a comparação numericamente.
 * 
*/

console.log("###COMPARANDO UM NÚEMRO COM UM VALOR DE OUTRO TIPO###");
console.log(`10 < \'20\' = ${10 < '20'}`); //true

/**
 * Neste exemplo, a string '20'é convertida 20e comparada com o número 10. Aqui está um exemplo:
*/

console.log(`10 == \'10\' : ${10 == '10'}`); //true

/**
 * Neste exemplo, JavaScript converte a string '10' em número 10 e compara o resultado com o número 10 que resulta em true.
 * 
 * * COMPARANDO UM OBJETO COM UM NÃO-OBJETO
 * 
 * Se um operando for um objeto, o JavaScript chama o  valueOf() método desse objeto para obter o valor para comparação. Se o objeto não tiver o valueOf() método, JavaScript chama o toString() método e usa o valor retornado para comparação. Veja o seguinte exemplo:
*/

console.log("###COMPARANDO UM OBJETO COM UM NÃO-OBJETO###");

let apple = {
    valueOf: function() {
        return 10;
    }
};

let orange = {
    toString: function() {
        return '20';
    }
};

console.log(`apple > 10 = ${apple > 10}`); //false
console.log(`orange == 20: ${orange == 20}`); //true

/**
 * Nessa primeira comparação, o apple objeto possui o valueOf() método que retorna 10, portanto, JavaScript usa 10 para comparação. Na segunda comparação, o JavaScript primeiro chama o valueOf()método. No entanto, o orange objeto não tem o valueOf() método, então JavaScript chama o toString() método para obter o valor retornado de 20.
 * 
 * * COMPARANDO UM BOOLEANO COM OUTRO VALOR
 * 
 * Se um operando for um booleano, JavaScript o converterá em um número e comparará o valor convertido com o outro operando; true irá converter para 1 e false irá converter para 0
*/

console.log("###COMPARANDO UM BOOLEANO COM OUTRO VALOR###");
console.log(`true > 0 = ${true > 0}`);
console.log(`false < 1 = ${false < 1}`);
console.log(`true > false = ${true > false}`);
console.log(`false > true = ${false > true}`);
console.log(`true >= true = ${true >= true}`);
console.log(`true <= true = ${true <= true}`);
console.log(`false <= false = ${false <= false}`);
console.log(`false >= false = ${false >= false}`);

/**
 * Além das regras acima, os operadores igual(==) e diferente(!=) também têm as seguintes regras.
 * 
 * * COMPARANDO NULL AND UNDEFINED
 * 
 * Em JavaScript, null é igual a undefined. Isso significa que a seguinte expressão retorna true.
*/

console.log("###COMPARANDO NULL AND UNDEFINED###");
console.log(`null == undefined: ${null == undefined}`); //true

/**
 * * COMPARANDO NAN COM OUTROS VALORES
 * 
 * Se um dos operandos for NaN, o operador igual ( ==) retornará false
*/

console.log("###COMPARANDO NaN com outros valores");
console.log(`NaN === 1 : ${NaN === 1}`); //false
console.log(`NaN == NaN: ${NaN == NaN}`); //false

/**
 * O != operador not-equal ( ) retorna true ao comparar o NaN com outro valor:
*/

console.log(`NaN != 1: ${NaN != 1}`); //true
console.log(`NaN != NaN: ${NaN != NaN}`); //true

/**
 * * IGUALDADE ESTRITA (===) E NÃO IGUAL ESTRITA (!==)
 * 
 *  Além dos operadores de comparação acima, o JavaScript fornece os operadores igual estrito ( ===) e não igual ( !==) estrito .
 
    Operador: ===
    Significado: estritamente igual
    -------------------------------
    Operador: !==
    Significado: não estritamente igual

 *
 * Os operadores igual estrito e não igual estrito se comportam como o operador igual e diferente, exceto pelo fato de não converterem o operando antes da comparação. Veja o seguinte exemplo:
 * 
*/
console.log("###IGUALMENTE ESTRITA (===) E NÃO IGUAL ESTRITA (!==)###");
console.log(`\'10\' == 10: ${"10" == 10}`); //true
console.log(`\'10\' === 10: ${"10" === 10}`); //false

/**
 * Na primeira comparação, como usamos o operador de igualdade, JavaScript converte a string no número e realiza a comparação.
 * 
 * No entanto, na segunda comparação, usamos o operador igual estrito ( ===), JavaScript não converte a string antes da comparação, portanto, o resultado é false.
 * 
 * Neste tutorial, você aprendeu como usar os operadores de comparação JavaScript para comparar valores.
 * 
*/