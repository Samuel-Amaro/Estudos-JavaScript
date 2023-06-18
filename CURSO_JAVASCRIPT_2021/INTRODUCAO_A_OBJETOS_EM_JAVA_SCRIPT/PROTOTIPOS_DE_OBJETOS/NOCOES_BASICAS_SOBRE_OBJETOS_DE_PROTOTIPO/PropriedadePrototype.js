/**
 * * PROPRIEDADE PROTOTYPE: ONDE OS MENBROS HERDADOS SÃO DEFINIDOS
*/

//função construtora de classe com paramentros obrigatorios para a definição da classe, essa função construtora e a maneira de representar uma classe no JS
function PessoaCompleta(primeiro, ultimo, idade, sexo, interesses) {
    //a propriedade nome do obj e um objeto
    this.nome = {
        'primeiro' : primeiro,
        'ultimo' : ultimo
    };
    //propriedade do obj 
    this.idade = idade;
    //propriedade do obj
    this.sexo = sexo,
    //propriedade do obj
    this.interesses = interesses;
    //metodo do obj
    this.bio = function() {
        alert(this.nome.primeiro + ' ' + this.nome.ultimo + 'e ' + this.idade + 'anos. E gosto de ' + this.interesses[0] + ' e ' + this.interesses[1] + '.');
    };
    //metodo do obj
    this.saudacao = function() {
        alert('Ei! Eu sou ' + this.nome.primeiro + '.');
    };
}

/**
 * 
 * Então, onde estão as propriedades e os métodos herdados definidos? Se você observar a página de referência do  Object, verá, à esquerda, um grande número de propriedades e métodos — muito mais do que o número de membros herdados que vimos disponíveis no objeto pessoaTeste1. Alguns são herdados e outros não — por que isso acontece?
 * 
 * Como mencionado acima, os herdados são os definidos na propriedade  prototype (você poderia chamá-lo de um subespaço de nomes) — ou seja, aqueles que começam com Object.prototype., e não os que começam com apenas Object. O valor da propriedade prototype é um objeto, que é basicamente um bucket para armazenar propriedades e métodos que queremos que sejam herdados por objetos mais abaixo na cadeia de protótipos.
 * 
 * Portanto, Object.prototype.watch(), Object.prototype.valueOf(), etc., estão disponíveis para qualquer tipo de objeto que herda de Object.prototype, incluindo novas instâncias de objeto criadas a partir do construtor Person().
 * 
 * Object.is(), Object.keys(), e outros membros não definidos dentro do bloco prototype não são herdados por instâncias de objetos ou tipos de objetos que herdam de Object.prototype. Eles são métodos / propriedades disponíveis apenas no próprio construtor Object().
 * 
 * Você pode conferir as propriedades de protótipo existentes para si mesmo — volte ao nosso exemplo anterior e tente inserir o seguinte no console JavaScript:
*/

PessoaCompleta.prototype; //{constructor: ƒ}constructor: ƒ PessoaCompleta(primeiro, ultimo, idade, sexo, interesses)arguments: nullcaller: nulllength: 5name: "PessoaCompleta"prototype: {constructor: ƒ}__proto__: ƒ ()[[FunctionLocation]]: ExemploOrientacaoObjetosJavaScript.html:23[[Scopes]]: Scopes[1]__proto__: Objectconstructor: ƒ Object()hasOwnProperty: ƒ hasOwnProperty()isPrototypeOf: ƒ isPrototypeOf()propertyIsEnumerable: ƒ propertyIsEnumerable()toLocaleString: ƒ toLocaleString()toString: ƒ toString()valueOf: ƒ valueOf()__defineGetter__: ƒ __defineGetter__()__defineSetter__: ƒ __defineSetter__()__lookupGetter__: ƒ __lookupGetter__()__lookupSetter__: ƒ __lookupSetter__()get __proto__: ƒ __proto__()set __proto__: ƒ __proto__()

/**
 * A saída não mostrará muito porque não definimos nada no protótipo do nosso construtor personalizado! Por padrão, o  prototype de um construtor sempre começa vazio. Agora tente o seguinte:
*/

Object.prototype; 

/**
 * Você verá um grande número de métodos definidos na propriedade prototype  do  Object, que estão disponíveis em objetos que herdam  Object, como mostrado anteriormente. 
 * 
 * Importante: A propriedade prototype é uma das partes com o nome mais confuso do JavaScript — você pode pensar que this aponta para o objeto de protótipo do objeto atual, mas não (esse é um objeto interno que pode ser acessado por __proto__, lembra?) . Em vez disso, prototype é uma propriedade que contém um objeto no qual você define os membros que deseja herdar.
*/