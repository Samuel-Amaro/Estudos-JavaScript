/**
 * Define um arquivo chamado math.js que é um modulo js
 * 
 * Define um modulo que ira exportar uma function usando a palavra chave export
 * 
 */


//define uma function chamada add, que declara dois paramentros chamado a e b
function add(a, b) {
    //retorna a soma dos argumentos
    return a + b;
}

//usando a instrução export para exportar a function add, para que outros modulos a possam usar
//o js permite criar(aliases - apelidos) para variaveis, funções ou classe ao exportar e importar
//logo abaixo ao exportar a fuction add para outros modulos iremos definir um aliases para a function, o alises definido e usando a palavra chave as, para a function add sera o sum aliases, isso e os outros modulos so podem se ligar a function add por meio do aliases sum
//definimos o aliases a add fucntion usando a as palavra chave para definir um sum apelido para não exportamos como add mas como sum
//obs: aqui nesse exemplo exportamos a function apos sua definição, isso e definimos primeiro e depois exportamos
export {add as sum};