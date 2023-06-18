/**
 * * CLASSIFICANDO UM ARRAY DE NÚMEROS
 * 
 * Suponha que você tenha uma array de números nomeada scores como no exemplo a seguir.
*/

//declara um array literal com 6 elementos inicializados
//uma array densa
let pontos = [
    9, 80, 10, 20, 5, 70
];

/**
 * Para classificar uma array de números numericamente, você precisa passar para uma função de comparação personalizada que compare dois números.
 * 
 * O exemplo a seguir classifica a scores array numericamente em ordem crescente.
*/

//classifica numeros em ordem crescente
//aqui o sort metodo recebe uma função de seta que determina a classificação a ser feita
//a ordem de classificação sempre e crescente a function argumento so determina se a necessidade de trocar as posições ou não para classificar
//cada iteração feita pelo sort metodo pega duas posições do array e faz uma substração,
//exemplo: posição (a) - (b) gerar um resultado negativo, significa que tem que trocar de posição para classificar, (a) vem primeiro que (b), isso e (a) e inferior a (b), qualquer resultado menor que 0 (a) vem antes de (b). isso e (a) e menor que (b).
//se (a) for maior que (b) na subtração abaixo resulta em um resultado > 0 isso e classifica (b) para um indice inferior a (a), (b) e menor que (a).
//se (a) for igual a (b) e a subtração resulta em (0) não classficia e nem troca as posições.
//isso aqui abaixo so pode ser feito porque o array de exemplo e um array de numeros numeros inteiros
//se fosse de string ou objetos ou todos os tres ao mesmo tempo não poderia ser feito
pontos.sort((a, b) => a - b);

console.log(`Array.sort((a, b) => a - b) = [${pontos}]`);

/**
 * Para classificar uma array de números numericamente em ordem decrescente, você só precisa inverter a lógica na função de comparação, conforme mostrado no exemplo a seguir: 
*/

//classifica numeros em ordem decrecente
//aqui o sort metodo recebe uma função de seta que determina a classificação a ser feita
//a ordem de classificação aqui sera decrecente a function argumento so determina se a necessidade de trocar as posições ou não para classificar
//cada iteração feita pelo sort metodo pega duas posições do array e faz uma substração,
//aqui no caso invertemos a logica porque queremos classificar decrecente
//exemplo: posição (b) - (a) gerar um resultado positivo, significa que (b) e inferior a (a), mesmo o (b) sendo maior que (a), e porque houve inversão da logica, assim o (b) vem primeiro que o (a)
//se (b) - (a) gerar um resultado negativo, significa que (a) e menor que (b) mesmo o (a) sendo maior que o (b), e por causa da iversão de logica fica dessa forma, assim troca as posições o maior valor fica a frente do menor
//se forem iguais não troca posições e não a classificação
pontos.sort((a, b) => b - a);

console.log(`Array.sort((a, b) => b - a) = [${pontos}]`);