/**
 * * CONFLITOS DE NOME
 * 
 *  Quando dois argumentos ou variáveis nos escopos da closure(FECHAMENTO) tem o mesmo nome, há um conflito de nome. Mas escopos internos tem prioridade, por isso o escopo mais interno tem a maior prioridade, enquanto que o escopo mais externo tem a menor. Esta é a cadeia de escopo. O primeiro da cadeia é o escopo mais interno, e o último é o escopo mais externo. Considere o seguinte:
*/

function fora() {
    var x = 10;
    function dentro(x) {
        return x;
    }
    return dentro;
}

result = fora()(20); //retorna 20 em vez de 10

/**
 * O  conflito de nome acontece na declaração return x e está entre o parâmetro x de dentro e a variável x de fora. A cadeia de escopo aqui é {dentro, fora, objeto global}. Por isso o x de dentro tem precedência sobre o x de fora, e 20 (x de dentro) é retornado em vez de 10 (x de fora).
 */