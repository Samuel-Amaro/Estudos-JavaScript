/**
 * * TIMEOUTS(TEMPO LIMITE) AND INTERVALOS(INTERVAL).
 * 
 * Este tutorial é sobre os métodos tradicionais que o JavaScript tem disponíveis para executar códigos assíncronamente depois que um dado período de tempo tenha passado, ou em um intervalo (um número de segundos por segundo), discute suas utilidades e considera seus problemas.
 * 
 * 
 * OBJETIVO: Entender loops e intervalos assíncronos e para o que eles servem.
 * 
 * 
 * * INTRODUÇÃO
 * 
 * Por um longo tempo, a plataforma web tem oferecido à programadores JavaScript um número de funções que permitem que eles executem código assíncronamente depois de um determinado intervalo de tempo, e executar um bloco de código de modo assíncrono repetidamente até que você o mande parar.
 * 
 * Essas funções são:
 
    setTimeout() : Executa um bloco específico uma vez depois de um determinado tempo.

    setInterval() : Executa um bloco específico repetidamente com um intervalo fixo entre cada chamada.

    requestAnimationFrame() : Uma versão moderna de setInterval(). Ela executa um  bloco de código específico antes do navegador renderizar a tela novamento, permitindo que seja executada em uma taxa de quadros adequada, independentemente do ambiente em que está sendo executado.

 * 
 * O código executado por estas funções é executado na main thread (depois do dado intervalo).
 * 
 * É importante saber que você pode (e irá) executar outros códigos antes que uma chamada setTimeout() é executada, ou entre iterações de setInterval(). Dependendo de como essas operações são intensas, elas podem atrasar o seu código async ainda mais, já que o código async só é executado depois que a main thread terminar seu processamento (ou seja, quando a fila estiver vazia). Você aprenderá mais sobre isso enquanto fazemos nosso progresso neste artigo.
 * 
 * De qualquer forma, essas funções são usadas para executar animações constantes e outros processamentos em um web site ou aplicação. Nas seções a seguir, nós vamos te mostrar como elas podem ser usadas.
*/