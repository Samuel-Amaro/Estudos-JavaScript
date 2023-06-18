/**
 * Define um arquivo chamado app.js que é um modulo
 * 
 * Esse modulo acessa as exportações do modulo cal.js, usando a palavra-chave import
 */

//a sintaxa da import palavra chave especifica o seguinte:
//dentro das {} especificamos oque importar, isso e chamado de ligações ou associações(alias - apelidos)
//so podemos importar aquilo que foi exportado pelo modulo cal.js
//essas associações ou ligações(alias-apelidos) são so identificadores locais, são so nomes locais para identificação local dos componentes exportados, assim os que referenciamos aqui dentro de app.js modulo por meio dos alias não é o mesmo que o cal.js modulo, essas associações ou ligações especificadas dentro das chaves se comportam como se fossem definidas usando const, isso e não podemos ter outro identificador com o mesmo nome ou alterar o valor da associação
//em seguida especificamos o modulo no qual importamos as associações fornecidas
//neste caso importamos três variaveis chamadas a, b, result, e duas functions chamadas sum e multiply do modulo cal.js

import {a, b, result, sum, multiply} from './cal';

//invocando a function sum, por meio da especificação que esta definida dentro das {} da instrução import
sum();

//acessa o valor da variavel result
console.log(result);

//invoca a function multiply
multiply();
//mostra o valor da variavel result
console.log(result);
