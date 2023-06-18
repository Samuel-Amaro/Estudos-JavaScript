/**
 * * ESCOPO DE FUNÇÃO(FUNCTION SCOPE)
 * 
 *  Variáveis ​​definidas dentro de uma função não podem ser acessadas de qualquer lugar fora da função, porque a variável é definida apenas no escopo da função. No entanto, uma função pode acessar todas as variáveis ​​e funções definidas dentro do escopo em que está definida.
 * 
 * Em outras palavras, uma função definida no escopo global pode acessar todas as variáveis ​​definidas no escopo global. Uma função definida dentro de outra função também pode acessar todas as variáveis ​​definidas em sua função pai e quaisquer outras variáveis ​​às quais a função pai tenha acesso.
*/

//As seguintes variáveis ​​são definidas no escopo global
var num1 = 20, num2 = 3, nome = 'Chamakh';

//Esta função é definida no âmbito global
function multiplica() {
    //acessa as variaveis criadas globalmente
    return num1 * num2;
}

multiplica(); //returns 60
console.log(60);

//Um exemplo de função aninhada
function getPontuacao() {
    var numero1 = 2, numero2 = 3;

    //função local, que so existe dentro do escopo da função externa
    function add() {
        return nome + ' pontuação ' + (numero1 + numero2);
    }

    return add();
}
 
console.log(getPontuacao()); //returns "Chamakh pontuação 5";