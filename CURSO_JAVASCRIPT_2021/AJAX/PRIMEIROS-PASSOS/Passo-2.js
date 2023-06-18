/**
 * * PASSO 2 - MANIPULANDO A RESPOSTA DO SERVIDOR
 * 
 *  Lembre-se que quando você estava enviando a requisição, você forneceu o nome de uma função JavaScript que foi projetada para lidar com a resposta.
*/

httpRequest.onreadystatechange = nameOfTheFunction;

/**
 * Vamos ver o que essa função deve fazer. Primeiro, a função precisa checar o estado da requisição. Se o estado da requisição tem o valor igual a "4", significa que a resposta do servidor foi recebida por completo e está tudo OK para continuar o processo.
*/

//XMLHttpRequest.readyState
//A propriedade XMLHttpRequest.readyState retorna o estado de um XMLHttpRequest. Uma requisição XHR que existe em um dos seguintes estados:
//0	UNSENT	Um cliente foi criado. Mas o método open()  não foi chamado ainda.
//1	OPENED	O método open() foi chamado.  Durante esse estado, os headers da requisição podem ser inseridos usando o método setRequestHeader()  e o método send() pode ser chamado, iniciando a busca.
//2	HEADERS_RECEIVED	o método send() foi chamado e os cabeçalhos e status estão disponíveis .
//3	LOADING	Baixando e responseText contem os dados parciais. A resposta da requisição está sendo recebida. se o responseType for "text" ou  um texto em branco, o responseText terá o texto parcial da resposta conforme seu carregamento.
//4	DONE	Operação concluída. A Operação de busca está completa. Isso pode significar que a trasferência foi concluída com êxito ou que falhou.

if(httpRequest.readyState === 4) {
    //está tudo bem, a resposta é recebida
}else{
    //ainda não está pronto
}

/**
 * A lista completa dos valores readyState é a seguinte:
 
    - 0 (não inicializado)

    - 1 (carregando)

    - 2 (carregado)

    - 3 (interativo)

    - 4 (completo)

 * 
 * * readyState é algo como "estado de prontidão", mostra qual é o status do processo que está sendo executado e se está sendo executado.
 * 
 * A próxima coisa a se checar é o código de resposta do servidor HTTP. Todos os possíveis códigos estão listados no site do W3C. No exemplo a seguir, nós tratamos do retorno bem sucedido ou mal sucedido da requisição HTTP do AJAX, verificando se o código de resposta for 200.
*/

//Códigos de status de respostas HTTP
//Os códigos de status das respostas HTTP indicam se uma requisição HTTP foi corretamente concluída. As respostas são agrupadas em cinco classes:
//1. Respostas de informação (100-199),
//2. Respostas de sucesso (200-299),
//3. Redirecionamentos (300-399)
//4. Erros do cliente (400-499)
//5. Erros do servidor (500-599).

if(httpRequest.status === 200) {
    //Perfeito!
}else{
    //Houve um problema com o pedido,
    // por exemplo, a resposta pode conter um 404 (não encontrado)
    // ou código de resposta 500 (erro interno do servidor)
}

/**
 * Agora, após você ter checado o estado da requisição e o código de status do HTTP da resposta, caberá a você fazer o que quiser com os dados que o servidor lhe enviou. Você tem duas opções para acessar esses dados:
 
    - httpRequest.responseText – retorna a resposta do servidor como uma string de texto

    - httpRequest.responseXML – retorna a resposta do servidor como um objeto XMLDocument no qual você poderá percorrer usando as funções DOM do JavaScript

 * 
 * Note que os passos acima são válidos somente se você usou uma solicitação assíncrona (terceiro parâmetro de open() foi definido como true). Se você usou um pedido síncrono você não precisa especificar uma função, você pode acessar o retorno de dados pelo servidor diretamente depois de chamar send(), porque o script irá parar e esperar pela resposta do servidor.
 * 
*/