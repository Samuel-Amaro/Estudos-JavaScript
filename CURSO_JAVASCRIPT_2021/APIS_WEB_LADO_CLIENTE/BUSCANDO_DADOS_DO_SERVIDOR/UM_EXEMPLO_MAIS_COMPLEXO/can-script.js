// create a variable to store the products 'database' in
var products;

/**
 * use fetch para recuperá-lo e relatar quaisquer erros que ocorram na operação fetch
 * 
 * depois que os produtos foram carregados e formatados com sucesso como um objeto JSON
 * 
 * usando response.json (), execute a função initialize ()
 * 
 * A fetch()função retorna uma promessa. Se isso for concluído com êxito, a função dentro do primeiro .then()bloco conterá o response retornado da rede.
 * 
 * Dentro dessa função, executamos json()a resposta, não text(), já que queremos retornar nossa resposta como dados JSON estruturados, não como texto simples.
 * 
 * Em seguida, encadeamos outro .then()no final do primeiro, a função de sucesso que contém o jsonretornado da response.json()promessa. Definimos este como o valor da productsvariável e, em seguida, executamos initialize(products), que inicia o processo de exibição de todos os produtos na interface do usuário.
 * 
 * Para lidar com os erros, encadeamos um .catch()bloco no final da corrente. Isso ocorre se a promessa falhar por algum motivo. Dentro dele, incluímos uma função que é passada como um parâmetro, um errorobjeto. Este  errorobjeto pode ser usado para relatar a natureza do erro ocorrido, neste caso fazemos com um simples console.log().
 * 
 * No entanto, um site completo lidaria com esse erro com mais elegância exibindo uma mensagem na tela do usuário e talvez oferecendo opções para remediar a situação, mas não precisamos de nada mais do que um simples console.log().
 * 
 * 
*/
fetch('products.json').then(function(response) {
  if(response.ok) {
    response.json().then(function(json) {
      products = json;
      initialize();
    });
  } else {
    console.log('Network request for products.json failed with response ' + response.status + ': ' + response.statusText);
  }
});

