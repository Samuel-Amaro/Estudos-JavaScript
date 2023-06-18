// setup canvas

//obtem referencia ao elemento <canvas>
const canvas = document.querySelector('canvas');
//canvas.getContext() -> fornece um contexto no qual pode começar a desenha. a variavel resultando e o objeto que representa diretamente a área de desenho da tela
const ctx = canvas.getContext('2d');

//largura e altura do elemento <canvas>
const width = canvas.width = window.innerWidth;
const height = canvas.height = window.innerHeight;

//função que gera um valor aleatorio, dentro de um intervalo fornecido, retorna o valor

function random(min, max) {
  const num = Math.floor(Math.random() * (max - min + 1)) + min;
  return num;
}

/**
 * função construtora(representando uma class no JS) 
 * 
 * função construtora que define propriedades de uma bola, necessita de parametros obrigatorios para ser instanciada
 * @param {*} x  - cordenada horizontal
 * @param {*} y  - cordenada vertical
 * @param {*} velX - velocidade horizontal
 * @param {*} velY  - velocidade vertical
 * @param {*} color - cada bola recebe uma cor
 * @param {*} size - cada bola recebe um tamanho - este sera o seu raio, em pixels 
 */
function Ball(x, y, velX, velY, color, size) {
    //classificando propriedades de uma bola
    this.x = x;
    this.y = y;
    this.velX = velX;
    this.velY = velY;
    this.color = color;
    this.size = size;
}

//metodos de uma classe(metodos de uma função construtora, metodos de intancia)
//add o metodo draw() ao prototype do Ball()
//uma função anonima, que vai ser representada por draw, na instancia
Ball.prototype.draw = function() {
    //declarando que queremos desenha uma forma no papel
    ctx.beginPath();
    //definindo a cor da forma
    ctx.fillStyle = this.color;
    //traça uma forma de arco no papel
    ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
    //"terminar de desenhar o caminho que começamos com beginPath(), e preencher a área que ocupa com a cor que especificamos anteriormente em fillStyle."
    ctx.fill();
}

/**
 * add uma metodo de instancia a função construtora.
 * 
 * este metodo e para começar a mover a bola, um metodo de atualização de algum tipo
 * 
 * As primeiras quatro partes da função verificam se a bola atingiu a borda da tela. Se tiver, invertemos a polaridade da velocidade relevante para fazer a bola viajar na direção oposta
 */
Ball.prototype.update = function() {
  //Se a coordenada x é maior que a largura da tela (a bola está saindo da borda direita).
  if((this.x + this.size) >= width) {
    this.velX = - (this.velX);
  }
  //Se a coordenada x é menor que 0 (a bola está saindo da borda esquerda).
  if((this.x - this.size) <= 0) {
    this.velX = - (this.velX);
  }
  //Se a coordenada y é maior que a altura da tela (a bola está saindo da borda inferior).
  if((this.y + this.size) >= height) {
    this.velY = - (this.velY);
  }
  //Se a coordenada y é menor que 0 (a bola está saindo da borda superior).
  if((this.y - this.size) <= 0) {
    this.velY = - (this.velY);
  }
  //adicionam o valor velX à coordenada x, e o valor velY à coordenada y
  this.x += this.velX;
  this.y += this.velY;
}

//ADD ALGUMA DETECÇÃO DE COLISÃO
//add uma metodo de instancia a função construtora.

Ball.prototype.collisionDetect = function() {
  //Para cada bola, precisamos checar todas as outras bolas para ver se ela colidiu com a bola atual. Para fazer isso, abrimos outro loop for para percorrer todas as bolas no array balls[].
  for(let j = 0; j < balls.length; j++) {
      //Imediatamente dentro de nosso loop for, usamos uma instrução  if para verificar se a bola atual em loop é a mesma bola que estamos verificando no momento. Não queremos verificar se uma bola colidiu consigo mesma! Para fazer isso, verificamos se a bola atual (ou seja, a bola cujo método collisionDetect está sendo invocado) é a mesma que a bola de loop (ou seja, a bola que está sendo referenciada pela iteração atual do loop for no collisionDetect método). Nós então usamos ! para negar a verificação, para que o código dentro da instrução if seja executado apenas se eles não forem iguais.
      if(!(this === balls[j])) {
        const dx = this.x - balls[j].x;
        const dy = this.y - balls[j].y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        //Em seguida, usamos um algoritmo comum para verificar a colisão de dois círculos. Estamos basicamente verificando se alguma das áreas dos dois círculos se sobrepõe.
        //Se uma colisão for detectada, o código dentro da instrução if interna será executado
        //Neste caso, estamos apenas definindo a propriedade color de ambos os círculos para uma nova cor aleatória
        if(distance < this.size + balls[j].size) {
          balls[j].color = this.color = 'rgb(' + random(0, 255) + ',' + random(0, 255) + ',' + random(0, 255) + ')';
        }
      }
  }
}

//ANIMANDO A BOLA

//um array que armazenara todas as bolas
let balls = [];

/**
 * Todos os programas que animam as coisas geralmente envolvem um loop de animação, que serve para atualizar as informações no programa e renderizar a visualização resultante em cada quadro da animação; esta é a base para a maioria dos jogos e outros programas.
*/
function loop() {
  //Define a cor de preenchimento da tela como preto semitransparente e desenha um retângulo com a cor em toda a largura e altura da tela, usando fillRect()
  ctx.fillStyle = 'rgba(0, 0, 0, 0.25)';
  ctx.fillRect(0, 0, width, height);

  while(balls.length < 25) {
        let size = random(10, 20);
        //Cria uma nova instância de nossa  Ball() usando valores aleatórios gerados com a nossa função  random() 
        let ball = new Ball(
            //posição bola sempre desenhado pelo menos uma largura de bola
            //longe da borda da tela, para evitar erros de desenho
            random(0 + size, width - size),
            random(0 + size, height - size),
            random(-7, 7),
            random(-7, 7),
            'rgb(' + random(0, 255) + ',' + random(0, 255) + ',' + random(0, 255) + ')', size);
        //então push()para o final de nosso array de bolas
        balls.push(ball);
  }

  //Faz um loop em todas as balls no array de bolas e executa a função draw() e update() de cada bola para desenhar cada uma delas na tela, depois faz as atualizações necessárias para a posição e a velocidade no tempo para o próximo quadro
  for(let i = 0; i < balls.length; i++) {
    balls[i].draw();
    balls[i].update();
    //Você também precisa chamar esse método em cada quadro da animação.
    balls[i].collisionDetect();
  }

  //Executa a função novamente usando o método requestAnimationFrame() — quando esse método é executado constantemente e passa o mesmo nome de função, ele executará essa função um número definido de vezes por segundo para criar uma animação suave. Isso geralmente é feito de forma recursiva — o que significa que a função está chamando a si mesma toda vez que é executada, portanto, ela será executada repetidas vezes.
  requestAnimationFrame(loop);
}

//chama a função loop() : que vai iniciar a animação
loop();


