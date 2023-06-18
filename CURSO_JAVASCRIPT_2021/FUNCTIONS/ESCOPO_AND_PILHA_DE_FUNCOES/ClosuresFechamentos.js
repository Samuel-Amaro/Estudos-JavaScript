/**
 * * CLOSURES(FECHAMENTOS)
 * 
 *  Closures são um dos recursos mais poderosos de JavaScript. JavaScript permite o aninhamento de funções e garante acesso completo à função interna a todas as variáveis e funções definidas dentro da função externa (e todas as outras variáveis e funções que a função externa tem acesso). No entanto, a função externa não tem acesso às variáveis e funções definidas dentro da função interna. Isto proporciona uma espécie de segurança para as variáveis da função interna. Além disso, uma vez  que a função interna tem acesso ao escopo da função externa, as variáveis e funções definidas na função externa vão durar na memória mais do que a própria função externa, isto se a função interna permanecer na memória mais tempo do que a função externa. Uma closure é criada quando a função interna é de alguma forma disponibilizada para qualquer escopo fora da função externa.
*/

//A função externa define uma variável "nome"
var pet = function(nome) {
    //A função interna tem acesso à variável "nome"  da função externa
    var getNome = function() {
        return nome;
    }
    // Retorna a função interna, expondo-a assim para escopos externos
    return getNome;
};

//cria uma refencia para chamar a função
let meuPet = pet('Vivie');
meuPet(); //retorna 'Vivie';

/**
 * Ela pode ser  mais complexa que o código acima. Um objeto contendo métodos para manipular as variáveis da função externa pode ser devolvida.
*/

var criarPet = function(nome) {
    var sexo;

    //retorna um objeto que contem metodos da instancia do objeto
    return {
        setNome : function(novoNome) {
            nome = novoNome;
        },

        getNome: function() {
            return nome;
        },

        getSex: function() {
            return sex;
        },

        setSex: function(novoSexo) {
            if(typeof novoSexo == "string" && (novoSexo.toLowerCase() == "macho" || novoSexo.toLowerCase() == "fêmea")) {
                sexo = novoSexo;
            }
        }
    }
}

//chama a função e armazena seu resultado
var pet2 = criarPet("Vivie");
pet2.getNome(); //Vivie

pet2.setNome("Oliver");
pet2.setSex("macho");
pet2.getSex(); //macho
pet2.getNome(); //Oliver

/**
 * Nos códigos acima, a variável nome da função externa é acessível para as funções internas, e não há nenhuma outra maneira para acessar as variáveis internas, exceto pelas funções internas. As variáveis internas da função interna atuam como armazenamento seguro para as funções internas. Elas armazenam "persistentes", mas seguros, os dados com os quais as funções internas irão trabalhar. As funções não tem  que ser atribuídas a uma variável, ou ter um nome. 
*/

//função sem nome e declaração de função, e uma função anonima, com um parametro, que e uma função
var getCode = (function() {
    var secureCode = "0]Eal(eh&2"; //Um código que não queremos que pessoas de fora sejam capazes de modificar

    //o retorno da função externa e, o retorno da função interna literalmente
    return function() {
        //retorna o codigo
        return secureCode;
    };
})();

getCode(); //retorna o secureCode

/**
 * Há, no entanto, uma série de armadilhas que se deve ter cuidado ao usar closures. Se uma função fechada define uma variável com o mesmo nome de uma variável em um escopo externo, não há nenhuma maneira de se referir para a variável em um escopo externo novamente.
*/

// Função externa define uma variável chamada "nome"
var createPet = function(nome) {
    return {
        //Função fechada define uma variável chamada "nome"
        setNome: function(nome) {
            //??? Como podemos acessar o "nome" definido pela função externa ???
            nome = nome;
        }
    }
}

/**
 * A palavra reservada this é muito complicada em closures, elas têm de ser usadas com muito cuidado. O objeto ao que this se refere depende completamente de onde a função foi chamada, ao invés de onde ela foi definida. 
*/