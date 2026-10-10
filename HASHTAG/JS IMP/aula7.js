//                                                 - AULA 7 -

// = Redeclarações

// Só podemos redeclarar variáveis do tipo VAR, as variáveis do tipo LET e CONST não.

// = Reatribuições - Mutabilidade

// Variáveis do tipo LET e VAR podem ter seu valor alterado, ou seja, são mutáveis.
// Já as variáveis do tipo CONST não podem ter seu valor alterado, ou seja, são imutáveis.

// = Hoisting - é o comportamento padrão do JavaScript de mover declarações para o topo do escopo atual.

// Variáveis do tipo VAR são içadas, ou seja, podem ser declaradas depois de serem utilizadas.
console.log(variavelVar);
var variavelVar = "usando hosting com VAR";
console.log(variavelVar);

// Como o JS entende;
var segundaVariavelVar;
console.log(variavelVar);
variavelVar = "usando hosting com VAR";
console.log(variavelVar);

// Variáveis do tipo LET e CONST não são içadas, ou seja, não podem ser declaradas depois de serem utilizadas.

// = Visibilidade - é a capacidade de uma variável ser acessada em diferentes partes do código.

{
  instruções;
} // bloco de código - assim são chamadas as chaves { } que delimitam um bloco de código, ou seja, um conjunto de instruções que serão executadas juntas.
function nomeDaFuncao() {
  instruções;
} // função - assim são chamadas as chaves { } que delimitam uma função, ou seja, um conjunto de instruções que serão executadas quando a função for chamada.

// Tudo o que se faz no bloco só pode ser acessado dentro do bloco.
// Variáveis do tipo VAR e LET possuem escopo de função, ou seja, só podem ser acessadas dentro da função em que foram declaradas.
// Já as variáveis do tipo CONST possuem escopo de bloco, ou seja, só podem ser acessadas dentro do bloco em que foram declaradas.
