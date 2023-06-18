/** 
 * * window.requestAnimationFrame ()
 * 
 * O método  window.requestAnimationFrame() fala para o navegador que deseja realizar uma animação e pede que o navegador chame uma função específica para atualizar um quadro de animação antes da repintura próxima (repintura). O método tem como argumento uma callback que deve ser invocado antes de repaint.
 * 
 * Nota: Um callback de rotina deve chamar requestAnimationFrame()se quiser animar outro quadro na próxima repintar.
 * 
 * Deve-se chamar esse método sempre que estiver pronto para atualizar a animação na tela. 
 * 
 *  Isso irá requisitar que a função de animação seja chamada antes que o navegador realize uma repintura próxima. O número de callbacks é normalmente 60 por segundo, mas geralmente acompanha a taxa de atualização do display na maioria dos navegadores, como recomenda a W3C.
 * 
 * SINTAXE:
    
    window.requestAnimationFrame(callback);

 * 
 * PARAMENTROS
 * 
 * callback : Parâmetro especificando uma função a ser chamada quando chegar a hora de atualizar a animação para a próxima repintura. O callback possui um único argumento, um DOMHighResTimeStamp (en-US) , que indica a hora atual Performance.now()para quando  requestAnimationFramecomeçar a disparar callbacks.
 * 
 * Valor de retorno
 * 
 * Um valor inteiro  long, a id da requisição, que se identifica unicamente à entrada na lista de callbacks. Esse é um valor não-zero, mas não deve-se assumir mais nada sobre esse valor. Esse valor pode ser passado para window.cancelAnimationFrame() (en-US) para cancelar a requisição da atualização do callback.
 * 
 * * REQUEST ANIMATION FRAME()
 * 
 * requestAnimationFrame() é uma função de loop especializada criada para executar animações com eficiência no navegador. Ela é basicamente a versão moderna de setInterval() — ela executa um bloco de código específico antes que o navegador renove o display, permitindo que uma animação seja executada em um framerate adequado independente do ambiente em que está sendo executada.
 * 
 * Ela foi criada em resposta à problemas ocorridos com setInterval(), que por exemplo não roda em uma taxa de quadros otimizada para o dispositivo, e às vezes diminui os frames, continua a rodar mesmo se a guia não esiver ativa ou se a animação for rolada para fora da página, etc.
 * 
 * O método toma como argumentos uma callback a  ser invocada antes da renovação. Esse é o padrão geral que você verá usado em:
*/

function draw() {
    //O código de desenho vai aqui
    requestAnimationFrame(draw);
}

draw();

/**
 * A ideia é definir uma função em que sua animação é atualizada (e.g. seus spritas se movem, a pontuação é atuializada, dados são recarregados, etc). Depois, você inicia o processo. No final do bloco da função você chama  requestAnimationFrame() com a referência da função passada como parâmetro, e isso instrui o navegador a chamar a função de novo na próxima renovação. Isso é executado continuamente, já que o código está chamando requestAnimationFrame() recursivamente.
 * 
 * * QUAL A VELOCIDADE DA SUA ANIMAÇÃO ?
 * 
 * A suavidade da sua animação é diretamente dependente na taxa de quadros da sua animação e é medida em quadros por segundo (fps). A suavidade da animação depende diretamente da taxa de quadros da animação e é medida em quadros por segundo (fps). Quanto maior esse número, mais suave será a sua animação, até certo ponto.
 * 
 * Já que a maioria das tela tem uma taxa de atualização de 60Hz, a frame rate mais rápida que você pode ter é de 60fps quando trabalhando com web browsers. No entanto, mais frames significa mais processamento, o que pode ser causar uma queda de quadros e travamento.
 * 
 * Se você tem um monitos com uma taxa de atualização de 60Hz e você quer atingir 60FPS você tem pelo menos 16.7 milissegundos (1000 / 60) para executar sua animação em cada frame. Isso é um lembrete de que você vai precisar estar atento à quantidade de código que você vai tentar executar em cada iteração do loop de animação.
 * 
 * requestAnimationFrame() sempre tenta ficar o mais próximo possível de 60 FPS. Às vezes, isso não é possível — se você tem uma animação bem complexa e você está executando ela em um computador lento, sua frame rate será menor. Em todos os casos, o requestAnimationFrame() sempre vai fazer o melhor que pode com o que ele tem dísponivel.
 * 
 * * COMO O REQUESTANIMATIONFRAME() SE DIFERENCIA DE SETINTERVAL() E SETTIMEOUT() ?
 * 
 * 
 * Vamos falar um pouco sobre como o método requestAnimationFrame() se diferencia dos outros métodos vistos anteriormente. Olhando com o código anterior:
*/

function draw() {
    //O código de desenho vai aqui
    requestAnimationFrame(draw);
}

draw();

/**
 *  Vamos ver isso usando o setInterval():
*/
function draw() {
    //O codigo de desenho vai aqui
}

setInterval(draw, 17);

/**
 * Como foi dito anteriormente, você não especifica um intervalo de tempo para requestAnimationFrame(). O método se executa o mais rápido e suave o possível nas condições atuais. O navegador também não perde tempo executando uma animação se ela está fora da tela por algum motivo, etc.
 * 
 * setInterval(), por outro lado, exige que um  intervalo de tempo seja especificado. Nós chegamos ao valor final de 17 por meio da formula 1000 milliseconds / 60Hz, e depois arredondamos o resultado. Arredondar é uma boa ideia; se você tivesse arredondado para baixo, o navegador pode tentar executar a animação mais rápido do que 60  FPS, e não faria nenhuma diferênça na suavidade da animação de qualquer forma. Como foi dito antes, 60Hz é a taxa de atualização padrão.
 * 
 * * INCLUINDO UM TIMESTAMP
 * 
 * A callback passada para a função requestAnimationFrame() pode ser dada um parâmetro támbem: um valor timestamp, que representa o tempo desde que o  requestAnimationFrame() começou a rodar.
 * 
 * Isso é útil, permite que você execute coisas em  um tempo específico e em passo constante, independente do quão rápido ou lento é o seu dispositivo. O padão geral que você usaria se parece um pouco com isso:
*/

let tempoInicial = null;

function draw(timestamp) {
    if(!tempoInicial) {
        tempoInicial = timestamp;
    }
    tempoAtual = timestamp - tempoInicial;

    //Faça algo com base na hora atual
    requestAnimationFrame(draw);
}

draw();


/**
 * * LIMPANDO UMA CHAMADA requestAnimationFrame()
 * 
 * Limpar uma requestAnimationFrame()chamada pode ser feito chamando o cancelAnimationFrame()método correspondente . (Observe que o nome da função começa com "cancelar", não "limpar" como nos métodos "definir ...".) 
 * 
 * Basta passar o valor retornado pela requestAnimationFrame()chamada para cancelar, que você armazenou na variável rAF:
*/

cancelAnimationFrame(rAF);