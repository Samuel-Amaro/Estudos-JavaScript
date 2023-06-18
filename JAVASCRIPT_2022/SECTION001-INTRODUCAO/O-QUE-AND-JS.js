/**
 * * OQUE É JAVA SCRIPT
 * 
 *  JavaScript é uma linguagem de programação inicialmente projetada para interagir com elementos de páginas da web. Em navegadores da web, o JavaScript consiste em três partes principais:
 * 
 * ECMAScript fornece a funcionalidade principal.
 * 
 * O Document Object Model (DOM) fornece interfaces para interagir com elementos em páginas da web
 * 
 * O Browser Object Model (BOM) fornece a API do navegador para interagir com o navegador da web.
 * 
 * JavaScript permite adicionar interatividade a uma página da web. JavaScript é frequentemente usado com HTML e CSS para aprimorar a funcionalidade de uma página da web, como validação de formulários, criação de mapas interativos e exibição de gráficos animados.
 * 
 * Quando uma página da web é carregada, ou seja, após o download de HTML e CSS, o mecanismo JavaScript no navegador da web executa o código JavaScript. O código JavaScript então modifica o HTML e CSS para atualizar a interface do usuário dinamicamente.
 * 
 * O mecanismo JavaScript é um programa que executa código JavaScript. No início, os motores JavaScript foram implementados como intérpretes. No entanto, os mecanismos JavaScript modernos são geralmente implementados como compiladores just-in-time que compilam o código JavaScript em bytecode para melhorar o desempenho.
 * 
 * * JAVA SCRIPT DO LADO DO CLIENTE VS JAVASCRIPT DO LADO DO SERVIDOR
 * 
 * Quando o JavaScript é usado em uma página da web, ele é executado nos navegadores dos usuários. Nesse caso, o JavaScript funciona como uma linguagem do lado do cliente.
 * 
 * JavaScript pode ser executado em navegadores da web e servidores. Um ambiente de servidor JavaScript popular é o Node.js. Ao contrário do JavaScript do lado do cliente, o JavaScript do lado do servidor é executado no servidor que permite acessar bancos de dados, sistemas de arquivos, etc.
 * 
 * * HISTÓRIA DE JAVASCRIPT
 * 
 * Em 1995, o JavaScript foi criado por um desenvolvedor da Netscape chamado Brendan Eich. Primeiro, foi chamado de Mocha. Mais tarde, foi renomeado para LiveScript.
 * 
 * A Netscape decidiu mudar o LiveScript para JavaScript para alavancar a fama do Java, que era popular na época. A decisão foi tomada pouco antes de a Netscape lançar seu produto de navegador da web chamado Netscape Navigator 2. Como resultado, o JavaScript entrou na versão 1.0.
 * 
 * A Netscape lançou o JavaScript 1.1 no Netscape Navigator 3. Nesse ínterim, a Microsoft lançou um produto de navegador da web chamado Internet Explorer 3 (IE 3), que competia com o Netscape. No entanto, o IE veio com sua implementação JavaScript chamada JScript . A Microsoft usou o nome JScript para evitar possíveis problemas de licença com o Netscape.
 * 
 * Como resultado, duas versões diferentes de JavaScript estavam no mercado: JavaScript no Netscape Navigator e JScript no Internet Explorer. JavaScript não tinha padrões que governassem sua sintaxe e recursos. E a comunidade decidiu que é hora de padronizar a linguagem.
 * 
 * Em 1997, o JavaScript 1.1 foi submetido à European Computer Manufacturers Association (ECMA) como uma proposta. O Comitê Técnico nº 39 (TC39) foi designado para padronizar a linguagem para torná-la uma linguagem de script de uso geral, plataforma cruzada e neutra para fornecedores. TC39 veio com ECMA-262, um padrão que define uma nova linguagem de script chamada ECMAScript (frequentemente pronunciado Ek-ma-script).
 * 
 * Depois disso, a Organização Internacional de Normalização e Comissões Eletrotécnicas Internacionais (ISO / IEC) adotou o ECMAScript (ISO / IEC-16262).
 * 
 * * VISÃO GERAL DO JAVASCRIPT
 * 
 * Para definir uma variável em JavaScript, você usa var palavra-chave. Por exemplo:
*/

var variavelx = 10;
var variavely = 20;

//ES6 adicionou uma nova maneira de declarar uma variável com a let palavra-chave:

let x = 10;
let y = 20;

/**
 * Existem diferenças entre var e let . E é uma boa prática usar a let palavra-chave para declarar variáveis. 
 * 
 * Para declarar uma função , você usa a function palavra - chave. O exemplo a seguir define uma função que calcula a soma de dois argumentos:
*/

function add(a, b) {
    return a + b;
}

/**
 * Para chamar a add() função, você usa a seguinte sintaxe:
*/

let result = add(variavelx, variavely);

/**
 * Para registrar o resultado na janela do console do navegador da web, você usa console.log():
*/

console.log(result);

/**
 * Agora, você deve ver 30 na janela do console.
 * JavaScript fornece instruções de condição, como instruções if-else e  switch. Por exemplo:
*/

let a = 20, b = 30;

function divide(a, b) {
    if(b == 0) {
        throw 'Divisão por zero';
    }
    return a / b;
}

/**
 * Na divide() função, verificamos se o de-numerador (b) é zero. Se sim, lançamos uma exceção . Caso contrário, retornamos o resultado de a / b.
 * 
 * Para declarar uma array, você usa a seguinte sintaxe:
*/

let items = [];

/**
 * Para declarar uma array com alguns elementos iniciais, você especifica os elementos entre colchetes:
*/

let items = [1, 2, 3];

/**
 * Você pode acessar o número de elementos na items array por meio de sua length propriedade:
*/

console.log(items.length); //3

/**
 * Para iterar sobre os elementos da items array, você usa a for instrução loop da seguinte maneira:
*/

for(let i = 0; i < items.length; i++) {
    console.log(items[i]);
}

/**
 * Ou use o for...of loop no ES6 :
*/

for(let item of items) {
    console.log(item);
}

/**
 * JavaScript é uma linguagem em evolução. Ele tem muitos outros recursos que você aprenderá nos próximos tutoriais.
 * 
 * Neste tutorial, você aprendeu o que é JavaScript e a visão geral da linguagem JavaScript.
*/
