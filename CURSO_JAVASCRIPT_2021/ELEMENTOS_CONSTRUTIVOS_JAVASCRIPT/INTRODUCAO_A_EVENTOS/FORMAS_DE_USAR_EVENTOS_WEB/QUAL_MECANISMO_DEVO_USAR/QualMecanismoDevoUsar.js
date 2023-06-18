/**
 * * QUAL MECANISMO DEVO USAR
 * 
 *  Dos três mecanismos, você definitivamente não deve usar os atributos do manipulador de eventos HTML — estas são desatualizadas e más práticas, como mencionado acima.
 * 
 * Os outros dois são relativamente intercambiáveis, pelo menos para usos simples:
 
    - As propriedades do manipulador de eventos têm menos poder e opções, mas melhor compatibilidade entre navegadores (sendo suportado desde o Internet Explorer 8). Você provavelmente deve começar com estes como você está aprendendo.
    -
    - Eventos DOM Nível 2 (addEventListener(), etc.) são mais poderosos, mas também podem se tornar mais complexos e menos bem suportados (suportados desde o Internet Explorer 9). Você também deve experimentá-los e tentar usá-los sempre que possível.

 * 
 * As principais vantagens do terceiro mecanismo são que você pode remover o código do manipulador de eventos, se necessário, usando removeEventListener(), e você pode adicionar vários listeners do mesmo tipo aos elementos, se necessário. Por exemplo, você pode chamar addEventListener('click', function() { ... }) em um elemento várias vezes, com diferentes funções especificadas no segundo argumento. Isso é impossível com as propriedades do manipulador de eventos porque qualquer tentativa subseqüente de definir uma propriedade sobrescreverá as anteriores, por exemplo:
 * 
 * 
*/

element.onclick = function1;
element.onclick = function2;
etc.