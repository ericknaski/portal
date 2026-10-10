//                                                 - AULA 6 -

// Variáveis do tipo CONST não podem ser redeclaradas e nem mutáveis, ou seja, não podem ter seu valor alterado.
const mensagem2 = "olá, de novo";
console.log(mensagem2);

// mensagem2 = "olá, de novo e de novo"; // erro, pois a variável é do tipo CONST

// Variáveis do tipo VAR podem ser redeclaradas e mutáveis, ou seja, podem ter seu valor alterado.
mensagem3 = "oi";
console.log(mensagem3);

var mensagem3 = "olá, de novo e de novo";
console.log(mensagem3);

var mensagem3 = "tchau"; // redeclarando a variável mensagem3
console.log(mensagem3); // valor da variável mensagem3 alterado de "olá, de novo e de novo" para "tchau"

mensagem3 = "até logo"; // alterando o valor da variável mensagem3
console.log(mensagem3); // valor da variável mensagem3 alterado de "tchau" para "até logo"

// redeclarar pode gerar erro, utilizando o VAR perdemos esse controle
