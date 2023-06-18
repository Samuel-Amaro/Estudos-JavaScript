/**
 * Define um arquivo chamado app.js que é um modulo
 * 
 * Esse modulo acessa as exportações do modulo dialog.js, usando a palavra-chave import 
*/

//a sintaxa da import palavra chave especifica o seguinte:
//dentro das {} especificamos oque importar, isso e chamado de ligações ou associações(alias - apelidos)
//so podemos importar aquilo que foi exportado pelo modulo dialog.js
//essas associações ou ligações(alias-apelidos) são so identificadores locais, são so nomes locais para identificação local dos componentes exportados, assim os que referenciamos aqui dentro de app.js modulo por meio dos alias não é o mesmo que o dialog.js modulo, essas associações ou ligações especificadas dentro das chaves se comportam como se fossem definidas usando const, isso e não podemos ter outro identificador com o mesmo nome ou alterar o valor da ligação
//em seguida especificamos o modulo no qual importamos as associações fornecidas
//neste caso importamos uma function chamada de show, e pertence ao modulo dialog.js

//import { show } from "./dialog.js";

//let btn = document.querySelector('#show');

//btn.addEventListener('click', function() {
    //antes do ES2020 não era possivel tentar carregar dinamicamente um modulo, por meio de instrução import, quando se fosse necessario
    //igual no exemplo, abaixo, o modulo so tinha que ser importando quando o botão fosse clicado 
//    import { show } from "./dialog.js";
//    show('Hi');
//});


//usando a function import(moduloEspecificador); para carregar um modulo dinamicamente, conforme a necessidade

//let btn = document.querySelector('#show');

//btn.addEventListener('click', function() {
    //a import function recebe como argumento um especificador de modulo, o mesmo usado na instrução import, oque pode ser uma expressão que resulta em string também
    //a function import(moduloEspecificador), retorna uma promisse também, que so e resolvida com valor quando o modulo e carregado completamente
    //o then método obtem o valor resolvido da promisse, que nesse caso quando a promisse e resolvida com valor, o valor e um modulo, carregado dinamicamente.
    //a callbak argumento passado para o then método recebe como argumento o modulo(o valor resolvido pela promisse)
 //   import('./dialog.js').then((dialog) => {
        //invoca a function show, importada pelo modulo dialog.js
//        dialog.show('hi');
//    }).catch(error => {
        //trata o erro aqui
 //   });
//});


//usando a function import(moduloEspecificador); para carregar um modulo dinamicamente, conforme a necessidade, usando o async/await para lidar com codigo assincrono

let btn = document.querySelector('#show');

btn.addEventListener('click', function() {
    //como uma await intruçaõ so pode ser usada em uma function assicrona, encapsulamos o codigo abaixo dentro de uma IIFE-ASYNC que retorna um promise
    (async () => {
        //trata o erro, captura
        try {
            //a await espera a promise escolher seu estado, e recebe ou o motivo do erro ou o valor para qual foi resolvido a promise, foi resolvida, nesse caso a promise resolvida com valor retorna o modulo que foi carregado dinamicamente, de acordo com o especiifcador de modulo
            let dialog = await import('./dialog.js');
            //aceesando o modulo pela referencia da variavel dialog podemos acessar a function exportada pelo modulo e importada para esse de forma dinamica
            dialog.show('Você Clicou!');
        } catch (error) {
            //se der um erro trate aqui
            console.log(error);
        }
    })();
});