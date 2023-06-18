/**
 * * O OBJECT TIPO
 * 
 *  Em JavaScript, um objeto é uma coleção de  propriedades , onde cada propriedade é definida como um par de valores-chave.
 * 
 * O exemplo a seguir define um objeto vazio usando a forma literal do objeto:
*/

//criando um objeto vazio usando a forma literal
let objetoVazio = {};

/**
 * O exemplo a seguir define o person objeto com duas propriedades: 
*/

//criando um objeto com duas propriedades, os nomes de propriedades se for um identificador valido não precisa de aspas simples, mas se o identificador for não valido usar apas
let pessoa = {
    primeiroNome : 'John',
    ultimoNome : 'Doe'
};

/**
 * Um nome de propriedade de um objeto pode ser qualquer string. Você pode usar aspas ao redor do nome da propriedade se não for um identificador JavaScript válido.
 * 
 * Por exemplo, se você tiver uma propriedade first-name, deve usar as aspas como "first-name" mas firstName é um identificador JavaScript válido, portanto, as aspas são opcionais.
 * 
 * Se você tiver mais de uma propriedade, use uma vírgula ( ,) para separar os pares.
 * 
 * O JavaScript permite que você aninhe objetos conforme mostrado no exemplo a seguir:
*/

//criando um objeto que possui 5 propriedades, com identificadores validos, sem precisar de usar aspas simples para eles
let contato = {
    primeiroNome: 'John', //propriedade
    ultimoNome: 'Doe', //propriedade
    email: 'john.doe@example.com', //propriedade
    fone: '(408)-555-9999', //propriedade
    endereco:{ //propriedade
        construcao: '4000', //propriedade
        rua: 'San Jose', //propriedade
        estado: 'CA', //propriedade
        pais: 'USA' //propriedade
    }
};

/**
 * O contact objecto consiste em  firstName, lastName, email, phone, e address propriedades.
 * 
 * A addresspropriedade em si é também um objectivo que consiste em building,   street, city, state, e country propriedades.
 * 
 * Você pode acessar as propriedades de um objeto usando duas notações: a notação de ponto (.) E a notação tipo array ([]).
 * 
 * O exemplo a seguir usa a notação de ponto ( .) para acessar as propriedades firstName e  lastName do contact objeto.
*/

console.log("contato.primeiroNome = " + contato.primeiroNome);
console.log("contato.ultimoNome = " + contato.ultimoNome);

/**
 * Para obter a propriedade de um objeto aninhado, você usa o seguinte formulário:
*/

console.log("contato.endereco.pais = " + contato.endereco.pais);

/**
 * Se você se referir a uma propriedade inexistente, obterá um undefined valor da seguinte forma:
*/

console.log("Acessando propriedade inexistente = " + contato.age); //undefined

/**
 * O exemplo a seguir usa a notação semelhante a uma array para acessar as propriedades email e phone do contact objeto.
*/

console.log("contato[\'fone\'] = " + contato['fone']); //'(408)-555-9999'
console.log("contato[\'email\'] = " + contato['email']); //'john.doe@example.com'

/**
 * Além da forma literal do objeto, você pode usar a new palavra-chave para criar um novo objeto da seguinte maneira:
*/

let cliente = new Object();

/**
 * E atribua um valor à propriedade do objeto:
*/

cliente.nome = 'ABC Inc.';

/**
 * Em JavaScript, todos os objetos são derivados do Object tipo. Discutiremos mais o Object tipo no próximo tutorial.
*/