/**
 * * LÉXICO THIS
 * 
 *  Até as funções de seta, cada nova função definia seu próprio valor this (um novo objeto no caso de um construtor, indefinido em chamadas de função no modo estrito, o objeto de contexto se a função é chamada como um "método de objeto", etc.). Isso pode ser irritante com um estilo de programação orientada a objetos.
*/

//O construtor Pessoa() define 'this' como sendo ele.
function Pessoa() { 
    this.idade = 0;
    // No modo não estrito, a função crescer define 'this'
    // como o objeto global, o que é diferente do 'this'
    // definido pelo construtor Pessoa().
    setInterval(function crescer() {
        this.idade++;
    }, 1000);
}

var p = new Pessoa();

/**
 * No ECMAScript 3/5, este problema foi resolvido atribuindo o valor em this a uma variável que poderia ser fechada. 
*/

function Pessoa() {
    var self = this; //Alguns preferem 'that' em vez de 'self'.
    //Escolha um e seja consistente.
    self.idade = 0;

    setInterval(function crescer() {
        //A chamada de retorno refere-se à variável 'self' na qual
        //o valor é o objeto esperado.
        self.idade++;
    }, 1000);
}

/**
 * Como alternativa, uma função vinculada poderia ser criada para que o valor da propriedade this seja passado para a função crescer(). 
*/