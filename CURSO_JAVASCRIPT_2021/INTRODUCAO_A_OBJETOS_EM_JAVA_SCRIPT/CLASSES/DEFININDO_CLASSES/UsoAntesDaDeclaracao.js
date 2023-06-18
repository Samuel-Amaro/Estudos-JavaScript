/**
 * * USO ANTES DA DECLARAÇÃO(LANÇAMENTO)
 * 
 *  Uma diferença importante entre declarações de funções das declarações de classes, é que  declararações de  funções são hoisted(LANÇAMENTO) e declarações de classes não são. Primeiramente deve declarar sua classe para só então acessá-la, pois do contrário o código a seguir irá lançar uma exceção: ReferenceError:
*/

const p = new Retangulo(); //Erro de refência(ReferenceError)

class Retangulo { }