/**
 * * CÓDIGO EM LOOP
 * 
 * Aqui, veremos as estruturas de loop disponíveis no JavaScript.
 * 
 * O loop de programação é como fazer a mesma coisa repetidas vezes - o que é chamado de iteração na linguagem de programação.
 * 
 * ITENS DE UM LOOP:
 
    -  O contador, que é inicializado com um certo valor - este é o ponto inicial do loop;
    -
    - A condição de saída, que é o critério no qual o loop pára - geralmente o contador atinge um certo valor.
    -
    -  Um iterador, que geralmente incrementa o contador em uma pequena quantidade a cada loop, sucessivamente, até atingir a condição de saída.
 * 
 * COMO SERIA NO PSEUDOCODIGO: 
*/

loop(food = 0; foodNeeded = 10) {
    if(food = foodNeeded) {
        exit loop;
        //NOS TEMOS COMIDA O SUFICIENTE, vamos para casa
    }else{
        food += 2; //PASSE UMA HORA COLETANDO MAIS 2 ALIMENTOS(food)
        //LOOP será executado novamente
    }
}

/**
 * os loops têm tudo a ver com fazer a mesma coisa repetidas vezes, o que é ótimo para concluir rapidamente tarefas repetitivas.
 * 
 * Muitas vezes, o código será um pouco diferente em cada iteração sucessiva do loop, o que significa que você pode completar toda uma carga de tarefas que são semelhantes, mas não são totalmente iguais — se você tem muitos cálculos diferentes para fazer, e você quer fazer um diferente do outro, e não o mesmo repetidamente!
 */

