/**
 * * ARRAYS
 * 
 * 
 * * CRIANDO UM ARRAY 
 * exemplo: armazenar uma lista de compras em um array 
*/

var shopping = ['bread','milk','cheese','hummuns','noodles'];

/**
 * um array pode ser de qualquer tipo, pode armazenar diferentes itens em um mesmo array e ate fazer combinações 
*/

var sequence = [1,1,2,3,5,8,13];
var random = ['tree',795,[0,1,2]];

/**
 * criando um par de arrays
*/

var marcaCarro = ['honda','toyota','chevrole','fiat','pegout'];
var pessoa = ['fulano','casado',2,1.96,[12,25]];

/**
 * * ACESSANDO E MODIFICANDO ITENS DE UM ARRAY 
*/

//acessando o primeiro item do array
shopping[0]; //return "bread";


//modificando um item do array dando um novo valor ao item
shopping[0] = 'tahini';
//shopping vai retornar agora ['tahini','milk','cheese','hummus','noodles'];

//acessando um array multidimensional(um array dentro de um array, acessando um item de um array que e um outro array)
random[2][2]; //returns 2

/**
 * encontrando o comprimento de um array
 * comprimento(quantos itens existem nele)
 * usando a propriedade array.lenght 
*/

sequence.length; //deve retornar 7

//usando um laço de repetição para percorrer(iterar) sobre os itens de um array

for(var i = 0; i < sequence.length; i++) {
    console.log(sequence[i]);
}

/**
 * * alguns métodos uteis em array
 * 
 * convertendo entre strings e arrays
 * 
 * split() -> pega o parametro solitario o caracter que o programador deseja separa da string e retorna o restantes antes e depois do tem separado na array. 
*/

//criando uma string
var myData = 'Manchester,Londom,Liverpool,Birmingham,Leeds,Carlisle';

//dividindo string isto em cada virgula
var myArray = myData.split(','); 
//myArray = ["Manchester", "Londom", "Liverpool", "Birmingham", "Leeds", "Carlisle"];

//tamanho do novo array
myArray.length;
myArray[0]; //recupera o primeiro item do array
myArray[1]; //recupera o segundo item do array
myArray[myArray.length - 1]; //recupre o ultimo item do array

//FAZENDO A MESMA COISA USANDO O METODO string.join(',');
var myNewString = myArray.join(','); //return uma grande string
//"Manchester,Londom,Liverpool,Birmingham,Leeds,Carlisle"

//convertendo array em uma string e usar o metodo toString();
var dogNames = ['Rocket','Flash','Bella','Slugger'];
dogNames.toString(); //Rocket,Flash,Bella,Slugger

/**
 * antes de tudo para adicionar ou remover um item de um array usamos os metoso push() and pop() 
*/

//inlcuindo um ou mais itens ao final do array
myArray.push('Cardiff');
myArray.push('Bradford','Brighton');
//apos a inclusão fica
//myArray = ["Manchester", "Londom", "Liverpool", "Birmingham", "Leeds", "Carlisle", "Cardiff", "Bradford", "Brighton"]

//o novo comprimento do array pode ser obtido quando a chamada do metodo completa
var newLenght = myArray.push('Bristol');

//myArray = ["Manchester", "Londom", "Liverpool", "Birmingham", "Leeds", "Carlisle", "Cardiff", "Bradford", "Brighton", "Bristol"];
//newLenght = 10;

//removendo ultimo item do array
myArray.pop(); //retorna "Bristol"

//myArray = ["Manchester", "Londom", "Liverpool", "Birmingham", "Leeds", "Carlisle", "Cardiff", "Bradford", "Brighton"];

//o ultimo item que foi removido e retornado quando a chamada do metodo completa. para salvar o item em uma nova variavel voce poderia fazer isto:

var removedItem = myArray.pop();

//metodo array.unshift(); inlcui o novo item no primeiro indice do array
myArray.unshift('Edinburgh');
//fica como myArray  =["Edinburgh", "Manchester", "Londom", "Liverpool", "Birmingham", "Leeds", "Carlisle", "Cardiff"];

//removendo o primeiro item do array usando o metodo array.shift();
var removedItem = myArray.shift();
//fica como myArray = ["Manchester", "Londom", "Liverpool", "Birmingham", "Leeds", "Carlisle", "Cardiff"];
