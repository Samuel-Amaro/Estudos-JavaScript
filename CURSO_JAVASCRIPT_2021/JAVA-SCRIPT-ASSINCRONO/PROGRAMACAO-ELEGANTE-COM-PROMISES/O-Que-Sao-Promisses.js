/**
 * * O QUE SÃO PROMESSAS(PROMISSES)
 * 
 *  Nós vimos apenas um resumo do que são Promises até agora, a partir daqui iremos explorar mais a fundo sobre elas.
 * 
 * Essencialmente, uma promessa é um objeto que representa um estado intermediário de uma operação - na verdade, uma promessa e um resultado de algum tipo que será retornado em algum ponto no futuro. Não há nenhuma garantia de exatamente quando a operação será concluída e o resultado será devolvido, mas não é uma garantia de que quando o resultado estiver disponível, ou a promessa falhar, o código que você fornecer será executado, a fim de fazer outra coisa com um resultado bem-sucedido ou para lidar com um caso de falha.
 * 
 * Geralmente, você está menos interessado na quantidade de tempo que uma operação assíncrona vai demorar para voltar o seu resultado (a não ser, claro, leva muito muito tempo!), E mais interessado em ser capaz de responder a ela que estão sendo devolvidos, sempre que é. E, claro, é bom que não bloqueie o resto da execução do código.
 * 
 * Um dos compromissos mais comuns que você terá com promessas é com APIs da web que retornam uma promessa. Vamos considerar um aplicativo hipotético de bate-papo por vídeo. O aplicativo possui uma janela com uma lista dos amigos do usuário, e clicar em um botão ao lado de um usuário inicia uma chamada de vídeo para esse usuário.
 * 
 * O manipulador desse botão faz chamadas getUserMedia() para obter acesso à câmera e ao microfone do usuário. Uma vez que getUserMedia() precisa garantir que o usuário tenha permissão para usar esses dispositivos e perguntar ao usuário qual microfone usar e qual câmera usar (ou se deve ser uma chamada apenas de voz, entre outras opções possíveis), ele pode bloquear até não apenas todos dessas decisões foram tomadas, mas também a câmera e o microfone foram acionados. Além disso, o usuário pode não responder imediatamente a essas solicitações de permissão. Isso pode levar muito tempo.
 * 
 * Uma vez que a chamada para getUserMedia() é feita a partir do thread principal do navegador, todo o navegador é bloqueado até getUserMedia() retornar! Obviamente, essa não é uma opção aceitável; sem promessas(promisses), tudo no navegador se torna inutilizável até que o usuário decida o que fazer com a câmera e o microfone. Portanto, em vez de esperar pelo usuário, habilitar os dispositivos escolhidos e retornar diretamente o MediaStream para o fluxo criado a partir das fontes selecionadas, getUserMedia() retorna um promise que é resolvido com o MediaStream assim que estiver disponível.
 * 
 * O código que o aplicativo de bate-papo por vídeo usaria pode ser parecido com este:
*/

function handleCallButton(evt) {
    setStatusMessage("Calling...");
    navigator.mediaDevices.getUserMedia({video: true, audio: true})
      .then(chatStream => {
        selfViewElem.srcObject = chatStream;
        chatStream.getTracks().forEach(track => myPeerConnection.addTrack(track, chatStream));
        setStatusMessage("Connected");
      }).catch(err => {
        setStatusMessage("Failed to connect");
      });
}

/**
 * Esta função começa usando uma função chamada setStatusMessage()para atualizar uma exibição de status com a mensagem "Chamando ...", indicando que uma chamada está sendo tentada. Em seguida getUserMedia(), ele chama , pedindo um fluxo que tenha faixas de vídeo e áudio, então, uma vez obtido, configura um elemento de vídeo para mostrar o fluxo que vem da câmera como uma "autovisualização", então pega cada uma das faixas do fluxo e adiciona-os ao WebRTC RTCPeerConnection representando uma conexão com outro usuário. Depois disso, a tela de status é atualizada para dizer "Conectado".
 * 
 * Se getUserMedia()falhar, o catchbloco é executado. Isso é usado setStatusMessage()para atualizar a caixa de status para indicar que ocorreu um erro.
 * 
 * O importante aqui é que a getUserMedia()chamada retorne quase imediatamente, mesmo que o stream da câmera ainda não tenha sido obtido. Mesmo que a handleCallButton()função já tenha retornado ao código que a chamou, quando getUserMedia()terminar de funcionar, ela chamará o manipulador fornecido. Contanto que o aplicativo não presuma que o streaming começou, ele pode simplesmente continuar em execução.
*/