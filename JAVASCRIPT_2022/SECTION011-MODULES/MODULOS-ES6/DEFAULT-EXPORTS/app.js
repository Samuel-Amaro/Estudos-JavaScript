/**
 * Definimos um arquivo chamado app.js que é um modulo
 * 
 * Esse modulo acessa as exportações do modulo sort.js, usando a palavra-chave import 
*/

//aqui abaixo na instrução import, importamos o modulo sort.js
//não usamos nesta sintaxe a {} para especificar oque vamos importar
//aqui não precisar especificar o nome da função exportada por padrão pelo sort.js modulo, porque o modulo representa o nome da função
import sort from './sort.js';

//usando a function importada do modulo sort
//o sort identificador represeta a função padrão do sort.js modulo
sort([2, 1, 3]);

//realizando uma nova importação de associações padrões e não padrões, do mesmo modulo sort.js, usando chaves
//com as seguintes regras, as associação padrão deve vir primeiro, as não padrão deve ser cercada por chaves
//aqui no exemplo a associação-ligação-identificador(sort), se liga a function padrão exportada de sort, e a ligação heap sort e a function não padrão exportada do modulo, sort.js
import sort, {heapSort} from "./sort.js";

//usando a function exportada por sort.js, importada para ca por meio da ligasção
heapSort([3, 1, 2]);

//caso dejemos adicionar um apelido ou renomear a exportação padrão, ou adicinoar um identificar local, por meio de aliases, podemos usar a palavra-chave as que define um apelido na ligação
//aqui a ligação e importada por padrão com a associação sort, o mesmo nome do modulo, porem vamos adicionar um novo nome local, renoameala para quikeSort usando a aliases, com a as palavra-chave
import {default as quiksort, heapSort} from './sort.js';