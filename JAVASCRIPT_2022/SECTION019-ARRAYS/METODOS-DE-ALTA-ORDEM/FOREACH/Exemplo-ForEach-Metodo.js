/**
 * * MAIS FOREACH() EXEMPLO DE MÉTODO DE ARRAY DE JS
 * 
 * Vamos dar uma olhada em um exemplo do forEach() método que usa um contextObject.
 * 
 * O seguinte ilustra a Counter função do construtor:
*/

//declara uma função Construtora de objeto
function Counter() {
    this.count = 0;
    let self = this;
    //retorna um objeto
    return {
        //metodos do objeto
        increase: function() {
            self.count++;
        },
        current: function() {
            return self.count;
        },
        reset: function() {
            self.count = 0;
        }
    };
}

/**
 * Este exemplo mostra como passar o objeto contador para o forEach() método.
*/

//cria um objeto
var contador = new Counter();

//declara um array literal inicializado com 3 elementos
//array denso
var numeros = [1, 2, 3];

let sum = 0;

//usando o metodo Array.forEach(callback, objeto);
//O forEach() método itera sobre os elementos em uma array e executa uma função predefinida uma vez por elemento.
//o metodo forEach recebe dois argumentos 
//o primeiro argumento e uma callback function
//A callback função que o forEach() método usa para executar em cada elemento.
//o segundo argumento O thisArg é um valor a ser usado como this operator ao executar o retorno de chamada (CallBack)
numeros.forEach(function(e) {
    //escopo da callback function, que e chamada a cada iteração de um elemento do array numeros
    //armazena a soma dos elementos em sum
    sum += e;
    //e utiliza o this operator para refencia ao tipo obejto contador, chamando o seu metodo increase, a cada iteração do forEach metodo
    this.increase();
}, contador);

console.log(sum);
console.log(contador.current());

/**
 * Como funciona.
 
    - Primeiro, crie um novo Counter objeto.

    - Em seguida, defina uma array de três números.

    - Em seguida, declare uma variável sum e atribua a ela o valor zero.

    - Depois disso, chame o forEach() método na numbers array. Na função de retorno de chamada(callback), adicione o elemento à sum variável e chame o increase() método do counter objeto. Observe que o counter objeto é referido como this dentro da função de retorno de chamada(callback).

    - Finalmente, registre o valor da soma e o valor atual do contador no console da web.

 * 
 * Neste tutorial, você aprendeu como usar o forEach() método JavaScript Array para executar um retorno de chamada em cada elemento de um array.
*/