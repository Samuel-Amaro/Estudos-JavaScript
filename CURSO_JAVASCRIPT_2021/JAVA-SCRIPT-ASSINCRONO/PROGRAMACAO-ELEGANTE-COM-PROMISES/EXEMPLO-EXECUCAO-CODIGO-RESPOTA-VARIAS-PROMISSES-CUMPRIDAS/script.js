/**
 * * Execução de código em resposta a várias promessas cumpridas
 * 
 * Isso pode ser muito útil. Imagine que estamos buscando informações para preencher dinamicamente um recurso de IU em nossa página com conteúdo. Em muitos casos, faz sentido receber todos os dados e só então mostrar o conteúdo completo, ao invés de exibir informações parciais.
 * 
 * Em nosso script, primeiro definiremos uma função que retorna as promessas para as quais queremos enviar Promise.all(). Isso seria fácil se quiséssemos apenas executar o Promise.all()bloco em resposta à fetch()conclusão de três operações. Poderíamos apenas fazer algo como:
*/

/*
let a = fetch(url1);
let b = fetch(url2);
let c = fetch(url3);

Promise.all([a, b, c]).then(function(values) {
    //...
});
*/

/**
 * Quando a promessa for cumprida, o values passado para o manipulador de fullfillment conterá três Response objetos, um para cada uma das fetch()operações que foram concluídas.
 * 
 * No entanto, não queremos fazer isso. Nosso código não se importa quando as fetch()operações são concluídas. Em vez disso, o que queremos são os dados carregados. Isso significa que queremos executar o Promise.all() bloco quando recebermos os blobs utilizáveis ​​que representam as imagens e uma string de texto utilizável. Podemos escrever uma função que faça isso; adicione o seguinte dentro de seu <script> elemento:
*/

//O código dentro do corpo da função é assíncrono e baseado em promessa, portanto, na verdade, toda a função atua como uma promessa - conveniente.
//Em primeiro lugar, definimos a função, passando a ela uma URL e uma string representando o tipo de recurso que ela está buscando.
function fetchAndDecode(url, type) {
    //Dentro do corpo da função, temos uma estrutura semelhante à que vimos no primeiro exemplo - chamamos a fetch()função para buscar o recurso no URL especificado e, em seguida, encadeamos em outra promessa que retorna o corpo de resposta decodificado (ou "ler") . Esse sempre foi o blob()método no exemplo anterior.
    //Em segundo lugar, adicionamos a return palavra - chave antes da fetch() chamada. O efeito disso é executar toda a cadeia e, em seguida, executar o resultado final (ou seja, a promessa retornada por blob()ou text()) como o valor de retorno da função que acabamos de definir. Com efeito, as return declarações passam os resultados de volta ao topo da cadeia.
    return fetch(url).then(function(response) {
        //nstrução simples para retornar uma promessa diferente dependendo do tipo de arquivo que precisamos decodificar (neste caso, temos a opção de blobou text, mas seria fácil estender isso para lidar com outros tipos também).
        if(type === 'blob') {
            //retorna da função definida
            return response.blob();
        }else if(type === 'text') {
            //retorna da função definida
            return response.text();
        }
        //No final do bloco, encadeamos uma .catch()chamada, para lidar com quaisquer casos de erro que possam surgir com qualquer uma das promessas passadas no array para .all(). Se alguma das promessas for rejeitada, o bloco catch permitirá que você saiba qual delas teve um problema. O .all()bloco (veja abaixo) ainda será preenchido, mas apenas não exibirá os recursos que tiveram problemas. Se você quisesse .allrejeitar, teria que acorrentar o .catch()bloco até o final dele.
    }).catch(function(e) {
        console.log('Ocorreu um problema com sua operação de busca: ', e.message);
    });
}

/**
 * Em seguida, chamamos nossa função três vezes para iniciar o processo de buscar e decodificar as imagens e o texto, e armazenar cada uma das promessas retornadas em uma variável. Adicione o seguinte abaixo de seu código anterior:
*/

let coffee = fetchAndDecode('coffee.jpg', 'blob');
let tea = fetchAndDecode('tea.jpg', 'blob');
let description = fetchAndDecode('description.txt', 'text');

/**
 * A seguir, definiremos um Promise.all()bloco para executar algum código apenas quando todas as três promessas armazenadas acima forem cumpridas com sucesso. Para começar, adicione um bloco com um executor vazio dentro da .then()chamada, assim:
 * 
 * Você pode ver que leva um array contendo as promessas como parâmetro. O executor só será executado quando todas as três promessas forem resolvidas; quando isso acontecer, será passado um array contendo os resultados das promessas individuais (ou seja, os corpos de resposta decodificados), do tipo [resultados do café, resultados do chá, resultados da descrição].
*/

Promise.all([coffee, tea, description]).then(function(values) {
    //Por último, adicione o seguinte dentro do executor. Aqui, usamos um código de sincronização bastante simples para armazenar os resultados em variáveis ​​separadas (criando URLs de objeto a partir dos blobs) e, em seguida, exibimos as imagens e o texto na página.
    console.log(values);
    //Armazena cada valor retornado das promessas em variáveis ​​separadas; criar URLs de objetos a partir dos blobs
    let objectURL1 = URL.createObjectURL(values[0]);
    let objectURL2 = URL.createObjectURL(values[1]);
    let descText = values[2];

    //Exibir as imagens em elementos <img>
    let image1 = document.createElement('img');
    let image2 = document.createElement('img');
    image1.src = objectURL1;
    image2.src = objectURL2;
    document.body.appendChild(image1);
    document.body.appendChild(image2);

    //Mostra o texto em um parágrafo
    let para = document.createElement('p');
    para.textContent = descText;
    document.body.appendChild(para);
});