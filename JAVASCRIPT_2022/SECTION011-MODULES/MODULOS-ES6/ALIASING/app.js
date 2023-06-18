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

import {sum} from './math.js';


//se quisermos definir um apelido(aliases) para a ligação sum, isso e so um identificador local, definido aqui somente no modulo app.js, assim usando a palavra chave as podemos usar um nome diferente ao importar, por exemeplo vamos importar a sum que ja um alias de exportação e vamos adicionar um novo alias de importação 
import {sum as total} from './math.js';