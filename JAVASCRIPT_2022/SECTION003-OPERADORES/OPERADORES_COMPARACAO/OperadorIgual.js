var var1 = 3;
var var2 = 4;

//OPERADOR : igual(==)
//DESCRIÇÃO: Retorna verdadeiro caso os operandos sejam iguais.
        
if(3 == var1) {
    console.log("Operador igual. operandos são iguais. 3 == var1 e de mesmo tipo.");
}
if("3" == var1) {
        console.log("Operador igual. \"3\" == var1. operandos são iguais. mas não são de mesmo tipo");
}
if(3 == '3') {
                console.log("Operador igual. 3 == \'3\'. operandos são iguais. mas não são de mesmo tipo.");
}
