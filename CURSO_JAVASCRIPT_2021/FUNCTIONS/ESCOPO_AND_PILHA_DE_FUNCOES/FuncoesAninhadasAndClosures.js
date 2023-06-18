/**
 * * FUNÇÕES ANINHADAS E CLOSURES(ENCERRAMENTOS)
 * 
 *  Você pode aninhar uma função dentro de outra função. A função aninhada (interna) é privada para a função que a contém (externa).
 * 
 * Ele também forma um fechamento(CLOSURE). Um fechamento é uma expressão (mais comumente, uma função) que pode ter variáveis ​​livres junto com um ambiente que vincula essas variáveis ​​(que "fecha" a expressão).
 * 
 * Visto que uma função aninhada é um encerramento, isso significa que uma função aninhada pode "herdar" os argumentos e variáveis ​​de sua função contida. Em outras palavras, a função interna contém o escopo da função externa.
 * 
 * Para resumir:
 
    - A função interna pode ser acessada apenas a partir de instruções na função externa.

    - A função interna forma um fechamento: a função interna pode usar os argumentos e variáveis ​​da função externa, enquanto a função externa não pode usar os argumentos e variáveis ​​da função interna.

 * O exemplo a seguir mostra funções aninhadas:
*/

let a, b, c;

//função externa
function addQuadrados(a, b) {
    //funçaõ interna
    function quadrado(x) {
        return x * x;
    }
    return quadrado(a) + quadrado(b);
}

a = addQuadrados(2, 3); //return 13
console.log(a);
b = addQuadrados(2, 3); //return 25
console.log(b);
c = addQuadrados(4, 5); //returns 41
console.log(c);

/**
 * Como a função interna forma um fechamento(closures), você pode chamar a função externa e especificar argumentos para a função externa e interna:
*/

function externa(x) {
    function interna(y) {
        return x + y;
    }
    return interna;
}

let fn_interna = externa(3); //Pense nisso como: dê-me uma função que acrescente 3 a tudo o que você fornecer

let resultado = fn_interna(5); //returns 8

let resultado1 = externa(3)(5); //returns 8

/**
 * Observe como x é preservado quando inside(externa) é retornado. Um encerramento(closures) deve preservar os argumentos e variáveis ​​em todos os escopos aos quais faz referência. Como cada chamada fornece argumentos potencialmente diferentes, um novo encerramento é criado para cada chamada para outside(externa). A memória pode ser liberada somente quando o devolvido inside(interna) não estiver mais acessível. 
 * 
 * Isso não é diferente de armazenar referências em outros objetos, mas geralmente é menos óbvio porque não se definem as referências diretamente e não se pode inspecioná-las.
*/