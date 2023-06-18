/**
 * Define um arquivo chamado sort.js é um modulo
 * 
 * Esse modulo ira exportar uma function padrão, usando a export default, um modulo so pode ter apenas uma exportação padrão.
 * 
 * O padrão(default) para um módulo poder ser uma variável, uma função ou uma classe
 */

//um modulo so pode ter apenas uma exportação padrão
//define um function sem nome que recebe uma paramentro chamado arr, aqui não e uma function anonima
//definimos que a function abaixo sera uma exportação padrão, um padrão e uma variavel, uma classe, uma function.
//aqui usamos a sintaxe export default, que define que a function e um padrão que sera exportado, uma exportação padrão
//para outros modulos
export default function(err) {
    //classificando aqui
}

//exemplo de exportação não padrão
//definimos uma function chamada heapSort, que possui um paramentro chamado arr, usando a export palavra chave para exportar a function não padrão para outros modulos
export function heapSort(arr) {
    //heapsort
}