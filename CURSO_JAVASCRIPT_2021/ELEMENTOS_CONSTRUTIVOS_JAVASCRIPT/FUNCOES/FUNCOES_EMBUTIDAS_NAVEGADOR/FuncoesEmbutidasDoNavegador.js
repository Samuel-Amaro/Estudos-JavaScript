/**
 * * FUNÇÕES EMBUTIDAS DO NAVEGADOR
 * 
 * Nós fizemos bastante uso de funções embutidas do navegador neste curso. Toda vez que manipulamos uma string de texto, por exemplo:
 * 
 * para executar os codigos tem que ser em um console javascript no navegador.
 * 
 *  
*/

var meuTexto = 'E sou uma String';
var novaString = meuTexto.repalce('String','sausage');
console.log(novaString);

/**
 * Ou toda vez que manipulamos uma lista: 
*/

var meuArray = ['Eu','amor','chocolate','frogs'];
var madeAString = meuArray.join(' ');
console.log(madeAString);

/**
 * ou toda vez que nós geramos um número aleatorio 
*/

var meuNumero = Math.random();

/**
 * A linguagem JavaScript tem muitas funções embutidas que o permitem fazer coisas úteis sem que você mesmo tenha que escrever aquele código. 
*/