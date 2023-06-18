/**
 * *  FORMATTING NUMBERS(FORMATAÇÃO DE NUMEROS)
 * 
 * Para formatar um número com um número especificado de casas decimais, você usa o  toFixed() método.
 * 
 * O toFixed() método aceita um argumento que indica quantos pontos decimais devem ser usados.
*/

//sintaxe
//objetoNumber.toFixed(casasDecimais);

/**
 * O toFixed() método retorna a string correspondente do número usando a notação de ponto fixo. Aqui está um exemplo.
*/

//declara uma variavel e a inicializa com um valor primitivo numerico
var distancia = 19.006;
//formato a saida do numero com o metodo toFixed() dizendo que so pode possuir duas cadas decimais apos o .
console.log(`Numero ${distancia} com duas casas decimais apos (.) = ${distancia.toFixed(2)}`); //19.01

distancia = 19.004;
console.log(`Numero ${distancia} com duas casas decimais apos (.) = ${distancia.toFixed(2)}`); //19.00

/**
 * É importante observar que os navegadores da web podem usar métodos de arredondamento de maneira diferente. Portanto, você deve ter cuidado ao usar o toFixed() método, especialmente para aplicativos que lidam com valores monetários.
 * 
 * Para formatar um número em notação eletrônica, use o toExponential() método mostrado no exemplo a seguir
*/

var r = 10, y = 100, z = 1000;

//formata o numero primitivo 10 em notação eletronica, sendo que o x não e do tipo number, e um valor primitivo, que ao chamar o metodo converte o tipo primitivo para number temporariamente
console.log(`${r} em e-log = ${r.toExponential()}`); //"1e+1"
console.log(`${y} em e-log = ${y.toExponential()}`); //"1e+2"
console.log(`${z} em e-log = ${z.toExponential()}`); //"1e+3"

/**
 * Para obter uma representação de string de um objeto numérico com a precisão especificada, você usa o toPrecision()método.
*/

//sintaxe
//objetoNumerico.toPrecision(precisao);

/** 
 * O precision argumento determina o número de dígitos significativos.
 * 
 * O toPrecision() método retorna a representação de string de um  Number objeto em notação exponencial ou ponto fixo arredondado para dígitos significativos de precisão.
 * 
 * Observe que se você omitir o argumento de precisão, o toPrecision() método se comportará como o toString() método. Veja os seguintes exemplos:
 *
*/

//declara um variavel e a inicializa com um tipo primitivo
let var1 = 9.12345;

//aqui o metodo toPresicion() retorna a representação de string de um numero por causa que omiti o parametro precisao
console.log(`${var1} - var1.toPrecision() =  ${var1.toPrecision()}`); //'9.12345'

//aqui o metodo toPrescion pega o valor 9.12345 e retorna em formato string, mostra so 4 digitos os mais significativos
console.log(`${var1} - var1.toPrecision(4) =  ${var1.toPrecision(4)}`); //'9.123'

//aqui o metodo toPrescion pega o valor 9.12345 e retorna em formato string, mostra so 3 digitos os mais significativos
console.log(`${var1} - var1.toPrecision(3) =  ${var1.toPrecision(3)}`); //'9.12'

//aqui o metodo toPrescion pega o valor 9.12345 e retorna em formato string, mostra so 2 digitos os mais significativos
console.log(`${var1} - var1.toPrecision(2) =  ${var1.toPrecision(2)}`); //'9.1'

//aqui o metodo toPrescion pega o valor 9.12345 e retorna em formato string, mostra so 1 digitos os mais significativos
console.log(`${var1} - var1.toPrecision(1) =  ${var1.toPrecision(4)}`); //'9'

/**
 * A notação eletrônica pode ser retornada em alguns casos, por exemplo:
*/

var1 = 123.5;

//retorna a notação eletronica de 123.5
console.log(`${var1} em e-log = ${var1.toPrecision(2)}`); "1.2e+2"