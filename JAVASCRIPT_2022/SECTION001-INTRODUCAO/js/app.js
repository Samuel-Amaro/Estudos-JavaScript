/**
 * * INLCUIR UM ARQUIVO JAVASCRIPT EXTERNO

    - Para incluir um JavaScript de um arquivo externo:

 * 
 * Primeiro, crie um arquivo cuja extensão seja .j seg, app.js e coloque-o na js subpasta. Observe que js não é necessário colocar o arquivo JavaScript na pasta, mas é uma boa prática.
 * 
 * Em seguida, use a URL para o arquivo de código-fonte JavasScript no srcatributo do <script>elemento.
 * 
*/

alert('Hello, Word!');

/**
 * Observe que você pode carregar um arquivo JavaScript de um servidor remoto. Isso permite que você sirva JavaScript de vários domínios, por exemplo, rede de distribuição de conteúdo (CDN) para acelerar a página.
 * 
 *  Quando você tem vários arquivos JavaScript em uma página, o mecanismo JavaScript interpreta os arquivos na ordem em que aparecem. Veja o seguinte exemplo:
 * 
 * O mecanismo JavaScript interpretará service.js os app.js arquivos e em sequência. Ele conclui a interpretação do service.jsarquivo primeiro, antes de interpretar o app.js arquivo.
 * 
 * Para a página que inclui muitos arquivos JavaScript externos, a página em branco é mostrada durante a fase de renderização da página. Para evitar isso, você inclui o arquivo JavaScript antes da </body>tag, conforme mostrado neste exemplo:
 * 
 * * OS ATRIBUTOS ASYNC E DEFER
 * 
 * Para alterar como o código JavaScript é carregado e executado, você usa um dos dois atributos do <script> elemento async e defer
 * 
 * Esses atributos têm efeito apenas nos arquivos de script externos. O async atributo, se visível, instrui o navegador da web a executar o arquivo JavaScript de forma assíncrona, se possível. O async atributo não garante que os arquivos de script sejam executados na ordem em que aparecem.
 * 
 * O app.js arquivo pode ser executado antes do service.js arquivo, portanto, você deve garantir que não haja dependência entre eles.
 * 
 * O defer atributo, se visível, solicita que o navegador da Web execute o arquivo de script após a análise do documento.
 * 
 * Mesmo que coloquemos o <script>elemento na <head>seção, o script aguardará que o navegador receba a tag de fechamento <html>para iniciar a execução.
*/