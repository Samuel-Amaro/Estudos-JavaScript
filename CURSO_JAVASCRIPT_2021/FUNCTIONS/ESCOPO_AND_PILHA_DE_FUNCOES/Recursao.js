/**
 * * ESCOPO AND PILHA DE FUNÇÕES
 * 
 * * RECURSÃO(RECURSION)
 * 
 * Uma função pode referir-se e chamar a si mesma. Existem três maneiras de uma função se referir a si mesma:
 
    - O nome da função

    - arguments.callee

    - Uma variável dentro do escopo que se refere à função

 * 
 * Por exemplo, considere a seguinte definição de função:
*/

var foo2 = function bar() {
    //declarações
}

/**
 * Dentro do corpo da função, os seguintes são todos equivalentes:
 
    1. bar();
    2. arguments.callee();
    3. foo();

 *
 * Uma função que chama a si mesma é chamada de função recursiva . De certa forma, a recursão é análoga a um loop. Ambos executam o mesmo código várias vezes e ambos exigem uma condição (para evitar um loop infinito, ou melhor, recursão infinita neste caso).
 * 
 * Por exemplo, o seguinte loop ...
 *  
*/

var x = 0;
while(x < 10) { // "x < 10" e a condição do loop parar
    x++;
}

/**
 *  pode ser convertido em uma declaração de função recursiva, seguida por uma chamada para essa função:
*/

function loop(x) {
    //x> = 10" é a condição de saída (equivalente a "! (x <10)")
    if(x >= 10) {
        return;
    }
    //fazer coisas
    loop(x + 1); //a chamada recursiva
}

//chamada normal de função
loop(0);

/**
 * No entanto, alguns algoritmos não podem ser loops iterativos simples. Por exemplo, obter todos os nós de uma estrutura de árvore (como o DOM ) é mais fácil por meio da recursão:
*/

function andarArvore(no) {
    if(no == null) {
        return;
    }
    //faça algo com o nó
    for(var i = 0; i < no.childNodes.length; i++) {
        andarArvore(no.childNodes[i]);
    }
}

/**
 * Em comparação com a função loop, cada chamada recursiva em si faz muitas chamadas recursivas aqui.
 * 
 * É possível converter qualquer algoritmo recursivo em um não recursivo, mas a lógica costuma ser muito mais complexa e, para isso, é necessário usar uma pilha.
 * 
 * Na verdade, a própria recursão usa uma pilha: a pilha de funções. O comportamento semelhante a uma pilha pode ser visto no seguinte exemplo:
*/

function foo(i) {
    if(i < 0) {
        return;
    }
    console.log('begin: ' + i);
    foo(i - 1);
    console.log('end: ' + i);
}
foo(3);

//OUTPUT DA CHAMADA DA FUNÇÃO RECURSIVA foo(3)

//begin: 3
//begin: 2
//begin: 1
//begin: 0
//end: 0
//end: 1
//end: 2
//end: 3