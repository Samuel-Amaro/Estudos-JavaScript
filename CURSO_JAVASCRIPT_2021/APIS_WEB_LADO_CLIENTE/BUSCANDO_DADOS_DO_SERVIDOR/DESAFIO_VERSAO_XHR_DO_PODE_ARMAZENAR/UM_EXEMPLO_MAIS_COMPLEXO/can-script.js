/**
 * XMLHttpRequestOs objetos (XHR) são usados ​​para interagir com os servidores. Você pode recuperar dados de um URL sem ter que fazer uma atualização completa da página. Isso permite que uma página da Web atualize apenas parte de uma página sem interromper o que o usuário está fazendo. XMLHttpRequesté muito usado na programação AJAX .
 * 
 * Apesar do nome, XMLHttpRequestpode ser usado para recuperar qualquer tipo de dado, não apenas XML.
 */

//cria a intancia de um objeto XMLHttpRequest
//O construtor inicializa um XMLHttpRequest. Deve ser chamado antes de qualquer outra chamada de método.
const requisicaoServer = new XMLHttpRequest();

//XMLHttpRequest.open() Inicializa uma solicitação.
//O XMLHttpRequestmétodo open() inicializa uma solicitação recém-criada ou reinicializa uma existente.
//XMLHttpRequest.open(method, url[, async[, user[, password]]])
//method -> O método de pedido de HTTP para utilização, tais como "GET", "POST", "PUT", "DELETE", etc ignorado para URLs (S) não HTTP.
//url -> Um que DOMString representa o URL para o qual enviar a solicitação.
requisicaoServer.open('GET', 'products.json');

//XMLHttpRequest.responseType É um valor enumerado que define o tipo de response.
//A XMLHttpRequest propriedade responseType é um valor de string enumerado que especifica o tipo de dados contidos na resposta. 
//Os valores suportados por responseTypesão os seguintes:
//json -> O response é um objeto JavaScript criado pela análise do conteúdo dos dados recebidos como JSON .
requisicaoServer.responseType = 'json';

//registrando um manipulador de eventos
//Disparado quando uma XMLHttpRequesttransação é concluída com sucesso. Também disponível através da onload propriedade.
requisicaoServer.onload = function() {
  //XMLHttpRequest.status
  //Retorna um unsigned shortcom o status da resposta da solicitação
  //A XMLHttpRequest.status propriedade somente leitura retorna o código de status HTTP numérico da XMLHttpRequest resposta do. Antes que a solicitação seja concluída, o valor de statusé 0. Os navegadores também relatam um status de 0 em caso de XMLHttpRequest erros.
  //200 sucesso na resposta
  if(requisicaoServer.status === 200) {
     let produtos = requisicaoServer.response;
     inicializa(produtos);
  }else{
    console.log('A solicitação de rede para products.json falhou com a resposta ' + requisicaoServer.status +': '+ requisicaoServer.statusText);
  }
};

//XMLHttpRequest.send() Envia o pedido(request). Se a solicitação for assíncrona (que é o padrão), este método retornará assim que a solicitação for enviada.
//e o resultado é entregue por meio de eventos. Se a solicitação for síncrona, esse método não retorna até que a resposta chegue.
requisicaoServer.send();

