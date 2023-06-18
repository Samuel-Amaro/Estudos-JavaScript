/**
 * * COMPARANDO OBJETOS
 * 
 *  Em JavaScript, objetos são um tipo de referência. Dois objetos distintos nunca são iguais, mesmo que tenham as mesmas propriedades. Apenas comparando o mesmo objeto de referência com ele mesmo produz verdadeiro.
*/

//DUAS VARIAVEIS, DOIS OBJETOS DIFERENTES COM AS MESMAS PROPRIEDADES

//um objeto criado com o inicializador de objeto
var fruta = {
    name: "apple"
};

//um objeto criado com o inicializador de objeto
var frutaBear = {
    name: "apple"
};

if((fruta == frutaBear) === false) {
    console.log("NÃO IGUAIS OPERADOR == : FALSE");
}else if((fruta === frutaBear) === false){
    console.log("NÃO IGUAIS OPERADOR === : FALSE");
}

//DUAS VARIAIVEIS, UM UNICO OBJETO

//cria objeto por meio do inicializador de objeto
var fruit = {
    name : "apple"
};

var fruitbear = fruit; // atribuir referência de objeto de fruta a fruitbear

//Aqui, frutas e ursos estão apontando para o mesmo objeto
if(fruit == fruitbear) {
    console.log("IGUAIS DE MESMA CLASS OS OBJETOS SÃO DE REFERENCIA == : TRUE");
}else if(fruit === fruitbear){
    console.log("IGUAIS COM O OPERADOR === : TRUE");
}