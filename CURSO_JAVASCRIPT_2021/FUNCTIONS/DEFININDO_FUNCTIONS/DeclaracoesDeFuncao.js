/**
 * * DECLARAÇÕES DE FUNÇÃO
 * 
 *  Uma definição de função (também chamada de declaração de função(function declaration) ou instrução de função(function statement)) consiste na functionpalavra - chave, seguida por:
 
    - O nome da função

    - Uma lista de parâmetros para a função, entre parênteses e separados por vírgulas.

    - As instruções JavaScript que definem a função, entre chaves {...},.
*/

//Por exemplo, o código a seguir define uma função simples chamada square:

function quadrado(numero) {
    return numero * numero;
}

/**
 * 
 * A função square(quadrado) leva um parâmetro, chamado number(numero). A função consiste em uma instrução que diz para retornar o parâmetro da função (ou seja, number) multiplicado por ela mesma. A instrução return especifica o valor retornado pela função.
 * 
 * Parâmetros primitivos (como um número) são passados ​​para funções por valor ; o valor é passado para a função, mas se a função alterar o valor do parâmetro, essa alteração não será refletida globalmente ou na função de chamada.
 * 
 * Se você passar um objeto (ou seja, um valor não primitivo, como Arrayou um objeto definido pelo usuário) como um parâmetro e a função alterar as propriedades do objeto, essa alteração será visível fora da função, conforme mostrado no exemplo a seguir: 
*/

function minhaFuncao(umObjeto) {
    umObjeto.make = 'Toyota';
}

//criando um objeto, usando o inicializador de objetos com as seguintes propriedades
var meuCarro = {
    make: 'Honda',
    modelo: 'Accord',
    ano: 1998
};

//instancias do objeto
var x, y;

//x obtem o valor 'Honda';
x = meuCarro.make;
console.log(x); 

//chamando a função
minhaFuncao(meuCarro);
//vendo que a função alterou um valor de uma propriedade do objeto passado
y = meuCarro.make; //y obtem o valor 'Toyota'
console.log(y);


