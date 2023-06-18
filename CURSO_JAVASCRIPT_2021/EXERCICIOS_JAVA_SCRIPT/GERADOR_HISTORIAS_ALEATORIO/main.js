/**
 * EXERCICIO 01 DO CURSO DE JAVA SCRIPT DA MDN
*/

//seleciona o elemento <input> pelo seu id
const nomePersonalizado = document.getElementById('nomepersonalizado');
//seleciona o elemento <button> pela sua classe
const botaoGerador = document.querySelector('.gerador');
//seleciona um elemento <p> pela sua classe
const historia = document.querySelector('.historia');

/**
 * função de valor aleatorio de array
 * que recebe um vetor e retorna um dos itens armazenados dentro do vetor aleatoriamente.
 * @param {*} array 
 * @returns 
 */
function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

/**
 * string que vão ser as historias 
*/
const textoHistoria = 'It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.';

//arrays que costroem historia aleatoriamente
const insertX = ['Willy the Goblin','Big Daddy','Father Christmas'];

const insertY = ['the soup kitchen','Disneyland','the White House'];

const insertZ = ['spontaneously combusted','melted into a puddle on the sidewalk','turned into a slug and crawled away'];


//registrando o manipulador de eventos no elemento, o manipulador respodenra quando o elemento <button> for clicado
botaoGerador.addEventListener('click', result);


//função java script que manipula um ouviente de eventos
//essa função nomeada manipula um ouvinte de evento, e o responde quando e acionado
function result() {

  //obtem historia
  let novaHistoria = textoHistoria; 
  
  //obtem trechos aletorios da historia
  let xItem = randomValueFromArray(insertX);

  let yItem = randomValueFromArray(insertY);

  let zItem = randomValueFromArray(insertZ);
  
  //substitui uma substring dentro de uma string por outra substring
  novaHistoria = novaHistoria.replace(':insertx:',xItem);
  
  novaHistoria = novaHistoria.replace(':inserty:',yItem);

  novaHistoria = novaHistoria.replace(':insertz:',zItem);

  //se o usuario tiver preenchido o input nome
  if(nomePersonalizado.value !== '') {
    const nome = nomePersonalizado.value;
    //subtitui o nome Bob na string pelo nome do usuario
    novaHistoria = novaHistoria.replace('Bob',nome);
  }

  //se o elemento <input> estiver com o atributo checked ativado
  if(document.getElementById("uk").checked) {
    //gera conteudo para a historia
    const weight = Math.round(300 * 0.0714286) + ' stone';
    const temperature =  Math.round((94 - 32) * (5 / 9)) + ' centigrade';
    novaHistoria = novaHistoria.replace('94 fahrenheit',temperature);
    novaHistoria = novaHistoria.replace('300 pounds',weight);
  }

  //setando a historia no elemento <p>
  historia.textContent = novaHistoria;
  //tornando o elemento <p> visivel no documento HTML5
  historia.style.visibility = 'visible';
}












