/**
 * * INSERINDO ELEMENTOS USANDO O SPLICE() MÉTODO JS ARRAY
 *  
 * Você pode inserir um ou mais elementos em uma array passando três ou mais argumentos para o splice() método com o segundo argumento sendo zero.
 * 
 * Considere a seguinte sintaxe.
 
    Array.splice(position, 0, new_element_1, new_element_2, ...);

 * 
 * 
 * Nesta sintaxe:
 * 
 *      O position especifica a posição inicial na array em que os novos elementos serão inseridos.
 * 
 *      O segundo argumento é zero (0) que instrui o splice() método a não excluir nenhum elemento da array.
 * 
 *      O terceiro argumento, o quarto argumento e assim por diante são os novos elementos que são inseridos na array.
 * 
 *  Observe que o splice() método realmente altera a array original. Além disso, o splice() método não remove nenhum elemento, portanto, ele retorna uma array vazia. Por exemplo:
 * 
 * Supondo que você tenha uma array nomeada colors com três strings.
*/

console.log("## INSERINDO ELEMENTOS USANDO Array.splice() ##");

//declara uma array literal densa com 3 elementos string
let colors = ['red', 'green', 'blue'];

console.log(`ARRAY ORIGINAL = ${colors}`);

/**
 * A instrução a seguir insere um elemento após o segundo elemento.
*/

//a splice metodo abaixo, inseri um novo elemento na array colors, 
//poderiamos usar o metodo push, mas aqui vamos usar o splice
//o primeiro argumento informa que quero inserir o novo elemento na posição de indice 2
//o segundo argumento informa que e para o metodo não exluir nenhum elemento da array
//o terceiro argumento e o elemento a ser inserido na array
//o metodo modifica a array original
colors.splice(2, 0, 'purple');

console.log(`ARRAY MODIFICADA PELO SPLICE = ${colors}`);

/**
 * A colors array agora tem quatro elementos com o novo elemento inserido na segunda posição. 
 * 
 * Você pode inserir mais de um elemento passando o quarto argumento, o quinto argumento e assim por diante para o splice()método como no exemplo a seguir.
*/

//inseri os dois elementos 'yellow' e 'pink' na position 1 do array colors
colors.splice(1, 0, 'yellow', 'pink');
console.log(`ARRAY MODIFICADA PELO SPLICE = ${colors}`);


