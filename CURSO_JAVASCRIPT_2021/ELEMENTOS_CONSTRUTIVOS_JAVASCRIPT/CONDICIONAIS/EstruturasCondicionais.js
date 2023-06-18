/**
 * * ESTRUTURAS CONDICIONAIS EM JAVASCRIPT
 * 
 * DECLARAÇÕES IF...ELSE
 * 
 * SINTAXE BASICA NO PSEUDOCÓDIGO 
*/

if (condicao) {
    //codigo para executar caso a condição seja verdadeira
} else {
    //senão, executar este código
}

/**
 * * UM EXEMPLO REAL PARA ENTENDER A SINTAXE 
*/

var comprasFeitas = false;
    
if(comprasFeitas === true) {
    var granaFilhote = 10;
}else{
    var granaFilhote = 5;
}

/**
 * * UMA MENÇÃO AOS TESTES DE VALORES BOOLEAN    
*/

var cheese = 'Cheddar';
    
if (cheese) {
    console.log('Yay! Queijo disponível para fazer queijo na torrada');
} else {
    console.log('Sem queijo na torrada para você hoje.');
}

//RESCREVENDO O EXEMPLO REAL
var comprasFeitas = false;
    
if(comprasFeitas) {
    var granaFilhote = 10;
}else{
    var granaFilhote = 5;
}

/**
 * * EXEMPLO RAPIDO DE USO DO OPERADOR LOGICO OR(||) 
*/

if (iceCreamVanOutside || houseStatus === 'on fire') {
    console.log('You should leave the house quickly.');
} else {
    console.log('Probably should just stay in then.');
}

/**
 * * EXEMPLO DE USO DO OPERADOR NOT(!) e OR(||) 
*/

if (!(iceCreamVanOutside || houseStatus === 'on fire')) {
    console.log('Probably should just stay in then.');
} else {
    console.log('You should leave the house quickly.');
}

/**
 * * COMBINANDO ISTRUÇÕES LOGICAS 
*/

if ((x === 5 || y > 3 || z <= 10) && (loggedIn || userName === 'Steve')) {
    // run the code
}

/**
 * * EXEMPLO DE USO DO OPERADOR LOGICO(OR) e o operador de iguldade 
*/

if (x === 5 || x === 7 || x === 10 ||x === 20) {
    // run my code
}

/**
 * * INSTRUÇÕES SWITCH
 * 
 * SINTAXE EM PSEUDOCODIGO:
 *  
*/

switch (expression) {
    case escolha1:
      //executar este código
      break;
  
    case escolha2:
      //executar este código em vez de  
      break;
  
    // incluir tantos casos quanto você gosta
  
    default:
      //na verdade, basta executar este código
}

/**
 * * OPERADOR TERNÁRIO 
 * 
 * SINTAXE EM PSEUDOCOFIGO
*/

(condicao) ? /*executar este código*/ : /*executar este código em vez de*/

//EXEMPLO SIMPLES DE USO DO OPERADOR TERNARIO

var saudacao = (eAniversario) ? 'Feliz aniversário Sra. Smith - esperamos que você tenha um grande dia!' : 'Bom dia Mrs. Smith.'; 
