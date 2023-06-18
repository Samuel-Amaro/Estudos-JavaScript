/**
 * o app.js módulo usa o módulo message.js 
 * 
 * A import instrução importa a message variavel do message.js módulo
*/

import { message } from "./message.js";

//cria um novo elemento de título de nivel 1 e o anexa a pagina HTML
const h1 = document.createElement('h1');
h1.textContent = message;

document.body.appendChild(h1);