//configura a lógica do aplicativo, declara as variáveis ​​necessárias, contém todas as outras funções
function inicializa(produtos) {

  //pegue os elementos da IU que precisamos manipular
  //obtem referencia aos elementos tags do documento HTML5
  const categoria = document.querySelector('#category');
  const buscaTermo = document.querySelector('#searchTerm');
  const btnBusca = document.querySelector('button');
  const main = document.querySelector('main');

  // mantenha um registro de quais foram as últimas categorias e termos de pesquisa inseridos
  let ultimaCategoria = categoria.value;
  //nenhuma pesquisa foi feita ainda
  let ultimaPesquisa = '';

  //estes contêm os resultados da filtragem por categoria e termo de pesquisa
  // finalGroup conterá os produtos que precisam ser exibidos após
  // a pesquisa foi feita. Cada um será um array contendo objetos.
  // Cada objeto representará um produto
  let categoriaGrupo;
  let grupoFinal;

  // Para começar, defina finalGroup como igual a todo o banco de dados de produtos
  // em seguida, execute updateDisplay (), para que TODOS os produtos sejam exibidos inicialmente.
  grupoFinal = produtos;
  atualizaExibimento();

  //Defina ambos para serem iguais a uma array vazia, a tempo para as pesquisas serem executadas
  categoriaGrupo = [];
  grupoFinal = [];

  // quando o botão de pesquisa é clicado, invoque selectCategory () para iniciar
  // uma pesquisa em execução para selecionar a categoria de produtos que queremos exibir
  btnBusca.onclick  = selecionaCategoria;

  function selecionaGategoria(e) {
      // Use preventDefault () para interromper o envio do formulário - isso arruinaria
      // a experiência
      e.preventDefault();
      
      //Defina-os de volta para matrizes vazias, para limpar a pesquisa anterior
      categoriaGrupo = [];
      grupoFinal = [];

      // se a categoria e o termo de pesquisa são os mesmos da última vez que um
      // a pesquisa foi executada, os resultados serão os mesmos, então não há motivo para executar
      // de novo - basta retornar da função
      if(categoria.value === ultimaCategoria && buscaTermo.value.trim() === ultimaPesquisa) {
        return;
      }else{
        //atualiza o registro da última categoria e termo de pesquisa
        ultimaCategoria = categoria.value;
        ultimaPesquisa = buscaTermo.value.trim();
        // Neste caso, queremos selecionar todos os produtos e, em seguida, filtrá-los pela pesquisa
        // term, então apenas definimos categoryGroup para todo o objeto JSON e, em seguida, executamos selectProducts()
        //all === todos
        if(categoria.value === 'All') {
          categoriaGrupo = produtos;
          selecionaProdutos();
          // Se uma categoria específica for escolhida, precisamos filtrar os produtos que não estão nessa
          // categoria, em seguida, coloque os produtos restantes dentro de categoryGroup, antes de executar
          // selectProducts ()
        }else{
          // os valores nos elementos <option> são maiúsculas, enquanto as categorias
          // armazenar no JSON (em "tipo") são minúsculas. Portanto, precisamos converter
          // para minúsculas antes de fazermos uma comparação
          let tipoCasoMinusculo = categoria.value.toLowerCase();
          for(let i = 0; i < produtos.length; i++) {
            //Se a propriedade de tipo de um produto for igual à categoria escolhida, queremos
            // exibi-lo, então o colocamos na array categoryGroup
            if(produtos[i].type === tipoCasoMinusculo) {
              categoriaGrupo.push(produtos[i]);
            }
          }

          //execute selectProducts() após a filtragem ter sido feita
          selecionaProdutos();
        }
      }
  }
  

  //selectProducts() Leva o grupo de produtos selecionados por selectCategory (), e mais
  // filtra-os pelo termo de pesquisa em camadas (se algum foi inserido)
  function selecionaProdutos() {
    // Se nenhum termo de pesquisa foi inserido, apenas torne a matriz finalGroup igual a categoryGroup
    // array - não queremos filtrar mais os produtos - então execute updateDisplay ().
    if(buscaTermo.value.trim() === '') {
      grupoFinal = categoriaGrupo;
      atualizaExibimento();
    }else{
      // Certifique-se de que o termo de pesquisa seja convertido para minúsculas antes da comparação. Nós mantivemos o
      // nomes de produtos todos em minúsculas para manter as coisas simples
      let termoBuscaCasoMaiusculo = buscaTermo.value.trim().toLowerCase();
      // Para cada produto em categoryGroup, veja se o termo de pesquisa está contido no nome do produto
      // (se o resultado indexOf () não retornar -1, significa que é) - se for, envie o produto
      // na matriz finalGroup
      for(let i = 0; i < categoriaGrupo.length; i++) {
        if(categoriaGrupo[i].name.indexOf(termoBuscaCasoMaiusculo) !== -1) {
          grupoFinal.push(categoriaGrupo[i]);
        }
      }
      
      /// execute updateDisplay () após esta segunda rodada de filtragem ter sido feita
      atualizaExibimento();
    } 
  }

  //inicie o processo de atualização da tela com o novo conjunto de produtos
  function atualizaExibimento() {
    //remove o conteúdo anterior do elemento <main>
    while(main.firstChild) {
        main.removeChild(main.firstChild);
    }

    //se nenhum produto corresponder ao termo de pesquisa, exibir uma mensagem "Nenhum resultado para exibir"
    if(grupoFinal.length === 0) {
      const para = document.createElement('p');
      para.textContent = 'Nenhum resultado para exibir!';
      main.appendChild(para);
      //para cada produto que queremos exibir, passe seu objeto de produto para fetchBlob ()
    }else{
        for(var i = 0; i < grupoFinal.length; i++) {
            buscarBlob(grupoFinal[i]);
        }
      }
  }

  // fetchBlob usa XHR para recuperar a imagem desse produto e, em seguida, envia o
  // URL de exibição da imagem resultante e objeto do produto em showProduct () para finalmente
  // exibi-lo
  function buscarBlob(produto) {

    //construir o caminho do URL para o arquivo de imagem a partir da propriedade product.image
    let url = 'images/' + produto.image;
    // Use XHR para buscar a imagem, como um blob
    // Novamente, se ocorrer algum erro, nós os relatamos no console.
    const request = new XMLHttpRequest();
    request.open('GET', url);
    //blob O response é um Blob objeto que contém os dados binários.
    request.responseType = 'blob';

    request.onload = function() {
      if(request.status === 200) {
        //Converta o blob em um URL de objeto - este é basicamente um URL interno temporário
        //que aponta para um objeto armazenado dentro do navegador
        let blob = request.response;
        let objectURL = URL.createObjectURL(blob);
        //chamar 
        mostraProdutos(objectURL, produto);
      }else{
        console.log('Solicitação de rede para ' + produto.name + 'imagen falhou com a resposta' + request.status + ':' + request.statusText);
      }
    };

    request.send();
  }

  // Display a product inside the <main> element
  function mostraProdutos(objectURL, product) {
    // create <section>, <h2>, <p>, and <img> elements
    const section = document.createElement('section');
    const heading = document.createElement('h2');
    const para = document.createElement('p');
    const image = document.createElement('img');

    // give the <section> a classname equal to the product "type" property so it will display the correct icon
    section.setAttribute('class', product.type);

    // Give the <h2> textContent equal to the product "name" property, but with the first character
    // replaced with the uppercase version of the first character
    heading.textContent = product.name.replace(product.name.charAt(0), product.name.charAt(0).toUpperCase());

    // Give the <p> textContent equal to the product "price" property, with a $ sign in front
    // toFixed(2) is used to fix the price at 2 decimal places, so for example 1.40 is displayed
    // as 1.40, not 1.4.
    para.textContent = '$' + product.price.toFixed(2);

    // Set the src of the <img> element to the ObjectURL, and the alt to the product "name" property
    image.src = objectURL;
    image.alt = product.name;

    // append the elements to the DOM as appropriate, to add the product to the UI
    main.appendChild(section);
    section.appendChild(heading);
    section.appendChild(para);
    section.appendChild(image);
  }
}


  