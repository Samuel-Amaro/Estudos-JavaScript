/**
 * * REDUCE() MÉTODO JAVASCRIPT ARRAY EM DETALHES
 *  
 * O seguinte ilustra a sintaxe do reduce()método:
 
    array.reduce(reducer[, initialValue]);

 * 
 * O reduce() método leva dois argumentos: uma reducer função de retorno de chamada(callback) e um valor inicial opcional.
 * 
 * O  reduce() método chama a reducer() função para cada elemento da array.
 * 
 * A  reducer() função retorna um valor que é um resultado acumulado e esse resultado é fornecido como um argumento na próxima chamada da reducer() função.
 * 
 * * 1) O REDUCER ARGUMENTO DA FUNÇÃO
 * 
 * A reducer() função tem o seguinte formato:

    function reducer(accumulator, currentValue, currentIndex, array) {

    }

 * A reducer função leva quatro argumentos:
 * 
 * accumulator: O valor retornado da chamada anterior da reducer função. Se você passar o método initialValue para the reduce(), quando a reducer função for executada pela primeira vez, o accumulator é igual a initialValue.
 * 
 * currentValue: O valor do elemento da array na iteração atual.
 * 
 * currentIndex: O índice do elemento da array na iteração atual.
 * 
 * array: A array em que o reduce() método foi chamado.
 * 
 * A reducer() função é executada em cada elemento e retorna um valor. Este valor de retorno é atribuído ao accumulator argumento em cada iteração. Na iteração final, o valor de accumulator torna-se o único valor resultante.
 * 
 * * 2) O INITIAL VALUE ARGUMENTO
 * 
 * O initialValue argumento é opcional. Se você passar o initialValue argumento, o reduce() método o atribuirá ao previousValue argumento da reducer() função na primeira chamada da reducer função.
 * 
 * A tabela a seguir ilustra a lógica quando o reduce() método executa a reducer() função pela primeira vez de acordo com o initialValue argumento.
 
    initialValue: passado
    accumulator: accumulator = initialValue
    currentValue: currentValue = array[0]
    -------------------------------------
    initialValue: não passado
    accumulator: accumulator = array[0]
    currentValue: currentValue = array[1]
    -------------------------------------

 * 
 * Voltando ao exemplo acima, a tabela a seguir ilustra como o reduce() método funciona em detalhes.
 * 
*/

//declara um array literal com 3 elementos
//array denso
let numbers = [1, 2, 3];

//chamando o metodo Array.reduce();
//para saber o total de elementos na array
//para isso chamaresmo o reduce metodo na array numbers
//o reduce metodo precisa como primeiro argumento um callback function, que sera responsavel por retorna o valor acumulado a cada chamada ou iteração feita pelo reduce metodo internamente em cada elemento
let soma = numbers.reduce(function(accumulator, currentValue) {
    //a callback function
    //uma function anonima com dois argumentos
    //o primeiro argumento: O valor retornado da chamada anterior da reducer função. 
    //o segundo argumento: o elemento atual do array que esta sendo avaliado pela reducer callback function
    //o valor a ser retornado pela function anonima callback para a reduce metodo
    //e a soma de todos os elementos do array 
    //isso e o accumulator a cada iteração ira ter o valor total da soma das ultimas iterações ate a atual
    //a cada iteração ele alimenta a soma com novos valores
    //esse valor retornado da soma geral ira para o paramentro accumulator
    //e na iteração final o valor do accmulator e o unico valor a ser retornado para a reduce metodo
    return accumulator + currentValue;
}); 

console.log(`Forma Recomendada 2: ${soma}`);

/**
  1ª chamada
  accumulator: 0
  currentValue: 1
  currentIndex: 0
  currentIndex: [1, 2, 3]
  valorRetorno: 1
  ------------------------
  2ª chamada
  accumulator: 1
  currentValue: 2
  currentIndex: 1
  currentIndex: [1, 2, 3]
  valorRetorno: 3
  -------------------------
  3ª chamada
  accumulator: 3
  currentValue: 3
  currentIndex: 2
  currentIndex: [1, 2, 3]
  valorRetorno: 6
*/                  