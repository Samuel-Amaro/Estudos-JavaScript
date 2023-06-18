/**
 * *  DEFININDO GETTERS AND SETTERS
 * 
 * Um getter é um método que obtém o valor de uma propriedade específica. Um setter é um método que define o valor de uma propriedade específica. Você pode definir getters e setters em qualquer objeto de núcleo pré-definido ou objeto definido pelo usuário que suporta a adição de novas propriedades. A sintaxe para definir getters e setters usa a sintaxe literal do objeto.
 * 
 * O código a seguir ilustra como getters e setters podem funcionar para um objeto o definido pelo usuário.
*/

var obj = {
    a: 7,
    get getA() {
        return this.a + 1;
    },
    set setA(x) {
        this.a = x / 2;
    }
};

console.log(obj.a); //7
console.log(obj.getA); //8
obj.setA = 50;
console.log(obj.a); //25

/**
 * As propriedades do objeto obj são:
 
  - obj.a — um número
  - obj.getA - um getter que retorna obj.a + 1
  - obj.setter - um setter que define o valor de obj.a pela metade do valor definido para obj.setter

 * 
 * Observe que nomes de função de getters e setters definidos em um objeto literal usando "[gs]et property()" (ao contrário de __define[GS]etter__ ) não são os próprios nomes dos getters, embora a sintaxe [gs]et propertyName(){ } possa  induzir ao erro e você pensar de outra forma. Para nomear uma função getter ou setter usando a sintaxe "[gs]et property()", define explicitamente um função nomeada programaticamente usando Object.defineProperty (ou o legado fallback Object.prototype.__defineGetter__).
 * 
 * O código a seguir ilustra como getters e setters podem extender o protótipo Date para adicionar a propriedade ano para todas as instâncias de classes Date pré-definidas. Ele usa os métodos getFullYear e setFullYear existentes da classe Date para suportar o getter e setter da propriedade ano.
 * 
 * Estes estados definem um getter e setter para a propriedade ano:
*/

//var Date: DateConstructor
//Permite armazenamento básico e recuperação de datas e horas.
//obtem o prototipo da class Construtora Date
//obtem um prototypo de date, onde pode modificar as propriedades das definições desse objeto
var d = Date.prototype;

//(método) ObjectConstructor.defineProperty (o: any, p: PropertyKey, atributos: PropertyDescriptor & ThisType <any>): qualquer(Any)
//Adiciona uma propriedade a um objeto ou modifica os atributos de uma propriedade existente.
//@param o - Objeto no qual adicionar ou modificar a propriedade. Pode ser um objeto JavaScript nativo (ou seja, um objeto definido pelo usuário ou um objeto integrado) ou um objeto DOM.
//@param p - o nome da propriedade.
//Atributos @param - Descritor da propriedade. Pode ser para uma propriedade de dados ou uma propriedade de acessador.
Object.defineProperty(d, "year", {
    get: function(){
        return this.getFullYear()
    },
    set: function(y) {
        this.setFullYear(y)
    }
});

/**
 * Estes estados usam o getter e setter em um objeto Date:
*/

var now = new Date();
console.log(now.year); //2000
now.year = 2001; //987617605170
console.log(now);

/**
 * A principio, getters e setters podem ser ou
 
    - definidos usando objetos inicializadores, ou
    - adicionar posteriormente para qualquer objeto a qualquer tempo usando um método getter ou setter adicionado

 *
 * Ao definir getters e setters usando objetos inicializadores tudo o que você precisa fazer é prefixar um método getter com get e um método setter com set. Claro, o método getter não deve esperar um parâmetro, enquanto o método setter espera exatamente um parâmetro (novo valor para definir). Por exemplo:
 * 
*/

var o = {
    a: 7,
    get b() {
        return this.a + 1;
    },
    set c(x) {
        this.a = x / 2;
    }
};

/**
 * Getters e setters podem também ser adicionado em um objeto a qualquer hora depois da criação usando o método Object.defineProperties. O primeiro parâmetro deste método é o objeto no qual você quer definir o getter ou setter. O segundo parâmetro é um objeto cujos nomes das propriedades são os nomes getter ou setter, e cujo valores das propriedades são objetos para definição de funções getter ou setter. Aqui está um exemplo que define o mesmo getter e setter usado no exemplo anterior:
*/

var o = {
    a:0
}

Object.defineProperty(o, {
    "b": {
        get: function() {
            return this.a + 1;
        }
    },
    "c": {
        set: function(x) {
            this.a = x / 2;
        }
    }
});

o.c = 10 // Roda o setter, que associa 10 / 2 (5) para a propriedade 'a'
console.log(o.b) //roda o getter, que yields a + 1 ou 6

/**
 * Escolher qual das duas formas depende do seu estilo de programação e tarefa na mão. Se você já vai para o inicializador de objeto ao definir um protótipo, provavelmente a maior parte do tempo escolherá a primeira forma. Esta forma é mais compacta e natural. No entanto, se você precisar adicionar getters e setters mais tarde - porque você não escreveu o protótipo ou objeto particular - então a segunda forma é a única possível. A segunda forma provavelmente melhor representa a natureza dinâmica do JavaScript - mas pode tornar o código difícil de ler e entender. 
*/