/**
 * * EXPLICANDO A SINTAXE DE PROMESSA BÁSICA: UM EXEMPLO REAL
 * 
 * É importante entender as promessas porque a maioria das APIs da Web modernas as usa para funções que executam tarefas potencialmente demoradas. Para usar tecnologias da web modernas, você precisará usar promessas. Mais adiante neste capítulo, veremos como escrever sua própria promessa, mas, por enquanto, veremos alguns exemplos simples que você encontrará em APIs da Web.
 * 
 * No primeiro exemplo, usaremos o fetch()método para buscar uma imagem da web, o método blob() (en-US) para transformar o conteúdo bruto do corpo da resposta de busca em um Blobobjeto e, em seguida, exibir esse blob dentro de um <img>elemento. Isso é muito semelhante ao exemplo que vimos no primeiro artigo da série , mas faremos isso de maneira um pouco diferente à medida que você constrói seu próprio código baseado em promessa.
*/


/*
    - WindowOrWorkerGlobalScope.fetch()
    - O método fetch() do mixin WindowOrWorkerGlobalScope inicia um processo de busca de um recurso da rede. Este, retorna uma promessa que resolve o objeto Response que representa a resposta a sua requisição. 
    - método fetch() está disponível em praticamente qualquer contexto em que você possa querer obter recursos.
    - SINTAXE: Promise<Response> fetch(input[, init]);
    - PARAMENTROS: input : Isto define o recurso que você deseja buscar. Isto pode ser: Um USVString (en-US) contendo uma URL direta para o recurso que você quer obter. Alguns navegadores aceitam blob: e data: como esquemas. Um objeto Request.
    - PARAMENTROS: init Optional Um objeto opcional que contém configurações personalizadas que você pode aplicar à requisição. 
    - Response : A interface Response da Fetch API representa a resposta para uma requisição. Você pode criar um novo objeto Response usando o construtor Response.Response() (en-US), porém é mais provável você encontrar um objeto Response sendo retornado como o resultado de uma outra operação da API, 
*/ 

//retorna uma promisse com a interface response como uma promisse de resposta
let promise = fetch('coffe.jpg');

/**
 * Isso chama o fetch()método, passando a URL da imagem a ser buscada na rede como um parâmetro. Isso também pode receber um objeto de opções como um segundo parâmetro opcional, mas estamos apenas usando a versão mais simples por enquanto. Estamos armazenando o objeto de promessa retornado por fetch()dentro de uma variável chamada promise. Como dissemos antes, este objeto representa um estado intermediário que inicialmente não é sucesso nem falha - o prazo oficial para uma promessa neste estado está pendente.
 * 
 * Para responder à conclusão bem-sucedida da operação sempre que isso ocorrer (neste caso, quando a Response é retornado), invocamos o .then() método do objeto de promessa. O retorno de chamada dentro do .then()bloco (referido como o executor ) é executado apenas quando a chamada da promessa é concluída com êxito e retorna o Response objeto - na linguagem da promessa, quando ele foi cumprido . É passado o Response objeto retornado como um parâmetro.
 * 
 * Observação : a maneira como um .then()bloco funciona é semelhante a quando você adiciona um ouvinte de evento a um objeto usando AddEventListener(). Ele não é executado até que um evento ocorra (quando a promessa é cumprida). A diferença mais notável é que um .then() só será executado uma vez para cada vez que for usado, enquanto um ouvinte de evento pode ser chamado várias vezes.
 * 
 * Imediatamente executamos o blob()método nessa resposta para garantir que o corpo da resposta seja totalmente baixado e, quando estiver disponível, o transformamos em um Blobobjeto com o qual possamos fazer algo. O resultado disso é retornado assim:
 
    response => response.blob()

 * que é uma abreviatura para

    function(response) {
        return response.blob();
    }
*/

let promisse2 = promise.then(function(response) {
    //Response.blob ()
    //O blob() método da Response interface pega um Respons estream e o lê até a conclusão. Ele retorna uma promessa que se resolve com a Blob.
    //O Blob objeto representa um blob, que é um objeto semelhante a um arquivo de dados brutos imutáveis; eles podem ser lidos como texto ou dados binários, ou convertidos em um ReadableStreampara que seus métodos possam ser usados ​​para processar os dados.
    //Blobs podem representar dados que não estão necessariamente em um formato nativo de JavaScript. 
    return response.blob();
});

/**
 * Cada chamada para .then()cria uma nova promessa. Isso é muito útil; como o blob()método também retorna uma promessa, podemos manipular o Blobobjeto que ele retorna no cumprimento invocando o .then()método da segunda promessa. Como queremos fazer algo um pouco mais complexo para o blob do que apenas executar um único método nele e retornar o resultado, precisaremos envolver o corpo da função entre chaves desta vez (caso contrário, ocorrerá um erro).
 * 
 * Agora vamos preencher o corpo da função do executor. Adicione as seguintes linhas dentro das chaves:
*/

let promise3 = promisse2.then(function(myBlob) {
    //cria um URL 
    let objectURL = URL.createObjectURL(myBlob);
    //cria um elemento HTML <img>
    let image = document.createElement('img');
    //link da imagen aonde ela esta
    image.src = objectURL;
    document.body.appendChild(image);
});

/**
 * Aqui estamos executando o URL.createObjectURL()método, passando-o como parâmetro que é Blobretornado quando a segunda promessa é cumprida. Isso retornará um URL apontando para o objeto. Em seguida, criamos um <img>elemento, definimos seu srcatributo para ser igual ao URL do objeto e o anexamos ao DOM, para que a imagem seja exibida na página!
 * 
 * Nota : você provavelmente notará que esses exemplos são um tanto artificiais. Você poderia simplesmente eliminar a cadeia inteira fetch() e blob() apenas criar um <img> elemento e definir seu srcvalor de atributo para a URL do arquivo de imagem coffee.jpg,. No entanto, escolhemos este exemplo porque ele demonstra promessas de uma maneira simples e agradável, em vez de ser adequado para o mundo real.
 * 
 * * RESPONDENDO A FALHAS(FRACASSO)
 * 
 * Há algo faltando - atualmente não há nada para tratar explicitamente os erros se uma das promessas falhar ( rejeita , no falar da promessa). Podemos adicionar tratamento de erros executando o .catch() método da promessa anterior. Adicione isso agora:
*/

let errorCase = promise3.catch(function(e) {
    console.log("Ocorreu um problema com sua operação de busca: " + e.message);
});

/**
 * Para ver isso em ação, tente digitar incorretamente o URL da imagem e recarregar a página. O erro será relatado no console das ferramentas de desenvolvedor do seu navegador.
 * 
 * Isso não faz muito mais do que faria se você simplesmente não se incomodasse em incluir o .catch()bloco, mas pense bem - isso nos permite controlar o tratamento de erros exatamente como queremos. Em um aplicativo real, seu .catch()bloco pode tentar buscar a imagem novamente, ou mostrar uma imagem padrão, ou solicitar que o usuário forneça um URL de imagem diferente, ou qualquer outra coisa.
*/