/**
 * * PARÂMETROS DE FUNÇÕES
 * 
 *  Algumas funções requerem parâmetros a ser especificado quando você está invocando-os — esses são valores que precisam ser inclusos dentro dos parênteses da função, o que é necessário para fazer seu trabalho apropriado.
 * 
 * Nota: Parâmetros algumas vezes são chamados de argumentos, propriedades, ou até atributos.
 * 
 * 
 * Como um exemplo, a função embutida de navegador Math.random() não requer nenhum parâmetro. Quando chamada, ela sempre retorna um número aleatório entre 0 e 1:
*/

var meuNumero = Math.random();

/**
 * A função embutida de navegador replace()  entretanto precisa de dois parâmetros — a substring para encotrar a string principal, e a substring para ser substituida com ela:
*/

var meuTexto = 'Eu sou uma string';
var novaString = meuTexto.replace('string','sausage');

/**
 * Nota: Quando você precisa especificar multiplos parâmetros, eles são separados por vígulas
 * 
 *  Nota-se também que algumas vezes os parâmetros são opcionais — você não tem que especificá-los. Se você não o faz, a função geralmente adota algum tipo de comportamento padrão. Como exemplo, a função join() tem parâmetro opcional:
*/

var meuArray = ['Eu','Amo','Chocolate','frogs'];
var madeAString = meuArray.join(' ');
//returns 'Eu amo chocolate frogs';
var madeAString = meuArray.join();
//returns 'Eu,amo,chocolate,frogs';

/**
 * Se nenhum parâmetro é incluído para especificar a combinação/delimitação de caractere, uma vírgula é usada por padrão.
 *  
*/