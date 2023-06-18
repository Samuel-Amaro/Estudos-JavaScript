/**
 * * JAVASCRIPT BOOLEAN VS BOOLEAN
 * 
 * Considere este exemplo:
*/

//declara um varaivel e a inicializa com um valor booleano primitivo
let completed = true;
//cria uma instancia de objeto do tipo de referencia Boolean passando um valor boolean primitivo
let active = new Boolean(false);

/**
 * Primeiro, active é um objeto para que você possa adicionar uma propriedade ao bar objeto:
*/

//add uma propriedade ao objeto active e o valor da propriedade e um valor primitivo do acive objeto
active.primitiveValue = active.valueOf();
console.log(`active.primitiveValue = ${active.primitiveValue}`); //false

/**
 * No entanto, você não pode fazer isso com a variável booleana primitiva como a completed variável:
*/

completed.name = 'primitive';
console.log(`completed.name = ${completed.name}`); //undefined

/**
 * Em segundo lugar, o typeof de um objeto booleano retorna object, enquanto o  typeof de um valor booleano primitivo retorna boolean.
*/

console.log(`typeof completed = ${typeof completed}`); //boolean
console.log(`typeof active = ${typeof active}`); //object

/**
 * Terceiro, ao aplicar o   instanceof operador a um Boolean objeto, ele retorna true. No entanto, ele retornará false se você aplicar o instanceof operador a um valor booleano.
*/

console.log(`foo instanceof Boolean = ${foo instanceof Boolean}`); //false
console.log(`bar instanceof Boolean = ${foo instanceof Boolean}`); //true

/**
 *  É uma boa prática nunca usar o Boolean objeto porque ele criará muitas confusões, especialmente quando usado em uma expressão. Por exemplo:
*/

let falseObj = new Boolean(false);
if(falseObj) {
    console.log('weird part of the Boolean object');
}

/**
 * Primeiro, crie falseObj como um Boolean wrapper de objeto para o false valor.
 * 
 * Em segundo lugar, use falseObj na   if declaração. Porque falseObj é um objeto, e o mecanismo JavaScript o força para um valor booleano de true. Como resultado, a instrução dentro do if bloco é executada.
 * 
 * A tabela a seguir resume as diferenças entre o JavaScript Boolean e boolean:
 
    Operator: typeof;
    boolean: boolean;
    Boolean: object;
    ------------------------
    Operator: instanceOf Boolean;
    boolean: false;
    Boolean: true;

 * 
 * É recomendado que você use a Boolean()função para converter um valor de um tipo diferente em um tipo booleano, mas você nunca deve usar o Boolean como um objeto wrapper de um valor booleano primitivo.
 * 
 * Neste tutorial, você aprendeu sobre o Boolean objeto JavaScript e as diferenças entre o Boolean objeto e boolean o tipo primitivo.
*/