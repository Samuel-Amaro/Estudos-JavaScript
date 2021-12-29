let form = document.querySelector(".form");
let message = document.querySelector(".message");
let conteinerImg = document.querySelector(".conteiner-img");
let img = document.createElement('img');
conteinerImg.appendChild(img);

form.addEventListener("submit", function(event) {
    event.preventDefault();
    let ano = document.querySelector("#ano");
    let sexo = document.querySelectorAll(".radio-sexo");
    console.log(`ano '${ano.value}' : sexo '${sexo}'`);
    verificar(ano.value, sexo);
});

function verificar(ano, sexo) {
    let data = new Date();
    let anoAtual = data.getFullYear();
    if(ano >= anoAtual || ano == 0) {
       window.alert("[ERRO] Verifique os dados e tente novamente!"); 
    }else{
        let idade = anoAtual - ano;
        let genero = '';
        //sexo masculino
        if(sexo[0].checked) {
            genero = 'homen';
            //criaça
            if(idade >= 0 && idade < 10) {  
                img.src = "imagens/foto-bebe-m.png";
                img.alt = 'Imagen';
            }else if(idade < 21) {
                //jovem
                img.src = "imagens/foto-jovem-m.png";
                img.alt = 'Imagen';
            }else if(idade < 50) {
                //adulto
                img.src = "imagens/foto-adulto-m.png";
                img.alt = 'Imagen';
            }else{
                //idoso
                img.src = "imagens/foto-idoso-m.png";
                img.alt = 'Imagen';
            }
        }else if(sexo[1].checked){
            genero = 'mulher';
            //criaça
            if(idade >= 0 && idade < 10) {  
                img.src = "imagens/foto-bebe-f.png";
                img.alt = 'Imagen';
            }else if(idade < 21) {
                //jovem
                img.src = "imagens/foto-jovem-f.png";
                img.alt = 'Imagen';
            }else if(idade < 50) {
                //adulto
                img.src = "imagens/foto-adulto-f.png";
                img.alt = 'Imagen';
            }else{
                //idoso
                img.src = "imagens/foto-idoso-f.png";
                img.alt = 'Imagen';
            }
        }
        message.textContent = `Detectamos ${genero} de ${idade} anos`;
    }
}