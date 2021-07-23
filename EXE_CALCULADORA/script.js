let botoesTemp = document.querySelectorAll(".btn-visor");
var teclasPermitidas = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, '+', '-', '/', '*', ',', '(', ')', '%','='];

/**
 * essa função mostra o operando no visor
 * @param {*} operando : valor que vai ser setado para o visor
 */
function mostraValorVisor(operando) {
    //SELECIONA O ELEMENTO <div>
    let visor = document.querySelector('.visor');
    //SELECIONA O ELEMENTO FILHO <input type="text"> do ELEMENTO <div>
    let input = document.querySelector("input");
    for (let index = 0; index < teclasPermitidas.length; index++) {
        //se as teclas digitas forem as permitidas e não digitar espaço
        if(teclasPermitidas[index] == operando && operando != " ") {
            input.value = input.value + operando;
        }else{
            //não mostra no visor
        }  
    }
}

/**
 * essa função tira cada ultimo valor do visor
 * @param {*} conteudo 
 * @returns 
 */
function apagaValorVisor(conteudo) {
    //string em java script e imutavel(não pode modificar a original)
    let tamanhoConteudo = conteudo.length;
    let str2 = conteudo.substring(0, tamanhoConteudo - 1);
    //console.log("Teste: ", str2);
    return str2;
}

//registra o evento de pressionar qualquer tecla
document.addEventListener('keydown', (e) => {
    //se a tecla pressionado for a Backspace(apagar)
    if(e.key === 'Backspace') {
        //console.log("Apagou conteudo");
        let input = document.querySelector("input");
        let conteudo = input.value; //input.value;
        let conteudoModificado = apagaValorVisor(conteudo);
        input.value = conteudoModificado;
    }else{
        mostraValorVisor(e.key);
        console.log(e.key);
    }
});



