/**
 * * CLASSIFICANDO UMA ARRAY DE OBJETOS POR UMA PROPRIEDADE ESPECIFICADA
 * 
 *  O que se segue é um conjunto de employee objectos, onde cada objecto contém três propriedades: name, salary e hireDate.
*/

//declara um array literal de objetos
//inicializado com 3 elementos e um array densa
let empregados = [
    {name: 'John', salary: 90000, hireDate: "July 1, 2010"},
    {name: 'David', salary: 75000, hireDate: "August 15, 2009"},
    {name: 'Ana', salary: 80000, hireDate: "December 12, 2011"}
];

console.log(`Array original: [${empregados}]`);

/**
 * * CLASSIFICANDO OBJETOS POR UM PROPRIEDADE NUMERICA
 * 
 * O exemplo a seguir mostra como classificar os funcionários salary em ordem crescente.
*/

//classifica por salario
//usando o metodo Array.sort(); para classificar em ordem crescente os elementos do array por uma propriedade que cada elemento possui
//o metodo array sort ira receber como argumento uma função anonima que ira determina a forma de classificação dos elementos do array
empregados.sort(function(x, y) {
    //a function anonima recebe dois elementos do array
    //o resultado da subtração ira determinar como o elemento sera classificado na array
    //exemplo:
    //se (x.salary) - (y.salary) gerar um resultado negativo, e porque (x.salary) e inferior a (y.salary) assim (y.salary) e maior que (x.salary) fazendo assim (x.salary) vir primeiro que (y.salary) na classificação
    //se (x.salary) - (y.salary) gerar um resultado positivo, e porque (y.salary) e inferior a (x.salary) fazendo assim o (x.salary) ser maior que (y.salary), asssim (y.salary) vem primeiro que o (x.salary) na classificação;
    //se forem iguais não muda nada na classificação e nem troca posição 
    return x.salary - y.salary;
});

console.log(`Array.sort(function(x, y) {}) : ${empregados}`);

/**
 * Este exemplo é semelhante ao exemplo de classificação de uma array de números em ordem crescente. A diferença é que ele compara a salary propriedade de dois objetos. 
 * 
 * * CLASSIFICANDO OBJETOS POR UMA PROPRIEDADE DE STRING
 * 
 * Para classificar a employees array por name propriedade sem distinção entre maiúsculas e minúsculas, você passa a função de comparação que compara duas strings sem distinção entre maiúsculas e minúsculas da seguinte maneira:
*/

//classfica os elementos da array pela propriedade name string de cada elemento
//chama o metodo sort da array tipo e passa como argumento uma function anonima que recebe dois elementos a cada iteração da sort internamente
//usa o modo de classificação padrão de classificado como strings, elementos são classificados em ordem crescente de caracteres ASCII.
//são classificados alfabeticamente
empregados.sort(function(x, y) {
    //converte as string propriedades em maiusculas
    let a = x.name.toUpperCase(), b = y.name.toUpperCase();
    //dependendo do tipo de resultado em cada comparação 
    //podera determinar a forma como o elemento sera classificiado
    //se (a) for igual a (b) retorna um valor igual a 0, isso não classifica nenhum elemento, e não troca posições na array original
    //se o (a) for maior que o (b) retorna um valor 1 maior que 0, especificando na classificação que (b) e um indice de elemento inferior a (a), fazendo assim (b) vir primeiro que o elemento (a) na clasificação
    //se o (a) for menor que o (b) retorna um valor negativo < 0, especificando na classificação que (a) e um indice de elemento inferior a (b), sendo assim o (a) elemento vir primeiro que o (b) na classificação
    return a == b ? 0 : a > b ? 1 : -1;
});

console.log(`Array.sort(function(x, y) {}) : ${empregados}`);

/**
 * * CLASSIFICANDO OBJETOS PELA PROPRIEDADE DE DATA
 *  
 * Suponha que você deseje classificar os funcionários com base na data de contratação de cada um.
 * 
 * Os dados da data de contratação são armazenados na hireDate propriedade do objeto funcionário. No entanto, é apenas uma string que representa uma data válida, não o Date objeto. 
 * 
 * Portanto, para classificar os funcionários por data de contratação, primeiro você deve criar um Date objeto válido a partir da sequência de datas e, em seguida, comparar duas datas, o que é o mesmo que comparar dois números.
*/

//chama o metodo sort do tipo objeto para classificar o elementos do array, baseado nas datas propriedades passado para cada argumento da function anonima
//a function anonima ira definir o tipo de classificação de cada elemento
//so porque esta criando os tipos date de cada propriedade para que possam ser comparadas
empregados.sort(function(dateElementA, dateElementB) {
    //cria um date objeto valido a partir da sequencias de data da propriedade e em seguinda compara as datas como dois numeros, de acordo com o resultado ira classficiar a data ou não
    let a = new Date(dateElementA.hireDate), b = new Date(dateElementB.hireDate);
    //exemplo: posição (a) - (b) gerar um resultado negativo, significa que tem que trocar de posição para classificar, (a) vem primeiro que (b), isso e (a) e inferior a (b), qualquer resultado menor que 0 (a) vem antes de (b). isso e (a) e menor que (b).
    //se (a) for maior que (b) na subtração abaixo resulta em um resultado > 0 isso e classifica (b) para um indice inferior a (a), (b) e menor que (a).
    //se (a) for igual a (b) e a subtração resulta em (0) não classficia e nem troca as posições.
    return a - b;
});

console.log(`Array.sort(function(x, y) {}) : ${empregados}`);