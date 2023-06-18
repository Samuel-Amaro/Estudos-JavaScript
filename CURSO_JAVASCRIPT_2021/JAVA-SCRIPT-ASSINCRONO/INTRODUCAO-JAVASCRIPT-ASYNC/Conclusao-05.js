/**
 * * CONCLUSÃO
 * 
 *  Em sua forma mais básica, o JavaScript é uma linguagem síncrona, bloqueadora e de thread único, na qual apenas uma operação pode estar em andamento por vez. Mas os navegadores da web definem funções e APIs que nos permitem registrar funções que não devem ser executadas de forma síncrona e, em vez disso, devem ser invocadas de forma assíncrona quando ocorre algum tipo de evento (a passagem do tempo, a interação do usuário com o mouse ou a chegada de dados pela rede, por exemplo). Isso significa que você pode permitir que seu código faça várias coisas ao mesmo tempo sem interromper ou bloquear seu thread principal.
 * 
 * Se queremos executar o código de forma síncrona ou assíncrona, dependerá do que estamos tentando fazer.
 * 
 * Há momentos em que queremos que as coisas carreguem e aconteçam imediatamente. Por exemplo, ao aplicar alguns estilos definidos pelo usuário a uma página da web, você deseja que os estilos sejam aplicados o mais rápido possível.
 * 
 * Se estivermos executando uma operação que leva tempo, no entanto, como consultar um banco de dados e usar os resultados para preencher os modelos, é melhor empurrar isso para fora do thread principal e concluir a tarefa de forma assíncrona. Com o tempo, você aprenderá quando faz mais sentido escolher uma técnica assíncrona em vez de uma síncrona
*/