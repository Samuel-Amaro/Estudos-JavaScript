/**
 * Define um arquivo chamado app.js que e um módulo
 * 
 * Este modulo acessa as exportações do modulo greeting.js usando a palavra-chave import 
*/

//a sintaxa da import palavra chave especifica o seguinte:
//dentro das {} especificamos oque importar, isso e chamado de associações, so podemos importar aquilo que foi exportado pelo modulo greenting, essas associações são locais, são so nomes locais para o identificador dos componentes exportados, assim os que referenciamos aqui dentro de app.js modulo não é o mesmo que o greeting.js modulo
//em seguida especificamos o modulo no qual importamos as associações fornecidas
//neste caso importamos a variavel message e a function setMessage do modulo greeting
import { message, setMessage } from "./greeting";

//acessa o valor definido na message variavel
console.log(message);

//invocando a function setMessage, e passando o argumento 'Hello', essa function ira atribuir o valor 'Hello' a variavel message por meio desssa function
setMessage('Hello');

//mostrando o novo valor atribuido a message variavel por meio da fucntion setMessage
console.log(message); //'Hello'

//dentro deste modulo app.js, não podemos alterar o valor da variavel message explicitamente(diretamente), isso causa um erro, porque a message (associação), fornecida na importação se comporta como uma constante, não poder ser alterada seu valor ou mudar seu nome
//a seguinte expressão causa um erro
message = 'Hallo'; //error