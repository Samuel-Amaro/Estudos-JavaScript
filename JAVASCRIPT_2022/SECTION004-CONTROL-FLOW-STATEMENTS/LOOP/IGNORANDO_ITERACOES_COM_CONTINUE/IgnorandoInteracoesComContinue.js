/**
 * * IGNORANDO ITERAÇÕES COM continue
 * 
 *  A instrução continue funciona de maneira semelhante ao  break, mas ao invés de sair inteiramente do loop, ele pula para a próxima iteração do loop. Vejamos outro exemplo que usa um número como entrada e retorna apenas os números que são quadrados de inteiros (números inteiros).
*/

var entrada = document.querySelector('input');

var paragrafo = document.getElementById('demo');

var botao = document.querySelector('button');

botao.addEventListener('click', function() {

    var numero = entrada.value;


    for(var i = 1; i <= numero; i++) {
        //obtem raiz quadrada
        var raiz = Math.sqrt(i);
        //Math.floor(raiz) -> raiz quadrada arredondada e diferente da raiz original
        if(Math.floor(raiz) !== raiz) {
            continue;
        }

        paragrafo.textContent += i + ' ';
    }

});

