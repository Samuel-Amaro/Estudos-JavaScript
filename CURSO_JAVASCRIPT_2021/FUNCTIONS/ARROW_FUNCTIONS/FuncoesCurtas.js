/**
 * * FUNÇÕES DE SETA(ARROW FUNCTIONS)
 * 
 *  Uma expressão função de seta (anteriormente conhecida como função de seta gorda) tem uma sintaxe pequena em comparação com a expressão de função e lexicalmente vincula o valor this. Funções de seta são sempre anônimas.
 * 
 * Dois fatores influenciaram a introdução de funções de seta: funções mais curtas e o léxico this.
 * 
 * * FUNÇÕES CURTAS
 * 
 * Em alguns padrões funcionais, funções curtas são bem-vindas. Compare:
 * 
*/

var a = [
    "Hydrogen",
    "Helium",
    "Lithium",
    "Beryllium"
];

var a2 = a.map(function(s){ return s.length});

var a3 = a.map(s => s.length);


