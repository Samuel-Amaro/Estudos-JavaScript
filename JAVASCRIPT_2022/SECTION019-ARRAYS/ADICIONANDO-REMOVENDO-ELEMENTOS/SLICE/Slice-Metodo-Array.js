/**
 * * 3 USOS PRAGMÁTICOS DO MÉTODO SLICE() DE ARRAY JS
 * 
 * O Array.prototype objeto fornece o slice()método que permite extrair elementos de subconjunto de uma array e adicioná-los à nova array. Neste tutorial, mostraremos os usos práticos do slice() método de array JavaScript   
 * 
 * * INTRODUÇÃO AO MÉTODO JAVASCRIPT ARRAY SLICE()
 * 
 * O slice() método aceita dois parâmetros opcionais da seguinte maneira:
 
    slice(start, stop);

 * 
 * Ambos os parâmetros start e stop são opcionais.
 * 
 * O start parâmetro determina o índice baseado em zero no qual iniciar a extração. Se start for undefined, slice() começa em 0.
 * 
 * O stop parâmetro, como o próprio nome indica, é um índice baseado em zero no qual a extração deve ser encerrada. O slice()método extrai até stop-1. Isso significa que o slice() método não inclui o elemento na stop posição na nova array. Se você omitir o stop parâmetro, o  slice() método usará o comprimento da array para o stop parâmetro.
 * 
 * O slice() retorna uma nova array que contém os elementos da array original. É importante ter em mente que o slice() método executa a cópia superficial dos elementos apenas para o novo array. Além disso, não altera a array de origem.
 * 
 * * CLONAR UMA ARRAY
 * 
 * O slice()é usado para clonar uma array, conforme mostrado no exemplo a seguir:
*/

//declara um array literal com 5 elementos, um array denso
let numbers = [1, 2, 3, 4, 5];

//clona a array do indice 0 até o length - 1
//como não passei parametros o slice metodo entende que e para clonar o array
//não passei nem o start e nem o stop para extrair um subconjunto
let newNumbers = numbers.slice();

/**
 * Neste exemplo, a newNumbers array contém todos os elementos da numbers array.
 * 
 * * COPIE UMA PARTE DE UMA ARRAY
 * 
 * O uso típico do slice() método é copiar uma parte de uma array sem modificar a array de origem. Aqui está um exemplo:
*/

//declara um array literal com 5 elementos inicializados, um array denso
let colors = ['red', 'green', 'blue', 'yellow', 'purple'];

console.log(`colors = [${colors}]`);

//usando o metodo Array.slice(start, stop)
//para extrair um subconjunto do array
//a extração ira iniciar a partir do indice 0 o primeiro elemento até o indice 3, até o elemento 'yellow', mas o subconjunto extraido não inclui o stop elemento porque e stop - 1 que o slice faz, assim não o inclui
//o slice retorna um novo array com o subconjunto extraido não modifica a array original
let rgb = colors.slice(0, 3);

console.log(`rgb = [${rgb}]`);

/**
 * A rgb array contém os três primeiros elementos da colors array. A array de origem colors permanece intacta.
 * 
 * * CONVERTA OBJETOS SEMELHANTES A ARRAY EM ARRAY
 * 
 *  O slice() método é usado para converter um objeto semelhante a uma array em uma array. Por exemplo:
*/

function toArray() {
    //converte o objeto de arguments de toArray para um array de argumentos
    return Array.prototype.slice.call(arguments);
}

//cada argumento que se passa para o toArray function e um novo elemento para o novo array
let classification = toArray('A', 'B', 'C');

console.log(`classification = [${classification}]`);

/**
 * Neste exemplo, o argumentsda toArray()função é um objeto semelhante a um array. Dentro da toArray() função, chamamos o slice() método para converter o objeto de argumentos em um array.
 * 
 * Cada argumento que passamos para a toArray()função serão os elementos do novo array.
 * 
 * Outro exemplo típico que você vê com frequência é a conversão de um NodeList em uma array da seguinte maneira:
*/

//obtem todos os p elementos nos do documento HTML
let p = document.querySelectorAll('p');
//converte o NodeList retornado do document.querySelectorAll('p') em um objeto array
let list = Array.prototype.slice.call(p);

/**
 * Neste exemplo, primeiro, usamos o document.querySelectorAll() para obter todos os p nós do documento HTML. O resultado desse método é um NodeList objeto, que é um objeto semelhante a um array. Em seguida, chamamos o slice() método para converter o NodeList objeto em um array. 
 * 
 * Às vezes, você vê a seguinte sintaxe:
*/

let list2 = [].slice.call(document.querySelectorAll('p'));

/**
 * Neste exemplo, instanciamos uma array vazia [] e acessamos indiretamente o slice()método do Array.prototype método por meio da array vazia. O efeito é o mesmo que usa o Array.prototype diretamente.
 * 
 * Neste tutorial, você aprendeu como usar o slice() método de array JavaScript para copiar um conjunto ou um subconjunto da array e converter um objeto semelhante a uma array em uma array.
*/