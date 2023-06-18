/**
 * Define um arquivo chamado app.mjs, que é um modulo
 * 
 * Esse modulo acessa as exportações do modulo user.js, usando a palavra-chave import 
 */

//a sintaxa da import palavra chave especifica o seguinte:
//dentro das {} especificamos oque importar, isso e chamado de ligações ou associações(alias - apelidos)
//so podemos importar aquilo que foi exportado pelo modulo user.mjs
//essas associações ou ligações(alias-apelidos) são so identificadores locais, são so nomes locais para identificação local dos componentes exportados, assim os que referenciamos aqui dentro de users.mjs modulo por meio dos alias não é o mesmo que o user.mjs modulo, essas associações ou ligações especificadas dentro das chaves se comportam como se fossem definidas usando const, isso e não podemos ter outro identificador com o mesmo nome ou alterar o valor da ligação
//em seguida especificamos o modulo no qual importamos as associações fornecidas
//neste caso importamos uma variavel chamada de users, que pertence ao modulo users.mjs

import { users } from "./user.mjs";


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

//adiciona a lista de usuarios ao elemento HTML identificado com a class .container
const container = document.querySelector('.container');

try {
    container.innerHTML = render(users);
} catch (e) {
    container.innerHTML = e;
}

