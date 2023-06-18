/**
 * * CLASSES ECMASCRIPT 2015
 * 
 * O ECMAScript 2015 introduz a sintaxe de classe em JavaScript como uma maneira de escrever classes reutilizáveis usando uma sintaxe mais fácil e mais limpa, que é mais semelhante a classes em C ++ ou Java. Nesta seção, converteremos os exemplos Pessoa e Professor da herança protótipo para as classes, para mostrar como é feito.
 * 
 * NOTA: Essa forma moderna de escrever classes é suportada em todos os navegadores modernos, mas ainda vale a pena saber como a herança prototípica subjacente, caso você trabalhe em um projeto que exija suporte a um navegador que não suporte essa sintaxe (mais notavelmente o Internet Explorer).
 * 
 * Vejamos uma versão reescrita do exemplo Person, estilo de classe:
 * 
*/


//definindo uma classe usando a sintaxe ECMASCRIPT 2015

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
 * A declaração class indica que estamos criando uma nova classe. Dentro deste bloco, definimos todos os recursos da classe:
 
    - O método constructor() define a função construtora que representa nossa classe Person.
    - saudacao() e adeus() são métodos de classe. Quaisquer métodos que você deseja associar à classe são definidos dentro dela, após o construtor. Neste exemplo, usamos template literals em vez de concatenação de string para facilitar a leitura do código.

 *
 * Agora podemos instanciar instâncias de objeto usando o operador new, da mesma maneira que fizemos antes:
*/

//intanciando estancias de objetos da classe Pessoa, usando o operador new

let han = new Pessoa('Han', 'Solo', 25, 'masculino', ['Smuggling']);
han.saudacao(); //return 'Ei eu sou han';

let leia = new Pessoa('Leia', 'Organa', 19, 'feminino', ['Government']);
leia.adeus(); // return 'Leia deixou o predio tchau agora';

/**
 * Nota: Sob o capô, suas classes estão sendo convertidas em modelos de herança protótipos — isso é apenas açúcar sintático. Mas tenho certeza que você concordará que é mais fácil escrever.
 * 
 * * HERANÇA COM SINTAXE DE CLASSE
 * 
 *  Acima nós criamos uma classe para representar uma pessoa. Eles têm uma série de atributos que são comuns a todas as pessoas; Nesta seção, criaremos nossa classe especializada Teacher, tornando-a herdada de Person usando a sintaxe de classe moderna. Isso é chamado de criação de uma subclasse ou subclasse.
 * 
 * Para criar uma subclasse, usamos a palavra-chave extends para informar ao JavaScript a classe na qual queremos basear nossa classe.
 * 
 * 
*/

//COMO FAZER HERANÇA USANDO A SINTAXE ECMASCRIPT 2015 E USANDO A PALAVRA CHAVE EXTENDS

class Professor extends Pessoa{
    //construtor de Professor, definindo propriedades de um professor, que são as propriedades de um Pessoa genericas, so que add as suas especializações
    constructor(primeiroNome, ultimoNome, idadeP, sexoP, interessesP, AssuntoP, grauP) {
    //propriedade nome e uma outra classe, com propriedades    
    this.nome = {
        primeiroNome,
        ultimoNome
    };
    //propriedades
    this.idade = idadeP;
    this.sexo = sexoP;
    this.interesses = interessesP;
    //especialização de propriedade de um professor
    this.assunto = AssuntoP;
    this.grau = grauP;
    }
}

/**
 * Podemos tornar o código mais legível definindo o operador super() como o primeiro item dentro do constructor(). Isso chamará o construtor da classe pai e herdará os membros que especificarmos como parâmetros de super(), desde que sejam definidos lá: 
*/

class Professor extends Pessoa{
    //construtor de Professor, definindo propriedades de um professor, que são as propriedades de um Pessoa genericas, so que add as suas especializações
    constructor(primeiroNome, ultimoNome, idadeP, sexoP, interessesP, AssuntoP, grauP) {
        //chamando o metodo construtor da classe pai(super classe, ou classe base), e passando os paramentros que ja são definidos la, e essas propriedades vão ser herdadas por essa classe(classe filha, ou subClasse)
        super(primeiroNome, ultimoNome,  idadeP, sexoP, interessesP);
    //especialização de propriedade de um professor
    this.assunto = AssuntoP;
    this.grau = grauP;
    }
}

/**
 * Quando instanciamos instâncias de objeto Professor , podemos agora chamar métodos e propriedades definidos em Professr e Pessoa, como seria de esperar:
 * 
 *  
*/

//instanciando instancia de objetos da classe Professor

let snape = new Professor('Seerus', 'Snape', 58, 'masculino', ['Potions', 'Dark arts'], 5);
snape.saudacao(); //return 'Ei eu sou Severus'
snape.adeus(); //return 'Severus deixou o prédio. Tchau agora!';
snape.idade; //58
snape.assunto; //Dark arts

/**
 * Como fizemos com Professor, poderíamos criar outras subclasses de Person para torná-las mais especializadas sem modificar a classe base 
*/
