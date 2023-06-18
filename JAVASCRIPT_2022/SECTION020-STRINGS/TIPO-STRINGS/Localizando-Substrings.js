/**
 * * 3) LOCALIZANDO SUBSTRINGS
 * 
 * Para localizar uma substring em uma string, você usa o indexOf() método:
 
    string.indexOf(substring,[fromIndex]);

 * 
 * O indexOf() método aceita dois argumentos: uma substring a ser localizada e a fromIndex qual o método começa a pesquisar para frente na string.
 * 
 * O indexOf()retorna o índice da primeira ocorrência da substring na string. Se a substring não for encontrada, o indexOf() método retorna -1
*/

console.log("Localizando substrings com String.indexOf()");
//string a ser usada
let str4 = "This is a string";
//utilizando o metodo String.indexOf();
//para localizar uma substring em uma string existente
//se a substring existir em string retorna o indice da primeira ocorrencia
//so passar a substring a ser procurada para index of
//passar a procurar para frente, da esquerda para direita
console.log(`let str4 = '${str4}' possui a substring '${'is'}' ? ${str4.indexOf("is") > -1 ? 'Esta localizada no indice ' + str4.indexOf("is") : 'substring não encontrada'}`); // indice 2 - (porque encontra a primeira ocorrencia)

/**
 * O exemplo a seguir usa o fromIndex argumento:
 * 
*/

//utilizando o fromIndex argumento eu passo a partir de qual indice da string caracter o metodo deve procurar a sustring dentro da string
console.log(`let str4 = '${str4}' possui a substring '${'is'}' ? ${str4.indexOf("is", 3) > -1 ? 'Esta localizada no indice ' + str4.indexOf("is", 3): 'substring não encontrada'}`); //indice - 5(porque encontra a segunda ocorrencia, devido ter passado a posição da segunda ocorrencia)

/**
 * Para encontrar a localização da última ocorrência de uma substring em uma string, você usa o lastIndexOf() método.
 
    string.lastIndexOf(substring,[fromIndex]);

 * 
 * Ao contrário do indexOf() método, o lastindexOf() método pesquisa para trás a partir do fromIndex argumento.
*/

//o metodo String.lastIndexOf(); busca a ultima ocorrencia da string
console.log("Localizando substrings com String.lastIndexOf();");
console.log(`'${str4}' possui a ultima ocorrencia da substring '${'is'}' ? ${str4.lastIndexOf("is") > -1 ? 'esta localizada no indice ' + str4.lastIndexOf("is") : 'ultima ocorrência de substring não encontrada'}`); //ultima ocorrencia encontrada no indice 5

/**
 * O lastIndexOf() método também retorna -1 se a substring não for encontrada na string, conforme mostrado neste exemplo: 
*/

console.log(`'${str4}' possui a ultima ocorrencia da substring '${'are'}' ? ${str4.lastIndexOf("are") > -1 ? 'esta localizada no indice ' + str4.lastIndexOf("are") : 'ultima ocorrência de substring não encontrada'}`); //-1 substring não encontrada
