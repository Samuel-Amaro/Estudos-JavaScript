/**
 * * 7) PADRÕES DE CORRESPONDÊNCIA
 * 
 * O match() método permite que você combine uma string com uma expressão regular especificada e obtenha uma array de resultados.
 * 
 *  O match() método retorna nulo se não encontrar nenhuma correspondência. Caso contrário, ele retorna uma array contendo a correspondência inteira e quaisquer resultados correspondentes de captura de parênteses.
 * 
 * Se o sinalizador global (g) não estiver definido, o elemento zero da array conterá a correspondência inteira. Aqui está um exemplo:
*/

let expr = "1 + 2 = 3";
let matches = expr.match(/\d+/);
console.log(matches[0]); //"1"

/**
 * Neste exemplo, o padrão corresponde a qualquer número na expr string.
 * 
 * Caso o sinalizador global (g) seja definido, os elementos da array de resultado conterão todas as correspondências da seguinte forma:
*/

matches = expr.match(/\d+/g);
matches.forEach(function(m) {
    console.log(m);
});

//"1"
//"2"
//"3"

/**
 * Neste exemplo, a array de correspondências contém todas as correspondências, incluindo 1, 2 e 3 na   expr string.
 * 
 * Caso você só precise descobrir se uma string corresponde a uma expressão regular, use o search() método.
 * 
 * Semelhante ao match() método, o search() método aceita uma expressão regular e retorna a posição da string onde a primeira correspondência encontrada. Caso nenhuma correspondência seja encontrada, ele retorna -1.
*/

let str5 = "This is a tes of search()";
let pos = str5.search(/is/);
console.log(pos); //2