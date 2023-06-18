
//seleciona o elemento <img> com class(.displayed-img);
const displayedImage = document.querySelector('.displayed-img');

//seleciona o elemento <div> com class(.thumb-bar);
const thumbBar = document.querySelector('.thumb-bar');

//seleciona o elemento <button>
const btn = document.querySelector('button');

//seleciona o elemento <div> com class(.overlay);
const overlay = document.querySelector('.overlay');

/*LOOPING ATRAVÉS DAS IMAGENS*/

//armazena os caminhos de cada imagen
const pathImages = ['images/pic1.jpg','images/pic2.jpg','images/pic3.jpg','images/pic4.jpg','images/pic5.jpg'];

for(var i = 0; i < pathImages.length; i++) {
    //cria um elemento <img>
    const newImage = document.createElement('img');

    //adiciona um atributo ao elemento <img>, esse atributo indica o caminho ate a imagen,
    //e seta o valor do atributo, que esta em cada iteração do array
    newImage.setAttribute('src',pathImages[i]);

    //adicona o elemento <img> como filho de um elemento <div>
    thumbBar.appendChild(newImage);

    //registrando um manipulador de evento para cada imagen
    newImage.onclick = function(e) {
        //obtem o src do elemento <img> e o passa para outro elemento <img>
        //o atributo target do objeto de evento(e) faz referencia ao elemento em que o evento acabou de acontecer
        //neste caso foi um elemento <img>
        displayedImage.src = e.target.src;
    }
}

/*escrevendo um manipulador que executa o botão escurecer/clarear*/
//registrando um manipulador de eventos no elemento <button>
btn.onclick = function(e) {
    //se o elemento <button> que acabou de ter um evento registrado e ocorrido, tiver a classe dark
    if(e.target.getAttribute('class') === 'dark') {     
        //muda o valor do atributo da classe
        btn.setAttribute('class','light');
        //muda o texto do botão
        btn.textContent = 'Lighten';
        //muda a cor de fundo do elemento <div> que faz um efeito de mudança de cor no elemento
        overlay.style.backgroundColor = "rgba(0,0,0,0.5)";
    }else{
        //se a classe não for dark
        btn.setAttribute('class','dark');
        btn.textContent = 'dark';
        overlay.style.backgroundColor = "rgba(0,0,0,0)";
    }
}