// sets up the app logic, declares required variables, contains all the other functions
function initialize() {
  // grab the UI elements that we need to manipulate
  var category = document.querySelector('#category');
  var searchTerm = document.querySelector('#searchTerm');
  var searchBtn = document.querySelector('button');
  var main = document.querySelector('main');

  // keep a record of what the last category and search term entered were
  var lastCategory = category.value;
  // no search has been made yet
  var lastSearch = '';

  // these contain the results of filtering by category, and search term
  // finalGroup will contain the products that need to be displayed after
  // the searching has been done. Each will be an array containing objects.
  // Each object will represent a product
  var categoryGroup;
  var finalGroup;

  // To start with, set finalGroup to equal the entire products database
  // then run updateDisplay(), so ALL products are displayed initially.
  finalGroup = products;
  updateDisplay();

  // Set both to equal an empty array, in time for searches to be run
  categoryGroup = [];
  finalGroup = [];

  // when the search button is clicked, invoke selectCategory() to start
  // a search running to select the category of products we want to display
  searchBtn.onclick = selectCategory;

  function selectCategory(e) {
    // Use preventDefault() to stop the form submitting — that would ruin
    // the experience
    e.preventDefault();

    // Set these back to empty arrays, to clear out the previous search
    categoryGroup = [];
    finalGroup = [];

    // if the category and search term are the same as they were the last time a
    // search was run, the results will be the same, so there is no point running
    // it again — just return out of the function
    if(category.value === lastCategory && searchTerm.value.trim() === lastSearch) {
      return;
    } else {
      // update the record of last category and search term
      lastCategory = category.value;
      lastSearch = searchTerm.value.trim();
      // In this case we want to select all products, then filter them by the search
      // term, so we just set categoryGroup to the entire JSON object, then run selectProducts()
      if(category.value === 'All') {
        categoryGroup = products;
        selectProducts();
      // If a specific category is chosen, we need to filter out the products not in that
      // category, then put the remaining products inside categoryGroup, before running
      // selectProducts()
      } else {
        // the values in the <option> elements are uppercase, whereas the categories
        // store in the JSON (under "type") are lowercase. We therefore need to convert
        // to lower case before we do a comparison
        var lowerCaseType = category.value.toLowerCase();
        for(var i = 0; i < products.length ; i++) {
          // If a product's type property is the same as the chosen category, we want to
          // dispay it, so we push it onto the categoryGroup array
          if(products[i].type === lowerCaseType) {
            categoryGroup.push(products[i]);
          }
        }

        // Run selectProducts() after the filtering has bene done
        selectProducts();
      }
    }
  }

  // selectProducts() Takes the group of products selected by selectCategory(), and further
  // filters them by the tnered search term (if one has bene entered)
  function selectProducts() {
    // If no search term has been entered, just make the finalGroup array equal to the categoryGroup
    // array — we don't want to filter the products further — then run updateDisplay().
    if(searchTerm.value.trim() === '') {
      finalGroup = categoryGroup;
      updateDisplay();
    } else {
      // Make sure the search term is converted to lower case before comparison. We've kept the
      // product names all lower case to keep things simple
      var lowerCaseSearchTerm = searchTerm.value.trim().toLowerCase();
      // For each product in categoryGroup, see if the search term is contained inside the product name
      // (if the indexOf() result doesn't return -1, it means it is) — if it is, then push the product
      // onto the finalGroup array
      for(var i = 0; i < categoryGroup.length ; i++) {
        if(categoryGroup[i].name.indexOf(lowerCaseSearchTerm) !== -1) {
          finalGroup.push(categoryGroup[i]);
        }
      }

      // run updateDisplay() after this second round of filtering has been done
      updateDisplay();
    }

  }

  // start the process of updating the display with the new set of products
  function updateDisplay() {
    // remove the previous contents of the <main> element
    while (main.firstChild) {
      main.removeChild(main.firstChild);
    }

    // if no products match the search term, display a "No results to display" message
    if(finalGroup.length === 0) {
      var para = document.createElement('p');
      para.textContent = 'No results to display!';
      main.appendChild(para);
    // for each product we want to display, pass its product object to fetchBlob()
    } else {
      for(var i = 0; i < finalGroup.length; i++) {
        fetchBlob(finalGroup[i]);
      }
    }
  }

  // fetchBlob uses fetch to retrieve the image for that product, and then sends the
  // resulting image display URL and product object on to showProduct() to finally
  // display it
  function fetchBlob(product) {
    // construct the URL path to the image file from the product.image property
    var url = 'images/' + product.image;
    // Use fetch para buscar a imagem e converta a resposta resultante em um blob
    // Novamente, se ocorrer algum erro, nós os relatamos no console.
    /**
     * Isso funciona da mesma maneira que o anterior, exceto que, em vez de usar json(), usamos blob(). Neste caso, queremos retornar nossa resposta como um arquivo de imagem, e o formato de dados que usamos para isso é Blob (o termo é uma abreviatura de "Binary Large Object" e pode basicamente ser usado para representar grandes objetos semelhantes a arquivos, como como imagens ou arquivos de vídeo).
     * 
     * Assim que recebemos nosso blob com sucesso, criamos um URL de objeto a partir dele usando createObjectURL(). Isso retorna uma URL interna temporária que aponta para um objeto referenciado dentro do navegador. 
    */
    fetch(url).then(function(response) {
      if(response.ok) {
        response.blob().then(function(blob) {
          // Convert the blob to an object URL — this is basically an temporary internal URL
          // that points to an object stored inside the browser
          var objectURL = URL.createObjectURL(blob);
          // invoke showProduct
          showProduct(objectURL, product);
        });
      } else {
        console.log('Network request for "' + product.name + '" image failed with response ' + response.status + ': ' + response.statusText);
      }
    });
  }

  // Display a product inside the <main> element
  function showProduct(objectURL, product) {
    // create <section>, <h2>, <p>, and <img> elements
    var section = document.createElement('section');
    var heading = document.createElement('h2');
    var para = document.createElement('p');
    var image = document.createElement('img');

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
