/**
 * * FUNÇÕES MULTIPLAMENTE ANINHADAS
 * 
 *  As funções podem ser multiplamente aninhadas. Por exemplo:
 
    - Uma função (A) contém uma função (B), que por sua vez contém uma função (C).

    - Ambas as funções B e C encerramentos de formulário aqui. Então, B pode acessar A e C pode acessar B.

    - Além disso, uma vez que C pode acessar o B que pode acessar A, C também pode acessar A.

 * 
 * Assim, os encerramentos(CLOSURES) podem conter vários escopos; eles contêm recursivamente o escopo das funções que o contêm. Isso é chamado de encadeamento de escopo . (O motivo pelo qual é chamado de "encadeamento" é explicado posteriormente.)
 * 
 * Considere o seguinte exemplo:
 * 
*/

function A(x) {
    function B(y) {
        function C(z) {
            console.log(x + y + z);
        }
        C(3);
    }
    B(2);
}
A(1); //logs 6(1 + 2 + 3)

/**
 * Neste exemplo, C acessa B's y e A' s x.
 *  
 * Isso pode ser feito porque:
 
    - B forma um encerramento incluindo A(ou seja, B pode acessar A os argumentos e variáveis ​​de) C forma um fechamento incluindo B.

    - Porque B "fechamento s inclui A, C de fecho inclui A, C pode acessar ambas B e A argumentos e variáveis 's. Em outras palavras, C encadeia os escopos de B e A, nessa ordem .

 * 
 * O inverso, entretanto, não é verdade. Anão pode acessar C, porque A não pode acessar nenhum argumento ou variável de B, que Cé uma variável de. Assim, C permanece privado apenas para B.
*/