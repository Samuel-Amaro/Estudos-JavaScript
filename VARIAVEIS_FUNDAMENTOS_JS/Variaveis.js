"use strict"; //evitar criar variaveis sem usar a var palavra chave - Modo strito

//exibir 3 numeros na tela
var numero1 = 150; //variavel escopo global
var numero2 = -2;  //"                     "
var numero3 = 0.4; //"                     "

console.log("Numero 01 = "  + numero1);
console.log("Numero 02 = " + numero2);
console.log("Numero 03 = " + numero3);

//declarando uma variavel e a inicializando ao mesmo tempo
var message = "Hello";

//declarando e inicializando mais de uma variavel
var nome = 'Sr. mario', salario = 1.450;

console.log("Nome = " + nome + " salario = " + salario);

function diga() {
    //variavel local
    var messageLocal = 'Olá';
    return messageLocal; 
}

console.log(messageLocal); //reference error, por tentar acessar uma variavel local em um escopo global

var a = 20, b = 10;
{
    //troca valores de variaveis
    //criando uma variavel utilizando o escopo global dentro do bloco de codigo entre as chaves
    let tmp = a; //tmp == 20
    a = b; //a == 10
    b = tmp; //b == 20
}

console.log(tmp); //tentando acessar variavel local, da um Reference Error

//criando uma constante
const cor = "blue"; 

//constante não pode ter valor alterado
cor = "black"; //error
