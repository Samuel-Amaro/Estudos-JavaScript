window.addEventListener("load", function(event) {
    inicializaHora();
});

function inicializaHora() {
    let message = document.querySelector(".message");
    let img = document.querySelector(".imagen-hora");
    let comprimento = document.querySelector(".comprimento");
    let body = document.querySelector("body");
    let data = new Date();
    let hora = data.getHours();
    let minuto = data.getMinutes();
    //manhã
    if(hora >= 6 && hora <= 12) {
        message.innerHTML = "Hora do dia: " + hora + ":" + minuto;
        comprimento.innerHTML = "Bom dia!";
        img.src = 'imagens/manha-media.jpg';
        img.alt = "Imagen da manhã";
        body.style.backgroundColor = "#584e33";
    }else if(hora >= 13 && hora <=18) {
        message.innerHTML = "Hora do dia: " + hora + ":" + minuto;
        comprimento.innerHTML = "Boa tarde!";
        img.src = "imagens/tarde-grande-2-media.jpg";
        img.alt = "Imagen da tarde";
        body.style.backgroundColor = "#ff9502";
    }else if(hora >= 18 && hora <= 23) {
        message.innerHTML = "Hora do dia: " + hora + ":" + minuto;
        comprimento.innerHTML = "Boa noite!";
        img.src = "imagens/noite-media.jpg";    
        img.alt = "Imagen da noite";
        body.style.backgroundColor = "#23254d";   
    }else{
        message.innerHTML = "Hora do dia: " + hora + ":" + minuto;
        comprimento.innerHTML = "Boa madrugada!";
        img.src = "imagens/noite-media.jpg";    
        img.alt = "Imagen da noite";
        body.style.backgroundColor = "#23254d";
    }
}

