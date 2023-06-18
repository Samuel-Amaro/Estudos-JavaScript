/**
 * * CLASSIFICANDO UMA ARRAY DE STRING COM CARACTERES NÃO ASCII
 *  
 * O sort() método está funcionando bem com strings com caracteres ASCII. No entanto, para strings com caracteres não ASCII, por exemplo, é, è, etc., o sort() método não funcionará corretamente. Por exemplo:
*/

//declara um array literal com 4 elementos para inicializar
//uma array dense
let animaux = ['zébre', 'abeille', 'écureuil', 'chat'];

console.log(`Array original = [${animaux}]`);

//para classificar a array usamos o sort
//metodo do tipo Array
//vamos usar a classificação padrão do sort
//que e classificação de string alfabeticamente em padrão ASCII de forma crescente
animaux.sort();

console.log(`Array.sort() = [${animaux}]`);

/** 
 *  Como você pode ver, a écureuil string deve vir antes da zèbre string.
 * 
 * Para resolver isso, você usa o localeCompare() método do String objeto para comparar strings em um local específico, como este:
*/

//classifica o array original mudando as posições dos elementos
//o metodo sort elemento recebe como argumento uma string anonima que vai definir como a classificação dos elementos deve ser feita
animaux.sort(function(a, b) {
    //O método localeCompare() retorna um número que indica se uma string de referência vem antes ou depois, ou é uma mesma string que uma string fornecida na ordem de classificação.
    //retorna valor negativo quando (a) vem antes de (b);
    //(a) e menor que (b) assim o menor e realocado de posição para formar a classificação crescente o (b) e o menor
    //retorna valor positivo quando (a) vem depois de (b)
    //(a) e maior que (b) assim o menor valor e o (b) elemento, isso causa a classificação crescente e troca de posições no array original
    //retorna 0 se são iguais
    return a.localeCompare(b);
});

console.log(`Array.sort(function(a, b) {}) = [${animaux}]`);