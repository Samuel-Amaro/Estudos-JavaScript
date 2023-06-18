/**
 * * MÉTODOS DE CLASSE ASYNC/AWAIT
 * 
 *  Como uma nota final antes de prosseguirmos, você pode até adicionar asyncmétodos de classe / objeto na frente para fazê-los retornar promessas e awaitpromessas dentro deles
*/

//classe Pessoa
class Person {
    //construtor da classe com paramentros de inicialização obrigatorios
    constructor(first, last, age, gender, interests) {
      this.name = {
        first,
        last
      };
      this.age = age;
      this.gender = gender;
      this.interests = interests;
    }
  
    //metodo da classe assincrono que retorna um promise, essa promisse e retorna quando tiver sido resolvida, o await bloqueia todo o restante do codigo até que a primisse seja resolvida
    async greeting() {
      return await Promise.resolve(`Hi! I'm ${this.name.first}`);
    };
  
    farewell() {
      console.log(`${this.name.first} has left the building. Bye for now!`);
    };
}

//criando uma instancia do objeto Person
let han = new Person('Han', 'Solo', 25, 'male', ['Smuggling']);

/**
 * O método da primeira classe agora pode ser usado mais ou menos assim:
*/

//usando a promisse retornada pelo metodo asincrono
han.greeting().then(
    //mostra o valor resolvido e retornado pela promessa no console
    console.log
);