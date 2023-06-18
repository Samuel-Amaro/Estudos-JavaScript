/**
 * * STRINGS MULTILINHA
 *  
 * Antes do ES6, você usava a seguinte técnica para criar uma sequência de várias linhas incluindo manualmente o caractere de nova linha (\n) na sequência da seguinte maneira:
*/

//forma antiga de fazer uma string possui varias linhas
var msg = 'Multilinha \n\string';

console.log(msg);
//Multilinha 
//string

/** 
 * Observe que a barra invertida ( \) colocada após o caractere de nova linha (\n) indica a continuação da string em vez de uma nova linha.
 * 
 * Essa técnica, no entanto, não é consistente em mecanismos JavaScript. Portanto, era muito comum criar uma string de várias linhas que se baseava em uma array e concatenação de string da seguinte maneira:
*/

//outra forma antiga de criar uma string de varias linhas, por meio de um array de string concatenado cada elemento
var msg = ['Este texto', 'possui', 'multiplas linhas'].join('\n');

/**
 * Os literais de modelo permitem que você defina strings de várias linhas mais facilmente porque você só precisa adicionar uma nova linha na string onde quiser:
*/

//forma correta de criar uma string que vai possuir varias linhas e usando as crases de modelo literal, ou template literal
let p = `Este texto possui multipla linhas`;

/**
 * Observe que o espaço em branco faz parte da string. Portanto, você precisa se certificar de que o texto está alinhado com o recuo adequado. Suponha que você tenha um post objeto:
*/

let post = {
    title: 'JavaScript Template Literais',
    excerpt: 'Introdução para JavaScript de template literais em ES6',
    body: 'O conteúdo da postagem estará aqui...',
    tags: ['es6', 'template literals', 'javascript']
};

/**
 * O código a seguir retorna o código HTML do post objeto. Note que usamos a técnica objeto desestruturação para atribuir as propriedades do postobjeto para variáveis individuais: title, excerpt, body, e tags.
*/

//utilizando a tecnica de desestruturação de objetos
let {title, excerpt, body, tags} = post;

//utilizando o template string nas crases junto com a desestruturação de objetos
var postHtml = `
<article>
    <header>
        <h1>${title}</h1>
    </header>
    <section>
        <div>${excerpt}</div>
        <div>${body}</div>
    </section>
    <footer>
        <ul>
            ${tags.map(tag => `<li>${tag}</li>`).join('\n            ')}
        </ul>
    </footer>
</article>`;
console.log(postHtml);