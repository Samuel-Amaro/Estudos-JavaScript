/**
 * * NOTAÇÃO DE COLCHETES
 * 
 *  Há outra forma de acessar propriedades do objeto — usando notação de colchetes. Ao invés desses:
*/

pessoa.idade; //return '32'
pessoa.nome.primeiro; //return 'Bob';

/**
 * você pode usar: 
*/

pessoa['idade']; //return '32';
pessoa['nome']['primeiro']; //return 'Bob';

/**
 * Fica muito parecido com a maneira que acessamos itens de um array, e é basicamente a mesma coisa, só que ao invés de usarmos um número de índice para selecionar um item, usamos o nome associado a cada valor. Não é por menos que objetos às vezes são chamados de arrays associativos — eles mapeiam strings a valores do mesmo modo que arrays mapeiam números a valores. 
*/