/**
 * 
 * * CRIANDO NOVOS OBJETOS
 * 
 * JavaScript possui um número de objetos pré-definidos. Além disso, você pode criar seus próprios objetos. Você pode criar um objeto usando um objeto inicializador. Alternativamente, você pode primeiro criar uma função construtora e depois instanciar um objeto usando aquela função e o operador new.
 * 
 * * USANDO INICIALIZADORES DE OBJETO 
 * 
 * Além de criar objetos usando uma função construtora, você pode criar objetos usando um inicializador de objeto. O uso de inicializadores de objeto é às vezes conhecido como criar objetos com notação literal. O termo "inicializador de objeto" é consistente com a terminologia usada por C++.
 * 
 * A sintaxe para um objeto usando-se um inicializador de objeto é:
*/

//sintaxe de como criar um objeto usando o inicializador de objeto
var obj = { 
        propriedade_1: valor_1, // propriedade_# pode ser um identificador...
        2: valor_2, // ou um numero...
        //...,
        "propriedade n": valor_n // ou uma string
};

/**
 * onde obj é o nome do novo objeto, cada propriedade_i é um identificador (um nome, um número, ou uma string literal), e cada valor_i é uma expressão cujo valor é atribuído à propriedade_i. O obj e a atribuição são opcionais; se você não precisa fazer referência a esse objeto em nenhum outro local, você não precisa atribuí-lo a uma variável. (Note que você pode precisar colocar o objeto literal entre parentêses se o objeto aparece onde um comando é esperado, de modo a não confundir o literal com uma declaração de bloco.) 
 * 
 * Se um objeto é criado com um inicializador de objeto em um script de alto nível, JavaScript interpreta o objeto a cada vez que avalia uma expressão contendo o objeto literal. Além disso, um inicializador usado em uma função é criado toda vez que a função é chamada.
 * 
 * O seguinte comando cria um objeto e o atribui à variável x somente se a expressão cond é verdadeira.
*/


//se a condição for verdadeira
if(condicao) { 
    //cria um objeto usando o inicializador de objeto
    var x = {
        hi: "there"
    };
}


/**
 * O seguinte exemplo cria minhaHonda com três propriedades. Note que a propriedade motor é também um objeto com suas próprias propriedades.
*/

//cria um objeto usando o inicializador de objetos
var minhaHonda = {
      cor: "vermelho",
      rodas: 4,
      //a propriedade motor e um objeto criado com o inicializador de objeto tambem, motor também possui propriedades
      motor: {
          cilindors: 4,
          tamanho: 2.2
      }
};

