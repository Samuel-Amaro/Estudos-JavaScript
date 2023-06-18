/**
 * * METODOS ÚTEIS DE STRING - AULA 7
 *  
*/

/**
 *  tudo é um objeto em JavaScript. 
 * criando uma string variavel. isso torna-se uma instância do objeto string, e como resultado tem um grande numero de propriedades e metodos disponiveis
 */
var string = 'This is my string';

/**
 * METODO DE COMPRIMENTO DE UMA STRING: DESCOBRE O COMPRIMENTO DE UMA STRING
 * string.length; 
*/

var browserType = 'mozilla';
browserType.length;

//RECUPERADO UM CARACTER DA STRING ESPECIFICO
browserType[0];

//RECUPERANDO O ULTIMO CARACTER DE UMA STRING ESPECIFICA
//NO JAVA SCRIPT AS STRING COMEÇAM NO INDICE [0] TAMBÉM
browserType[browserType.length - 1];

/**
 * ENCONTRANDO SUBSTRING DENTRO DE UMA STRING E EXTRAINDO-A
 * PROCURANDO SUBSTRING 'zilla' dentro de 'mozilla'
 * ISSO RETORNA 2 porque a substring começa no indice 2 da string
 * browserType.indexOf('substring');    
*/
browserType.indexOf('zilla');

//QUANDO A SUBSTRING NÃO E ENCONTRADA NA STRING PRINCIPAL RETORNA - 1
browserType.indexOf('vanilla');

/**
 * QUANDO O PROGRAMADOR SABE ONDE A SUBSTRING COMEÇA E ONDE TERMINA EM UMA STRING PRINCIPAL USA-SE O METODO SLICE PARA EXTRAIR ESSA SUBSTRING
 * browserType.slice(number: numeroInicial,number: numeroFinal);
 * numeroInicial: e a posição do caractere a partir do qual sera iniciada a extração
 * numeroFinal: e a posição seguinte do ultimo caractere a ser extraido   
*/
browserType.slice(0,3);

/**
 * SE O PROGRAMADOR JA SABE QUE DESEJA EXTRAIR TODOS OS CARACTERES RESTANTES EM UMA STRING APOS UM CERTO CARACTER, N PRECISA INCLUIR O SEGUNDO PARAMENTRO
 * O segundo parametro do slice() é opcional: Se você não incluir ele, o slice finaliza no fim da string original.  
*/
browserType.slice(2);

/**
 * METODO STRING string.toLowerCase() transforma os caracteres da string em minusculas.
 * string.toUpperCase() converte todos os caracteres da string para maiusculo; 
*/
var radData = 'My NaMe Is MuD';
radData.toLowerCase(); //MINUSCULAS
radData.toUpperCase(); //MAIUSCULAS

/**
 * atualizando partes de uma string
 * 
 * pode substituir uma substring dentro de uma string com uma outra substring usando o método replace()
 * 
 * string.replace(stringASubstituir,stringQueSubstituiOprimerioParametro);
 *  
*/
browserType.replace('moz','van');

//para atualizar a string apos a substituição
browserType = browserType.replace('moz','van');



