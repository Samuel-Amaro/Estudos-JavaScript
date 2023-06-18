/**
 * * ASYNCHRONOUS(ASSINCRONO) JAVA-SCRIPT
 * 
 *  Por razões esclarecidas anteriormente (e.g. relativas ao blocking), muitas funcionalidades de APIs da Web agora usam código assíncrono na execução, especialmente aquelas que acessam ou buscam algum tipo de recurso de um dispositivo externo, como pegar um arquivo da rede, acessar um banco de dados e retornar dados dele, acessar uma stream de uma web cam, ou transmitir uma tela para um dispositivo VR.
 * 
 * Por que é tão difícil trabalhar com isso usando códigos síncronos? Vamos dar uma olhada em um exemplo rápido. Quando você pega uma imagem de um servidor, você não pode retornar o resultado imediatamente. Isso significa que o pseudocódigo a seguir não poderia funcionar:
*/

//A Fetch API fornece uma interface para buscar recursos (por exemplo, em toda a rede). Parecerá familiar para qualquer pessoa que tenha usado XMLHttpRequest, porém a nova API oferece um conjunto de recursos mais poderoso e flexível.
let resposta = fetch('myImage.png');
let blob = resposta.blob();
//Mostra sua imagen na UI

/**
 * Isso acontece por que você não sabe quanto tempo a imagem levará para ser baixada, então quando você executar a segunda linha, ela vai resultar em um erro (provalvelmente sempre) porque a  resposta não estará disponível ainda. Você precisa que o seu código espere até que a resposta seja retornada antes de fazer algo com ela.
 * 
 * Existem dois tipos principais de estilo de código assíncrono que você encontrará no código JavaScript, as callbacks com um estilo old-school e código em um estilo das promises mais recente. Nas seções abaixo, revisaremos cada um deles por vez.
*/