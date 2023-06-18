/**
 * * USANDO OJETO DE ARGUMENTOS
 * 
 * Os argumentos de uma função são mantidos em um objeto do tipo array. Dentro de uma função, você pode endereçar os argumentos passados para ele conforme: 
 
    arguments[i]

 * 
 * onde i é um número ordinal do argumento, começando com zero. Então, o primeiro argumento passado para a função seria arguments[0]. O número total de argumentos é indicado por arguments.length.
 * 
 * Usando o objeto arguments, você pode chamar a função com mais argumentos do que o formalmente declarado. Isso muitas vezes é útil se você não sabe de antemão quantos argumentos serão passados para a função. Você pode usar arguments.length para determinar a quantidade de argumentos passados para a função, e então acessar cada argumento usando o objeto arguments
 * 
 * Por exemplo, considere uma função que concatena várias strings. O argumento formal para a função é uma string que especifica os caracteres que separam os itens para concatenar.  A função definida como segue:
 * 
 *
*/

function minhaConcatenacao(separador) {
    var resultado = "", //inicializa a lista
    i;
    //itera por meio de agumentos
    for(i = 1; i < arguments.length; i++) {
        resultado += arguments[i] + separador;
    }
    return resultado;
}

/**
 * Você pode passar qualquer quantidade de argumentos para esta função, e ela concatena cada argumento na string "list":
*/

//retorna "red, orange, blue, "
minhaConcatenacao(",", "red", "orange", "blue");

//retorna "elephant; giraffe; lion; cheetah;"
minhaConcatenacao("; ", "elephant", "giraffe", "lion", "cheetah");

//retorna "sage. basil. oregano. pepper. pasrsley"
minhaConcatenacao(". ", "sage", "basil", "organo", "paper", "parsley");

/**
 * Nota: A variável arguments é "como um array", mas não é um array. Ela é como um array pois possui um índice numerado e a propriedade length. No entanto, não possui todos os métodos de manipulação de array. 
*/