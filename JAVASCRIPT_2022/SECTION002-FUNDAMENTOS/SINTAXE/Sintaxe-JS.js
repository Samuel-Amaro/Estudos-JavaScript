/**
 * * SINTAXE JAVA SCRIPT
 * 
 *  Resumo : neste tutorial, você aprenderá sobre a sintaxe JavaScript, incluindo distinção entre maiúsculas e minúsculas, identificadores, comentários, instruções e expressões.
 * 
 * * JAVA SCRIPT DIFERENCIA MAIÚSCULAS DE MINÚSCULAS
 * 
 * Tudo em JavaScript, incluindo variáveis , nomes de funções , nomes de classes e operadores, diferencia maiúsculas de minúsculas. Isso significa que as variáveis counter e Counter são diferentes.
 * 
 * Da mesma forma, você não pode usar   instanceof como nome de uma função porque é uma palavra-chave. No entanto, instanceOf é um nome de função válido.
 * 
 * * IDENTIFICADORES
 * 
 * Um identificador é o nome de uma variável, função, parâmetro ou classe. Um identificador consiste em um ou mais caracteres no seguinte formato:
    
    - O primeiro caractere deve ser uma letra (az ou AZ), um sublinhado (_) ou um cifrão ($).

    - Os outros caracteres podem ser letras (az, AZ), números (0-9), sublinhados (_) e cifrões ($).

 *
 * Observe que a letra neste contexto não está limitada ao caractere ASCII, mas pode incluir ASCII estendido ou Unicode, embora não seja recomendado.
 * 
 * É uma boa prática usar maiúsculas e minúsculas para os identificadores, o que significa que a primeira letra é minúscula e cada palavra adicional começa com uma letra maiúscula.
 * 
 * Por exemplo, os seguintes nomes são identificadores:
 *
*/

//counter - identificador correto(para variaveis, classes, objetos, functions)
//inArray - identificador correto(para classes, functions, objetos)
//beginWith - identificador valido
//redirectPage - identificador valido

/**
 * * COMENTÁRIOS
 * 
 *  JavaScript oferece suporte a comentários de linha única e de bloco.
 * 
 * Um comentário de linha única começa com dois caracteres de barra ( //), por exemplo:
*/

//este e um comentario de linha unica

/**
 * Um comentário de bloco começa com uma barra e asterisco ( /*) e termina com o oposto ( *//*)da seguinte maneira:
*/

/**
 * Este e um bloco de comentario com multiplas linhas 
 * 
 * É uma boa prática usar um asterisco para iniciar a linha de comentário para fins de legibilidade.
 * 
 * * AFIRMAÇÕES
 * 
 * Embora o JavaScript não exija o término de uma instrução com ponto-e-vírgula ( ;), é recomendável sempre usar o ponto-e-vírgula para encerrar uma instrução.
 * 
 * O motivo é que o ponto-e-vírgula tornará seu código mais legível e o ajudará a evitar muitos problemas que podem ocorrer.
 * 
 * Além disso, pode ser necessário combinar e compactar o código JavaScript antes de implantá-lo no ambiente de produção para remover o espaço em branco extra e economizar largura de banda; sem os pontos-e-vírgulas, você terá os erros de sintaxe.
*/

var a = 10;
var b = 20;

/**
 * Você pode usar um bloco de código que começa com uma chave esquerda ( {) e termina com a chave direita ( }) para combinar várias instruções da seguinte maneira: 
*/

if(a > b) {
    console.log('a e mario que b');
    return 1;
}

/**
 * * EXPRESSÕES
 * 
 *  Uma expressão é um trecho de código que avalia um valor. Por exemplo:
*/

//2 + 1

/**
 * A expressão acima retorna 3, portanto, é uma expressão válida.
 * 
 * Suponha que você tenha duas variáveis a e b, o seguinte ilustra uma expressão que envolve ae b:
*/

//a + b

