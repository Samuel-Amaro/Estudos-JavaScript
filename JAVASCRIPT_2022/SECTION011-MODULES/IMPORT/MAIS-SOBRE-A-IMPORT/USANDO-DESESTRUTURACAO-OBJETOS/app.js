/**
 * Define um arquivo chamado app.js que é um modulo
 * 
 * Esse modulo acessa as exportações do modulo dialog.js, usando a palavra-chave import 
*/


//usando a function import(moduloEspecificador); para carregar um modulo dinamicamente, conforme a necessidade, usando o async/await para lidar com codigo assincrono

let btn = document.querySelector('#show');

btn.addEventListener('click', function() {
    //como uma await intrução so pode ser usada em uma function assicrona, encapsulamos o codigo abaixo dentro de uma IIFE-ASYNC que retorna um promise
    (async () => {
        //trata o erro, captura
        try {
            //a await espera a promise escolher seu estado, e recebe ou o motivo do erro ou o valor para qual foi resolvido a promise, foi resolvida, nesse caso a promise resolvida com valor retorna o modulo que foi carregado dinamicamente, de acordo com o especiifcador de modulo
            //usa a desestruturação de objeto, quando a await resolve a promise e retorna o modulo carregado como um valor, a desetruturação de objetos a seguir, atrbui as exportações do modulo dialog.js como ligações, cada ligação dentro das chaves especifica oque estou importando, no caso as ligações a function show e hide
            let {show, hide} = await import('./dialog.js');
            //usa as functions por meio das ligações
            //invoca as fuctions importadas por meio da ligações do modulo dialog.js
            show('Hi');
            hide();
        } catch (error) {
            //se der um erro trate aqui
            console.log(error);
        }
    })();
});