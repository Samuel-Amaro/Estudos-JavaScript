/**
 * Define um arquivo chamado app.js que é um modulo
 * 
 *  Esse modulo acessa as exportações do modulo cal.js, usando a palavra-chave import
 * 
 * Importa um módulo inteiro como um objeto
 */

//usando a import palavra-chave para importantar todas as ligações de exportações feitas pelo modulo cal.js
//para importar tudo de um modulo como um único objeto usamos o padrão (*)
//neste exemplo importamos todas as ligações do cal.js modulo especificado como cal objeto
//assim todas as ligações se tornam propriedades do cal objeto
//esse tipo de importação e chamado de namespace import
import * as cal from '../IMPORT-MULTIPLAS-LIGACOES/modules/cal.js';

//para acessar as ligações do cal modulo chamamos o objeto especificado cal definido na ligação e chamamos as ligações como propriedade do objeto
cal.a; //acessa a variavel a
cal.b; //'                'b
cal.sum(); //invoca a function sum()
