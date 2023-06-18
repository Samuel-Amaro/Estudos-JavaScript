/**
 * Define um arquivo chamado de app.js que é um modulo
 * 
 * Esse modulo acessa as exportações do modulo array.js, usando a palavra-chave import
 */

//usando somente a palavra chave import para importar o modulo 'array.js' que não exporta nada, mas sem especificar nenhuma ligação especifica, podemos usar a function definida no modulo array.js mesmo não sendo exportada ou ligada
//permite importar o modulo sem fazer nenhuma ligação especifica de class, variavel, function ou objeto e poder usar os métodos definidos la no modulo  array.js
import './array.js';

//usando o método contain definido no modulo array.js
[1, 2, 3].contain(2); //true

