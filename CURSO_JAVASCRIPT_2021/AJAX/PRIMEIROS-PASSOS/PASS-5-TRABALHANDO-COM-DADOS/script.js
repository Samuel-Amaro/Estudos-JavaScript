/**
 * Vamos, também, adicionar uma linha para nosso manipulador de eventos obter os dados do usuário da caixa de texto e enviá-lo para função makeRequest()juntamente com um URL do nosso script do lado do servidor (server-side)
*/

let buttonAjax = document.getElementById('ajaxButton');
buttonAjax.addEventListener("click", function() {
    let nomeUsuario = document.getElementById('ajaxTextbox').value;
    makeRequest('test.php', nomeUsuario);
});

/**
 * Precisamos modificar makeRequest ()para aceitar os dados do usuário e passá-lo para o servidor . Vamos mudar o método de requisição de GET para POST, e incluir nossos dados como um parâmetro na chamada parahttpRequest.send():
*/

function makeRequest(url, nomeUsuario) {
    //cria uma instancia de objeto da API
    //O construtor inicializa um XMLHttpRequest. Deve ser chamado antes de qualquer outra chamada de método.
    var httpRequest = new XMLHttpRequest();
    //define uma referencia da função(não e chamada e so uma referencia) para tratar a resposta
    //Um manipulador de eventos que é chamado sempre que o readyState atributo muda.
    httpRequest.onreadystatechange = alertContents;
    //abrindo um requisição(request)
    //XMLHttpRequest.open(method, url[, async[, user[, password]]])
    //method : O método de pedido de HTTP para utilização, tais como "GET", "POST", "PUT", "DELETE", etc ignorado para URLs (S) não HTTP.
    //url Um que DOMString representa o URL para o qual enviar a solicitação.
    //async Opcional
    //Um parâmetro booleano opcional, com o padrão de true, indicando se deve ou não executar a operação de forma assíncrona. Se esse valor for false, o send()método não retorna até que a resposta seja recebida. Se true, a notificação de uma transação concluída é fornecida usando ouvintes de eventos.
    //O método POST é usado para solicitar que o servidor de origem aceite a entidade incluída na solicitação como um novo subordinado do recurso identificado pelo URI de Solicitação na Linha de Solicitação.
    httpRequest.open('POST', url);
    //void setRequestHeader(DOMString header,DOMString value);
    //header : O nome do cabeçalho cujo valor deve ser definido.
    //value : O valor definido como o corpo do cabeçalho.
    //Define o valor de uma solicitação HTTP header. Você deve chamar setRequestHeader() após open() , mas antes de send().
    //Os cabeçalhos HTTP permite que o cliente e o servidor passem informações adicionais com a solicitação ou a resposta HTTP. Um cabeçalho de solicitação é composto por seu nome insensível a maiúsculas e minúsculas (não diferencia letras maiúsculas e minúsculas), seguido por dois pontos ':' e pelo seu valor (sem quebras de linha).
    //Informações do corpo da mensagem
    //Content-Type : Indica o tipo de mídia do recurso.
    //value : x-www-form-urlencoded	application/x-www-form-urlencoded
    //midia para aplicativo (myme type)
    //isoladamente, uma carga útil application / x-www-form-urlencoded não apresenta riscos de segurança. No entanto, como esse tipo é geralmente usado como parte do envio de um formulário
    httpRequest.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    //send()
    //Envia a solicitação. Se o pedido é assíncrono (que é o padrão), este método retorna assim que o pedido for enviado. Se o pedido é síncrono, este método não retorna até a resposta chegar.
    //dados do formulario que vão ser enviados no corpo do header HTTP
    //codifica o nome de usuario para uma URI
    httpRequest.send('userName=' + encodeURIComponent(nomeUsuario));

    /**
     * A função alertContents()pode ser escrita da mesma forma que se encontrava no Passo 3 para alertar ( alert()) nossa string computada, se isso for tudo o que o servidor retorna. No entanto, vamos dizer que o servidor irá retornar tanto a sequência computada como os dados originais do usuário. Portanto, se o usuário digitou "Jane" na caixa de texto, a resposta do servidor ficaria assim: 
    */

    //{"userData":"Jane","computedString":"Hi, Jane!"}

    /**
     * Para usar estes dados dentro dealertContents() , nós não podemos simplesmente exibiralert()  uma propriedaderesponseText. Temos que analisar (analisar) e então alertar (alert()) computedString,a propriedade que queremos: 
    */

    function alertContents() {
        //4	DONE	Operação concluída. A Operação de busca está completa. Isso pode significar que a trasferência foi concluída com êxito ou que falhou.
        if(httpRequest.readyState === 4) {
            //Os códigos de status das respostas HTTP indicam se uma requisição HTTP foi corretamente concluída. 
            //2. Respostas de sucesso (200-299)
            if(httpRequest.status === 200) {
                //httpRequest.responseText
                //A resposta à request, em formato texto, retorna null se a solicitação não teve êxito ou que ainda não foi enviada.
                //(method) JSON.parse(text: string, reviver?: (this: any, key: string, value: any) => any): any
                //Converte uma string JavaScript Object Notation (JSON) em um objeto.
                //@param text - Uma string JSON válida.
                var resposta = JSON.parse(httpRequest.responseText);
                alert(resposta.computedString);
            }
        }
    }
}