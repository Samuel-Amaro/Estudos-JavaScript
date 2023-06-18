/**
 * * AVALIAÇÃO DE CURTO-CIRCUITO
 *  
 * Como expressões lógicas são avaliadas da esquerda para a direita, elas são testadas como possíveis avaliações de "curto-circuito" utilizando as seguintes regras:
 * 

    - false && qualquercoisa é avaliado em curto-circuito como falso.

    - true || qualquercoisa é avaliado em curto-circuito como verdadeiro.

 *
 * As regras de lógica garantem que estas avaliações estejam sempre corretas. Repare que a parte qualquercoisa das expressões acima não é avaliada, de forma que qualquer efeito colateral de fazê-lo não produz efeito algum.
*/