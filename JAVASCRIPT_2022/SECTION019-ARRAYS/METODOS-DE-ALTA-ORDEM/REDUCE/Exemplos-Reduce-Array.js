/**
 * * MAIS EXEMPLOS DE REDUCE() ARRAY DE JS
 * 
 *  Suponha que você tenha a seguinte shoppingCart array de objetos de produto:
*/

let shoppingCart = [{
    product: 'phone',
    qty: 1,
    price: 699
    },
    {
        product: 'Screen Protector',
        qty: 1,
        price: 9.89
    },
    {
        product: 'Memory Card',
        qty: 2,
        price: 20.99
    }
];

/**
 * Para calcular o valor total dos produtos no carrinho de compras, você pode usar o reduce() método, assim:
*/

//objetivo: calcular o total de produtos no carrinho de compras
//usando o array.reduce() metodo
//para reduzir um array em um valor
//primeiro o reduce metodo recebe dois argumentos
//primeiro argumento: e um callback function que ira retorna um valor que é um resultado acumulado e esse resultado é fornecido como um argumento na próxima chamada da reducer() função.
//e um initialValue, isso e um valor inicial, o inicializador, o reduce() método o atribuirá ao previousValue argumento da reducer() função na primeira chamada da reducer função.
let total = shoppingCart.reduce(function(acc, curr) {
    //a callback function recebe dois argumentos
    //o primeiro argumento: O valor retornado da chamada anterior da reducer função. Se você passar o método initialValue para the reduce(), quando a reducer função for executada pela primeira vez, o accumulator é igual a initialValue.
    //e o curr: o elemento atual que esta sendo avalido da array
    //A reducer ou a callback() função é executada em cada elemento e retorna um valor. Este valor de retorno é atribuído ao accumulator argumento em cada iteração.
    //o valor a ser atribuido ao acc  a cada iteração e a soma da ultima iteração acumulado em acc + o valor total do elemento produto que esta sendo avaliado
    //e esse resultado final e atribuido a acc
    //para que na proxima iteração possa acumlar mais valor a partir da ultima iteração 
    return acc + (curr.qty * curr.price);
}, 0);

console.log(`Forma recomendada 3, valor total dos produtos: ${total}`);

/**
 * Observe que, neste exemplo, passamos o initialValue argumento para o reduce() método.
 * 
 * Se não o fizéssemos, o reduce() método pegaria o primeiro elemento do shoppingCart array, que é um objeto, como um valor inicial e faria o cálculo neste objeto. Conseqüentemente, isso causaria um resultado incorreto.
*/