/**
 * * INDEXANDO PROPRIEDADES DE OBJETOS
 * 
 *  Você pode se referir a uma propriedade de um objeto pelo seu nome de propriedade ou pelo seu índice ordinal. Se você inicialmente definiu uma propriedade pelo nome, você deve sempre se referir a ela pelo nome, e se você inicialmente definir uma propriedade por um índice, você deve sempre se referir a ela pelo índice.
 * 
 * Esta restrição se aplica quando  você cria um objeto e suas propriedades com uma função construtora (como fizemos anteriormente com o objeto do tipo carro) e quando você define propriedades individuais explicitamente (por exemplo, meuCarro.cor = "vermelho"). Se você inicialmente definir uma propriedade do objeto com um índice, tal como meuCarro[5] = "25 mpg", você pode subsequentemente referir-se á propriedade somente como meuCarro[5].
 * 
 * A exceção a esta regra é a objetos refletidos a partir do HTML, como o conjunto de formulários. Você pode sempre se referir a objetos nessas matrizes por seu número de ordem (com base em onde eles aparecem no documento) ou seu nome (se definido). Por exemplo, se a segunda tag <FORM> em um  documento tem um atributo NAME de "meuFormulario", você pode se referir ao formulário como document.forms[1] ou document.forms["meuFormulario"] ou document.meuFormulario.
*/