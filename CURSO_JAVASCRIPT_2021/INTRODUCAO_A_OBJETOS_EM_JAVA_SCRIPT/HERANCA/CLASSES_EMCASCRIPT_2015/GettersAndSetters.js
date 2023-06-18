//EXEMPLOS USANDOS

class Pessoa{
    //construtor da classe, que define propriedades(atributos) que precisam ser inicializados
    constructor(primeiroNome, ultimoNome, idade, sexo, interesses) {
        //propriedades da classe

        //a propriedades nome, e um outra classe
        this.nome = {
            primeiroNome,
            ultimoNome
        };
        this.idade = idade;
        this.sexo = sexo;
        this.interesses = interesses;
    }

    //metodos da classe
    saudacao() {
        console.log(`Ei! Eu 'sou ${this.nome.primeiroNome}`);
    };

    adeus() {
        console.log(`${this.nome.primeiroNome} deixou o prédio. Tchau agora! `)
    };
}

/**
 * * GETTERS AND SETTERS
 * 
 *  Pode haver momentos em que queremos alterar os valores de um atributo nas classes que criamos ou não sabemos qual será o valor final de um atributo. Usando o exemplo Professor, podemos não saber o assunto que o professor ensinará antes de criá-lo, ou o assunto pode mudar entre os termos.
 * 
 * Podemos lidar com essas situações com getters e setters.
 * 
 * Vamos melhorar a classe Professor com getters e setters. A aula(classe) começa da mesma forma que foi a última vez que olhamos para ela.
 * 
 * Os getters e setters trabalham em pares. Um getter retorna o valor atual da variável e seu setter correspondente altera o valor da variável para o que ela define.
 * 
 * A classe Teacher modificada é assim:
*/

//a classe Professor herda propriedades e metodos da classe Pessoa, atraves da herança

class Professor extends Pessoa{
    //construtor de Professor, definindo propriedades de um professor, que são as propriedades de um Pessoa genericas, so que add as suas especializações
    constructor(primeiroNome, ultimoNome, idadeP, sexoP, interessesP, AssuntoP, grauP) {
        //chamando o metodo construtor da classe pai(super classe, ou classe base), e passando os paramentros que ja são definidos la, e essas propriedades vão ser herdadas por essa classe(classe filha, ou subClasse)
        super(primeiroNome, ultimoNome,  idadeP, sexoP, interessesP);
    //especialização de propriedade de um professor
    //o underline antes do nome da propriedade e uma convenção para que se crie um vlaor separado no qual armazenar essa propriedade
    this._assunto = AssuntoP;
    this.grau = grauP;
    }

    //metodos da classe que são acessores 
    //de atributos da classe
    //os getters e setters da propriedade assunto 

    get assunto() {
        return this._assunto;
    }

    set assunto(novoAssunto) {
        this._assunto = novoAssunto;
    }
}

//instanciando instancia de objetos da classe Professor

let snape = new Professor('Seerus', 'Snape', 58, 'masculino', ['Potions', 'Dark arts'], 5);
snape.saudacao(); //return 'Ei eu sou Severus'
snape.adeus(); //return 'Severus deixou o prédio. Tchau agora!';

/**
 * Em nossa classe acima, temos um getter e setter para a propriedade assunto. Usamos  _  para criar um valor separado no qual armazenar nossa propriedade de nome. Sem usar essa convenção, obteríamos erros toda vez que chamássemos get ou set. Neste ponto:
 
    - Para mostrar o valor atual da propriedade _subject do objeto snape , podemos usar o método getter snape.subject.

    - Para atribuir um novo valor à propriedade _assunto , podemos usar o método setter snape.assunto ="new value".

 *
 * O exemplo abaixo mostra os dois recursos em ação:
 * 
*/

//Verifique o valor padrão
console.log(snape.assunto); //returns dark arts

//alterar o valor
snape.assunto = "Balloon animals"; //Set _assunto para "Animais de balão"

//Verifique novamente e veja se ele corresponde ao novo valor
console.log(snape.assunto); // get return "Balloon animals";

