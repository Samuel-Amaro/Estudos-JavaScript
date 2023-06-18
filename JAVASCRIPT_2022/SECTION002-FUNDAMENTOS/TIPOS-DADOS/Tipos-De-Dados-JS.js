/**
 * * TIPOS DE DADOS JS
 * 
 * Resumo : neste tutorial, você aprenderá sobre os tipos de dados JavaScript e suas características exclusivas.
 * 
 * JavaScript tem seis tipos de dados primitivos:
 
    1. null

    2. undefined

    3. boolean

    4. number

    5. string

    6. symbol

    7. object

    8. bigint

 *
 * JavaScript é uma linguagem dinâmica ou de digitação livre, portanto, uma variável não se associa a nenhum tipo. No entanto, seu valor sim.
 * 
 * Em outras palavras, a mesma variável pode conter valores de diferentes tipos a qualquer momento. Por exemplo:
 * 
*/

let contador = 120; //contador e um number
contador = false; //contador e um boolean
contador = "foo"; //contador e uma nova string

/**
 * Para obter o tipo atual do valor de uma variável, você usa o   typeof operador:
*/

let contador2 = 120; //contador e number
console.log("let contador2 = " + typeof(contador2)); //"number"

contador2 = false; //contador agora e um boolean
console.log("let contador2 = " + typeof(contador2)); //"boolean"

contador2 = "Oi..."; //contador agora e um string
console.log("let contador2 = " + typeof(contador2)); //"string"
