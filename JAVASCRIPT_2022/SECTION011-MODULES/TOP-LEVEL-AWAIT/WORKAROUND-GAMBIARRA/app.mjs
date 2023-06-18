/**
 * Define um arquivo chamado app.mjs, que é um modulo
 * 
 * Esse modulo acessa as exportações do modulo user.js, usando a palavra-chave import, fazemos dois tipos de importações, importações de ligações padrão e não padrão
 */

//a sintaxa da import palavra chave especifica o seguinte:
//dentro das {} especificamos oque importar, isso e chamado de ligações ou associações(alias - apelidos), importação de ligações não padrão
//antes da chave especificamos o nome da ligação padrão que e importada quando se carrega o modulo user.mjs, o user.mjs exporta por padrão uma promise
//so podemos importar aquilo que foi exportado pelo modulo user.mjs
//em seguida especificamos o modulo no qual importamos as associações fornecidas
//neste caso importamos uma promise, e uma variavel que pertence ao modulo users.mjs

import promise, { users } from "./user.mjs";


//define uma function chamada render, que declara um paramentro chamado users, que renderiza a users lista para uma lista ordenada no formato HTML
function render(users) {
    //lança exceção, se a users variavel não foi inicializada no modulo users.mjs, para ser inicializada tem que realiza a busca na api, espera o estado da promise resolvida com valor e inicializar a mesma, se esse modulo, acabar usando a varaivel antes de inicializa, lança-se uma exceção
    if(!users) {
        throw 'The user list is not available';
    }

    //usando a variavel importada do modolo users.mjs
    const list = users.map((user) => {
        return `<li> ${user.name}(<a href="email:${user.email}">${user.email}</a>)</li>`;
    }).join('');

    return `<ol>${list}</ol>`;
}


//usando a promise importada do modulo user.mjs
//aqui usaremos o then método encadeado da promise para obter o valor, quando a promise atingir o resultado de resolvido com valor, o valor resolvida e busca de dados retornada feita na API pelo modulo user.mjs
//mas aqui não utilizaremos o valor resolvido aqui e so para controle de execuçao para que so possamos acessar o valor da variavel users que recebe a busca da API quando tiver a busca ja completada, carregada
//usa o método then encadeado da promessa e aguarda a conclusão da chamada da API para uar seus resultados
promise.then(() => {
    //adiciona a lista de usuarios ao elemento HTML identificado com a class .container
    const container = document.querySelector('.container');
    try {
        container.innerHTML = render(users);
    } catch (e) {
        container.innerHTML = e;
    }
});


