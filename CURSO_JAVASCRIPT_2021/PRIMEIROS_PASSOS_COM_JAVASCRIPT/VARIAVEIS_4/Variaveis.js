/**
 * * DECLARANDO UMA VARIÁVEL 
*/

var menuNome;
var minhaIdade;
var valor;
var categoria;

/**
 * * INICIALIZANDO UMA VARIÁVEL 
*/

meuNome = 'Chris';
minhaIdade = '37';

/*
 * PODE-SE DECLARAR E INICIALIZAR UMA VARIÁVEL AO MESMO TEMPO:
*/

var marca = 'Fiat';

/**
 * * A DIFERENÇA ENTRE VAR E LET 
*/

meuNome = 'Chris';

function logNome() {
  console.log(meuNome);
}

logNome();

var meuNome

/*
 * E depois, ao usar var, você pode declarar a mesma variável quantas vezes quiser, mas com let você não consegue. Isso pode funcionar:
*/

var meuNome = 'Chris';
var meuNome = 'Bob';

/* mas isso geraria um erro */

let meuNome = 'Chris';
let meuNome = 'Bob';

/* você precisa fazer assim */

let meuNome = 'Chris';
meuNome = 'Bob';

/**
 * * ATUALIZANDO UMA VARIÁVEL 
*/

meuNome = 'Bob';
minhaIdade = 40;

/**
 * * TIPOS DE VARIÁVEIS 
*/

//numeros
var salario = 2.456;

//Strings(Cadeia de texto)
var despedidaGolfinho = 'Até logo e obrigado por todos os peixes!';

//tipo booleans
var estouVivo = true;
var teste = 6 < 3;

//arrays
var meuNomeArray = ['Chris', 'Bob', 'Jim'];
var meuNumeroArray = [10,15,40];
//acessando arrays
meuNomeArray[0]; // deve retornar 'Chris'
meuNumeroArray[2]; // deve retornar 40


//objetos
var cachorro = { 
                nome : 'Totó',
                raca : 'Dálmata' 
};

//acessar valores do objeto
cachorro.nome

//digitação pemissiva
var meuNumero = '500'; // opa, isso continua sendo uma string
typeof(meuNumero);
meuNumero = 500; // bem melhor — agora isso é um número
typeof(meuNumero);

/*
 * CONSTANTS EM JAVASCRIPT
*/

const diasNaSemana = 7;
const horasNoDia = 24;

