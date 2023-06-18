
//obtem referencia ao elemento button
let botaoCalcular = document.querySelector('button');

//registrando um manipulador de eventos, quando o botão for clicado
botaoCalcular.onclick = function() {
  let peso = document.querySelector('#peso');   
  let altura = document.querySelector('#altura');  
  let pResult = document.querySelector('#resultado');

  if(peso.value === '' || altura.value === '') {
      pResult.textContent = "Por favor Digite Seu Peso e sua altura!"
  }else{
    let resultado = peso.value / (altura.value * altura.value);
    if(resultado < 18.5) {
        pResult.textContent = 'Seu IMC: ' + resultado.toFixed(2) + ' Classificação: Peso Baixo';
    }else if(resultado >= 18.5 && resultado < 24.9){
        pResult.textContent = 'Seu IMC: ' + resultado.toFixed(2) + ' Classificação: Peso Normal';
    }else if(resultado >= 25.0 && resultado < 29.9) {
        pResult.textContent = 'Seu IMC: ' + resultado.toFixed(2) + ' Classificação: Sobrepeso';
    }else if(resultado >= 30.0 && resultado < 34.9) {
        pResult.textContent = 'Seu IMC: ' + resultado.toFixed(2) + ' Classificação: Obesidade(Grau I)';
    }else if(resultado >= 35.0 && resultado < 39.9) {
        pResult.textContent = 'Seu IMC: ' + resultado.toFixed(2) + ' Classificação: Obesidade Severa(Grau II)';
    }else if(resultado >= 40.0) {
        pResult.textContent = 'Seu IMC: ' + resultado.toFixed(2) + ' Classificação: Obesidade Mórbida(Grau III)';
    }else{
        pResult.textContent = 'Este IMC gerado não esta de acordo com nosso mapeamento';
    }  
  }
};

