/**
 * *  Recapitulação da terminologia da promessa(PROMISSE)
 * 
 * Havia muito a ser abordado na seção acima, então vamos voltar rapidamente para dar a você um pequeno guia que você pode marcar e usar para refrescar sua memória no futuro. Você também deve repassar a seção acima mais um pouco para ter certeza de que esses conceitos se fixam.
 
    1. Quando uma promessa é criada, ela não está em um estado de sucesso ou falha. Diz-se que está pendente .

    2. Quando uma promessa retorna, diz-se que foi resolvida

        2.1 Diz-se que uma promessa resolvida com sucesso foi cumprida . Ele retorna um valor, que pode ser acessado encadeando um .then() bloco no final da cadeia de promessa. A função do executor dentro do .then()bloco conterá o valor de retorno da promessa.

        2.2 Diz-se que uma promessa malsucedida foi rejeitada . Ele retorna um motivo , uma mensagem de erro informando por que a promessa foi rejeitada. Esse motivo pode ser acessado encadeando um .catch()bloco no final da cadeia de promessa.
        
*/