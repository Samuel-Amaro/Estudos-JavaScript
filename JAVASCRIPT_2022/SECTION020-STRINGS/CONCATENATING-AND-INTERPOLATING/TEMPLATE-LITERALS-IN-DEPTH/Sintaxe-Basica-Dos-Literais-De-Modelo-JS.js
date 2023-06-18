/** 
 * * A SINTAXE BÁSICA DOS LITERAIS DE MODELO JAVASCRIPT
 * 
 * Conforme mencionado anteriormente, em vez de usar aspas simples ou aspas duplas, um literal de modelo usa crostas conforme mostrado no exemplo a seguir:
*/

//exemplo de template string JS
let str = `Template literal em ES6`;

console.log("Template literal: " + str); //template literal em ES6
console.log("Tamaho de \'" + str + "\' = " + str.length + " caracteres"); //tamanho da string em caracteres //23
console.log("Tipo do valor armazenado em let str = " + typeof str); //mostra o tipo do valor da variavel str

/**
 * Ao usar os crases, você pode usar as aspas simples ou duplas no literal do modelo sem escapar.
*/

let anotherStr = `Aqui's está um modelo literal`;

/**
 * Se uma string contém uma crase, você deve escapar dela usando uma barra invertida (\):
*/

let strWithBacktick = `Literais de modelo usam crases \` em vez de aspas`;