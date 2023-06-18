// assumimos que este código é executado no nível superior, dentro de um módulo


//Nos navegadores modernos, await no nível superior funciona bem, quando estamos dentro de um módulo. 
//faz uma solicitação de rede ao url fornecido e retorna um promise resolvida com objeto response
//o await faz o JS esperar até que a promise seja resolvida e retorna seu resultado com o objeto response
//aqui o JS suspende a execução da function async até que a promise seja resolvida, e então a retoma a execução com o resultado da promise
//isso não trava o mecanismo JS, enquanto isso pode fazer outras coisas
let response = await fetch('/article/promise-chaining/user.json');
//espera ler os dados em formato json e retornar uma promise resolvida com um objeto json
let user = await response.json();

//mostra objeto json
console.log(user);