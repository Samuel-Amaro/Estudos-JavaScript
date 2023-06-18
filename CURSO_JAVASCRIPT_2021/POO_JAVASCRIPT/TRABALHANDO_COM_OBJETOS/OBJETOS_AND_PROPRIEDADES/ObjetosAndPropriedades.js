/**
 * * OBJETOS AND PROPRIEDADES
 * 
 *  Um objeto em JavaScript tem propriedades associadas a ele. Uma propriedade de um objeto pode ser explicada como uma variável que é ligada ao objeto. Propriedades de objetos são basicamente as mesmas que variáveis normais em JavaScript, exceto pelo fato de estarem ligadas a objetos. As propriedades de um objeto definem as características do objeto. Você acessa as propriedades de um objeto com uma simples notação de ponto:
 
    nomeDoObjeto.nomeDaProriedade;

 *
 * Como as variáveis em JavaScript, o nome do objeto (que poderia ser uma variável normal) e um nome de propriedade diferem em maiúsculas/minúsculas (por exemplo, cor e Cor são propriedades diferentes). Você pode definir uma propriedade atribuindo um valor a ela. Por exemplo, vamos criar um objeto chamado meuCarro e dar a ele propriedades chamadas fabricacao, modelo, e ano, conforme mostrado a seguir:
 * 
*/

//cria um objeto
var meuCarro = new Object();
//add propriedades ao objeto e seus valores
meuCarro.fabricacao = "Ford";
meuCarro.modelo = "Mustang";
meuCarro.ano = 1969;

/**
 * Propriedades não definidas de um objeto são undefined (e não null). 
 
    meuCarro.semPropriedade; //undefined

 * 
 * Propriedades de objetos em JavaScript podem também ser acessadas ou alteradas usando-se notação de colchetes. Objetos são às vezes chamados de arrays associativos, uma vez que cada propriedade é associada com um valor de string que pode ser usado para acessá-la. Então, por exemplo, você poderia acessar as propriedades do objeto meuCarro como se segue:
*/

//acessando prorpriedades do objeto por meio da notação de colchetes ou array associativo
//nomeObjeto["nomePropriedade"] = value;

meuCarro["fabricacao"] = "Ford";
meuCarro["modelo"] = "Mustag";
meuCarro["ano"] = 1969;

/**
 * Um nome de propriedade de um objeto pode ser qualquer string JavaScript válida, ou qualquer coisa que possa ser convertida em uma string, incluindo uma string vazia. No entanto, qualquer nome e propriedade que não é um identificador JavaScript válido (por exemplo, um nome de propriedade que tem um espaço ou um hífen, ou que começa com um número) só pode ser acessado(a) usando-se a notação de colchetes. Essa notação é também muito útil quando nomes de propriedades devem ser determinados dinamicamente (quando o nome da propriedade não é determinado até o momento de execução). Exemplos são mostrados a seguir: 
*/

var meuObj = new Object(), 
      str = "minhaString", 
aleatorio = Math.random(), 
         obj = new Object;

meuObj.tipo = "Sintaxa de ponto";
meuObj["data de criacao"] = "String com espaco";
meuObj[str] = "Valor de string";
meuObj[aleatorio] = "Numero Aleatorio";
meuObj[obj] = "Objeto";
meuObj[""] = "Mesmo uma string vazia";

console.log(meuObj);

/**
 * Você pode também acessar propriedades usando um valor de string que está armazenado em uma variável:
*/

var nomeDaPropriedade = "fabricacao";
meuCarro[nomeDaPropriedade] = "Ford";

nomeDaPropriedade = "modelo";
meuCarro[nomeDaPropriedade] = "Mustang";

/**
 *  Você pode usar a notação de colchetes com o comando for...in para iterar por todas as propriedades enumeráveis de um objeto. Para ilustrar como isso funciona, a seguinte função mostra as propriedades de um objeto quando você passa o objeto e o nome do objeto como argumentos para a função:
*/

function mostrarProps(obj, nomeDoObj) {
    var resultado = "";
    for (var propriedade in obj) {
        //Object
        //Fornece funcionalidade comum a todos os objetos JavaScript.
        //(método) Object.hasOwnProperty (v: PropertyKey): boolean
        //Determina se um objeto possui uma propriedade com o nome especificado.
        //@param v - um nome de propriedade.
        if (Object.hasOwnProperty(propriedade)) {
            resultado += nomeDoObj + "." + propriedade + " = " + obj[propriedade] + "\n";
        }     
    }
    return resultado;
}

//chamando a função
resultado = mostrarProps(meuCarro, "meuCarro");

//mostra a propriedade do objeto meu carro
console.log(resultado);

/**
 * * OBJETOS: tudo
 * 
 * Em JavaScript, quase tudo é um objeto. Todos os tipos primitivos - com exceção de null e undefined - são tratados como objetos. Eles podem receber propriedades (propriedades atribuídas de alguns tipos não são persistentes), e possuem todas as características de objetos.
*/