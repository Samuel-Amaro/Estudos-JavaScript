/**
 * * PASSO 1 - COMO FAZER UMA REQUISIÇÃO HTTP
 * 
 *  Para fazer uma requisição HTTP ao servidor usando JavaScript, você precisa de uma instância de uma classe que fornece essa funcionalidade. Este é o lugar onde o XMLHttpRequest entra. Essa classe foi originalmente introduzida no Internet Explorer como um objeto ActiveX chamado XMLHTTP. Então, Mozilla, Safari e outros navegadores o seguiram, implementando uma classe XMLHttpRequest que suporta os métodos e propriedades do objeto ActiveX original da Microsoft. 
 * 
 * Como resultado, a fim de criar uma instância (objeto) compatível com multiplos navegadores da classe requerida, você pode fazer o seguinte:
*/

var httpRequest;

if(window.XMLHttpRequest) { //Mozilla, Safari, ...
    httpRequest = new XMLHttpRequest();
}else if(window.ActiveXObject) { //IE 8 and outros
    httpRequest = new ActiveXObject("Microsoft.XMLHTTP");
}

/**
 * Nota: Para fins de ilustração, o que precede é uma versão um tanto simplificada do código necessário para criar uma instância XMLHTTP. Para um exemplo mais real, consulte o passo 3 deste artigo.
 * 
 * Em seguida, você precisa decidir o que quer fazer depois de receber a resposta do servidor ao seu pedido. Nesta etapa, você somente precisa dizer ao objeto requisição HTTP qual função JavaScript irá manipular o processamento da resposta. Isto é feito definindo a propriedade onreadystatechange do objeto para o nome da função JavaScript que deve ser chamada quando o estado da requisição muda, desse jeito:
 
    httpRequest.onreadystatechange = nameOfTheFunction;

 * 
 * Observe que não existem parênteses depois do nome da função e nenhum parâmetro é passado, porque você está simplesmente atribuindo uma referência à função, ao invés de realmente chamá-la. Além disso, em vez de dar um nome de função, você pode usar a técnica JavaScript de definir funções dinâmicamente (chamadas "funções anônimas") e definir as ações que irão processar de imediato a resposta, dessa forma:
 *  
*/

//XMLHttpRequest.onreadystatechange = callback; -> propriedade
//callback é a função que será executada quando o readyState mudar.
//Um manipulador de eventos que é chamado sempre que o readyState atributo muda.
//O callback é chamado a partir da interface do usuário. A propriedade XMLHttpRequest.onreadystatechange contém o manipulador de eventos que é chamado quando o evento readystatechange é disparado, ou seja, toda vez que a propriedade readyState do XMLHttpRequest é modificada.
httpRequest.onreadystatechange = function() {
    //A processar a resposta do servidor
};

/**
 * Em seguida, depois de ter declarado o que vai acontecer assim que receber a resposta, você precisa realmente fazer a requisição. Você precisa chamar os métodos open() e send() da classe requisição HTTP, dessa forma: 
*/

//O método GET significa recuperar qualquer informação (na forma de uma entidade) é identificada pelo Request-URI.

httpRequest.open('GET', 'http://www.example.org/some.file', true);
httpRequest.send(null);

/**
 * O primeiro parâmetro da chamada para open() é o método da requisição HTTP – GET, POST, HEAD ou qualquer outro método que você deseja usar e que é suportado pelo seu servidor. Mantenha o método em letras maiúsculas de acordo com o padrão HTTP; caso contrário, alguns navegadores (como o Firefox) podem não processar a requisição. 
 * 
 * O segundo parâmetro é a URL da página que você está requisitando. Como um recurso de segurança, você não pode chamar páginas em domínios de terceiros. Certifique-se de usar o nome exato do domínio em todas as suas páginas ou irá obter um erro de "permissão negada" quando chamar o open(). Uma cilada comum é acessar o seu site pelo domain.tld, mas tentar chamar páginas com www.domain.tld
 * 
 * O terceiro parâmetro opcional define se a requisição é assíncrona. Se TRUE (o padrão), a execução da função JavaScript irá continuar enquanto a resposta do servidor não chegar. Isso é o A no AJAX.
 * 
 * O parâmetro para o método send() pode ser qualquer dado que você deseja enviar para o servidor se a requisição for POST. Dados de formulário devem ser enviados em um formato que o servidor possa facilmente analisar. Isso pode ser feito através de uma string de consulta, como:
 
    "name=value&anothername="+encodeURIComponent(myVar)+"&so=on"

 * 
 * ou em vários outros formatos, incluindo JSON, SOAP, etc.
 * 
 * Observe que se você deseja utilizar POST,  você pode ter que definir o tipo de solicitação como MIME. Por exemplo, use a linha a seguir antes de chamar send() para os dados do formulário enviados como uma string de consulta:
 * 
*/

httpRequest.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');