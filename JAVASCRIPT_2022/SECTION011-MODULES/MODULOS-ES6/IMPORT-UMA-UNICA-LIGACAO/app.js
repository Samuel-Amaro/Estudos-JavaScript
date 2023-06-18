/**
 * Define um arquivo chamado de app.js que é um modulo
 * 
 * Esse modulo acessa as exportações do modulo foo.js, usando a palavra-chave import
 */

//a sintaxa da import palavra chave especifica o seguinte:
//dentro das {} especificamos oque importar, isso e chamado de associações(alias - apelidos)
//so podemos importar aquilo que foi exportado pelo modulo foo
//essas associações(alias-apelidos) são locais, são so nomes locais para identificação local dos componentes exportados, assim os que referenciamos aqui dentro de app.js modulo por meio dos alias não é o mesmo que o foo.js modulo
//em seguida especificamos o modulo no qual importamos as associações fornecidas
//neste caso importamos a variavel foo do modulo foo.js

import {foo} from './foo.js';

//acessando o valor da variavel foo importada do modulo foo.js
console.log(foo); //10;

//se tentamos alterar valor da variavel foo, por aqui dentro do modulo app.js, atribuindo um valor diretamente a variavel foo, receberemos um erro
//pois a importação dessa variavel por meio da import instrução sendo sido fornecida com uma associação dentro das chaves, a faz se comportar como uma constante, que não e mutavel, não muda seu valor, e não pode mudar de identificador(nome)
foo = 20; //throws an error