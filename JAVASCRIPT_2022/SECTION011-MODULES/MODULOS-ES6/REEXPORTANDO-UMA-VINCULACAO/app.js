/**
 * Definimos um arquivo chamado app.js que é um modulo
 * 
 * Esse modulo acessa as exportações do modulo math.js, usando a palavra-chave import 
*/

//a sintaxa da import palavra chave especifica o seguinte:
//dentro das {} especificamos oque importar, isso e chamado de ligações ou associações(alias - apelidos)
//so podemos importar aquilo que foi exportado pelo modulo math.js
//essas associações ou ligações(alias-apelidos) são so identificadores locais, são so nomes locais para identificação local dos componentes exportados, assim os que referenciamos aqui dentro de app.js modulo por meio dos alias não é o mesmo que o math.js modulo, essas associações ou ligações especificadas dentro das chaves se comportam como se fossem definidas usando const, isso e não podemos ter outro identificador com o mesmo nome ou alterar o valor da ligação
//em seguida especificamos o modulo no qual importamos as associações fornecidas
//neste caso importamos uma function chamada de add, mas que na sua exportação foi definida um alias e ficou como sum sua ligação e pertence ao modulo math.js

import {sum} from '../ALIASING/math.js';

//exportando as ligações que importamos do modulo math.js
//isso e chamado de reexportação, reexportamos a ligação para outros modulos utilizarem, e a mesma sintaxe, usar a palavra-chave export e a ligação entre as chaves, especificando oque exportar, porque dentro das chaves ? por causa que a ligação ja esta definida, não exportamos na definição
export {sum};

//aqui abaixo podemos usar a seguinte sintaxe de exportação da ligação do modulo math.js que importamos e vamos exportar novamente
//vamos exportar usando a sintaxe, a palavra chave export, dentro das chaves especificar as ligações que devem ser importadas e que devem ser reexportadas novamente, e indica em qual modulo a importação esta vindo, isso e na mesma sintaxe faz a importação da ligação sum, e na mesma sintaxe reexporta a ligação sum para outros modulos.
export {sum} from '../ALIASING/math.js';

//usando a mesma sintaxe acima para importar e reexportar so que aqui renomeamos a ligaçao novamente, de forma local para ser reexportada como add, definimos uma aliases usando a palavra chave as e o apelido definido e add, assim importamos a ligação como sum, mas vamos exportala para outros modulos como add
export {sum as add} from '../ALIASING/math.js';

//na sintaxe abaixo iremos importar todas as ligações exportadas do modulo 'cal.js', usando o padrão (*) que significa tudo, importar todas as ligações e na mesma sintaxe, reexportar todas ligações importadas, para outros modulos usarem
export * from '../IMPORT-MULTIPLAS-LIGACOES/modules/cal.js';

