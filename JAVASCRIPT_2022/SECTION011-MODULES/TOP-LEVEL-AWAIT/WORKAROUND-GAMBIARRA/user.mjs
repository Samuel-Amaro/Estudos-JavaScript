/**
 * Declara um arquivo chamado user.mjs que é um modulo
 * 
 * Este módulo ira exportar uma variavel usando a palavra chave export 
*/

//define uma variavel no contexto global mas não a inicializa
let users;

//usando a IIFE-ASYN, que e uma imediated invokade function express assincrona, que tem em seu corpo uma await, que espera a busca por dados usando a fetch API
//usa a IIFE-ASYN por causa que uma await so pode ser usada dentro de um function assincrona
//usando a palavra-chave export vamos exporta a promise retorna quando a IIFE-ASYNC e invoca pela unica vez, e retorna a promisse, ao ser invoca a export ira retorna a promise, para outros modulos
//a default palavra chave diz que um padrão pode ser uma varaivel, uma function, um objeto, classe
//aqui iremos fazer uma exportação padrão quando a IIFE-ASYNC for invoca
export default(async () => {
    const url = 'https://jsonplaceholder.typicode.com/users';
    //a await palavra-chave espera a fetch retorna a promise resolvida com um valor, a awairt espera a promisse estabelecer seu estado e, o resultado resolvida com valor, ou erro por algum motivo e passado para o response
    //executa faz uma chamda a API
    const response = await fetch(url);
    //aqui a await espera a definção do estado da promise retornada por json, resolver com valor ou dar um erro
    //o resultado da promise resolvida inicializa a varaivel users
    users = await response.json();
})();

//usando a palvra-chave export para exportar a variavel users, a varaivel ja foi definida, exportamos a varaivel para que outros modulos a utilizem
export { users };