/**
 * * 6) COMPARANDO STRINGS
 * 
 *  Para comparar duas strings, você usa o localeCompare() método:
 
    first.localeCompare(second);

 * 
 * O localeCompare() retorna um de três valores: -1, 0 e 1.
 * 
 *      Se a primeira string vier antes da segunda, em ordem alfabética, o método retornará -1.
 * 
 *      Se a primeira string vier depois da segunda string alfabeticamente, o método retornará 1.
 * 
 *      Se duas strings forem iguais, o método retornará 0.
 * 
*/

console.log("Comparando String usando String.localeCompare();");

console.log(`'${'A'}' === '${'B'}' = ${'A'.localeCompare('B') == -1 ? 'A vem antes de B' : 'A'.localeCompare('B')}`); //-1 : primeira string vem antes da segunda em ordem alfabetica
console.log(`'${'B'}' === '${'B'}' = ${'B'.localeCompare('B') == 0 ? 'B e igual a B' : 'B'.localeCompare('B')}`); //0 : primeira string e igual a segunda
console.log(`'${'C'}' === '${'B'}' = ${'C'.localeCompare('B') == 1 ? 'C vem depois do B' : 'C'.localeCompare('B')}`); //1 : primeira string vem depois da segunda string alfabeticamente