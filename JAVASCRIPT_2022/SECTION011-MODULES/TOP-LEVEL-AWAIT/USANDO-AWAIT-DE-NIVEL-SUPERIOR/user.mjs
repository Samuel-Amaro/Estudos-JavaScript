/**
 * Declara um arquivo chamado user.mjs que é um modulo
 * 
 * Este módulo ira exportar uma variavel usando a palavra chave export 
*/

//define uma variavel no contexto global mas não a inicializa
let users;


//usando o await de nivel superior
//aqui podemos usar a await palavra-chave sem precisar colocar um instrução dentro de um funçaõ assincrona, o modulo ira se comportar como uma function assincrona

const url = 'https://jsonplaceholder.typicode.com/users';
//a await palavra-chave espera a fetch retorna a promise resolvida com um valor, a await espera a promisse estabelecer seu estado e, o resultado resolvida com valor, ou erro por algum motivo e passado para o response
//executa faz uma chamda a API
const response = await fetch(url);
//aqui a await espera a definção do estado da promise retornada por json, resolver com valor ou dar um erro
//o resultado da promise resolvida inicializa a varaivel users
users = await response.json();

//usando a palvra-chave export para exportar a variavel users, a varaivel ja foi definida, exportamos a varaivel para que outros modulos a utilizem
export { users };