/**
 * * FUNÇÃO ESCOPO AND CONFLITOS
 * 
 *  vamos falar um pouco sobre scope — um conceito muito importante quando lidamos com funções. Quando você cria uma função, as variáveis e outras coisas definidas dentro da função ficam dentro de seu próprio e separado escopo, significando que eles estão trancados a parte em seu próprio compartimento, inacesível de dentro de outras funções ou de código fora das funções.
 * 
 * O mais alto nível fora de todas suas funções é chamado de escopo global. Valores definidos no escopo global são acessíveis em todo lugar do código.
 * 
 * JavaScript é configurado assim por várias razões — mas principalmente por segurança e organização. Algumas vezes você não quer que variáveis sejam acessadas de todo lugar no código — scripts externos que você chama de algum outro lugar podem iniciar uma bagunça no seu código e causar problemas porque eles estão usando os mesmos nomes de variáveis que em outras partes do código, provocando conflitos. Isso pode ser feito maliciosamente, ou só por acidente.
 * 
 * Ambas as funções que você quer chamar são chamadas greeting(), mas você só pode acessar o arquivo second.js da função greeting()  — Ele é aplicado no HTML depois no código fonte, então suas variáveis e funções sobrescrevem as de first.js.
*/