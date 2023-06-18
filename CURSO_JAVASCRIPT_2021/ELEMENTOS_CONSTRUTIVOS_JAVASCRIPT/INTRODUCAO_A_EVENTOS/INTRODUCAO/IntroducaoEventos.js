/**
 * * INTRODUÇÃO A EVENTOS
 * 
 *  Eventos são ações ou ocorrências que acontecem no sistema que estamos desenvolvendo, no qual este te alerta sobre essas ações para que você possa responder de alguma forma, se desejado.
 * 
 * Entender a teoria fundamentos dos eventos, como eles funcionam nos browsers, e como eventos podem ser diferentes dependendo do ambiente de desenvolvimento.
 * 
 * Como mencionado acima, eventos são ações ou ocorrências que acontecem no sistema que estamos desenvolvendo — o sistema irá disparar algum tipo de sinal quando o evento acontecer, além de prover um mecanismo pelo qual alguma ação automática possa ser executada (ou seja, rodar algum código) quando o evento ocorrer.
 * 
 * No caso da web, eventos são disparados dentro da janela do navegador, e tende a estarem anexados a algum item especifico nele — pode ser um único elemento, um conjunto de elementos, o HTML carregado na guia atual, ou toda a janela do navegador. Existem vários tipos diferentes de eventos que podem vir a acontecer, por exemplo:
 
    - O usuário clicando com o mouse sobre um certo elemento ou passando o cursor do mouse sobre um certo elemento.
    - 
    - O usuário pressionando uma tecla do teclado.
    - 
    - O usuário redimensionando ou fechando a janela do navegador.
    - 
    - Uma pagina da web terminando de carregar.
    -
    - Um formulário sendo enviado.
    - 
    - Um video sendo reproduzido, interrompido, ou terminando sua reprodução.
    - 
    - Um erro ocorrendo.

 * 
 * Cada evento disponivel possui um manipulador de eventos (event handler), que é um bloco de código (geralmente uma função JavaScript definida pelo usuário) que será executado quando o evento for disparado. Quando esse bloco de código é definido para rodar em resposta a um evento que foi disparado, nós dizemos que estamos registrando um manipulador de eventos. Note que manipuladores de eventos são, em alguns casos, chamados de ouvinte de eventos (event listeners) — eles são praticamente intercambiáveis para nossos propósitos, embora estritamente falando, eles trabalhem juntos. Os ouvintes escutam o evento acontecendo, e o manipulador é o codigo que roda em resposta a este acontecimento.
 * 
 * Nota: É importante notar que eventos web não são parte do core da linguagem JavaScript — elas são definidas como parte das APIs JavaScript incorporadas ao navegador.
 * 
 * * NÃO SÃO APENAS PAGINAS WEB
 * 
 * Outra coisa que vale mencionar a esse ponto é que eventos não são exclusivos ao JavaScript — muitas linguagens de programação possuem algum tipo de modelo de evento, e a maneira que elas funcionam irão, frequentemente, diferenciar-se da maneira que funciona em JavaScript. De fato, o modelo de evento no JavaScript para web pages difere dos outros modelos de evento do próprio JavaScript quando usados em outros ambientes.
*/