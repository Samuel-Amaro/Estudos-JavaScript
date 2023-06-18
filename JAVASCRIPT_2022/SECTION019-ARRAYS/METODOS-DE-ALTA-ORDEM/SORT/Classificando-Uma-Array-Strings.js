/**
 * * CLASSIFICANDO UMA ARRAY DE STRINGS 
 * 
 * Suponha que você tenha uma array de string nomeada da animals seguinte maneira:
*/

//declara uma array literal de elementos do tipo string, inicializada com 5 elementos
//array denso
let animals = [
    'cat', 'dog', 'elephant', 'base', 'ant'
];

/**
 * Para classificar os elementos da animals aray em ordem crescente alfabeticamente, você usa o sort() método sem passar a função de comparação, conforme mostrado no exemplo a seguir:
*/

console.log(`Array original: ${animals}`);

//classificando a array animals
//a classificação e o padrão do sort metodo
//classificação de strings alfabeticamente
//classificado como strings, elementos são classificados em ordem crescente de caracteres ASCII.
//modifica a array original fazendo a recolocação dos elementos e trocando posições dos elementos para classificar
animals.sort();

console.log(`Array original apos array.sort(): ${animals}`);

/**
 * Para classificar a animals array em ordem decrescente, você precisa alterar a lógica da função de comparação e passá-la para o sort() método conforme o exemplo a seguir.
*/

//usando o metodo array.sort() para classificar os elementos do array animals
//aqui o metodo sort recebera um argumento
//uma função que tem o objetivo de determinar o tipo de classificação
//aqui a função tem objetivo de classificar os elementos em ordem decrecente do maior para o menor
//cada iteração do sort passa dois elementos para a function compara de seta para determinar a classificação de cada bolha de elemento
animals.sort((a, b) => {
    if(a > b)
        //se o a for maior que o b
        //return -1
        //um return < 0 para o sort metodo  diz que o elemento a e inferior a b
        //isso e a vem primeiro que b
        //o maior vem primeiro troca as posições no array
        return -1;
    if(a < b)
        //se o (a) for menor que b
        //return 1
        //um return > 0 para o sort metodo diz que o elemento (b) e inferior a (a)
        //isso e (b) vem primeiro que (a)
        //assim o elemento (b) maior que o (a) vai ser inferior a (a)
        //para o objeto de classificar decrecente esta certo 
        return 1;
    //valores iguais não ha classificação e nem troca de posições
    return 0;
});

console.log(`Array original apos array.sort(): ${animals}`);

/**
 * Suponha que você tenha uma array que contém elementos em maiúsculas e minúsculas da seguinte maneira: 
*/

//ordenando array com casos mistos
//declara um array literal denso com 5 elementos
let mixedCaseAnimals = ['Cat', 'dog', 'Elephant', 'base', 'ant'
];

//modifica o array original
//classifica os elementos e troca posições dos elementos
//o argumento do sort metodo e uma função anonima que determina a classificação dos elementos
mixedCaseAnimals.sort(function (a, b) {
    //convert string para maiusculas
    let x = a.toLocaleUpperCase(), y = b.toLocaleUpperCase();
    //se string forem iguais não ha classificação e nem troca de posições
    //se string x for maior que y, diz que o elemento (y) e inferior a (x), x e maior que y, isso e classificação crescente o menor vem antes, 
    //se x < y o x valor vem antes na classificação, fazendo classificação crescente 
    return x == y ? 0 : x > y ? 1 : -1;
});

console.log(`Array original apos array.sort(): ${mixedCaseAnimals}`);