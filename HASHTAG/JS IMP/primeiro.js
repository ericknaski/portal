// comentários podem ser chamados utilizando o atalho Ctrl+;

// MÓDULO 3

//                                                 - AULA 2 -

console.log("olá, mundo!");
console.log("sejam bem-vindos");

//                                                 - AULA 5 -

// Variáveis em JS: declaração do tipo + nome da variável = info

let mensagem = "olá";
console.log(mensagem);

// Variáveis do tipo LET não podem ser redeclaradas, mas são mutavéis, ou seja, podem ter seu valor alterado.
let cor = "vermelho";
console.log(cor);

// let cor = "azul"; // erro, pois a variável já foi declarada
// redeclarando a variável cor, assim, o valor dela foi alterado de vermelho para azul.
cor = "azul";
console.log(cor);

// exemplo: muda-se a cor do semáforo (valor var) de vermelho para verde, mas não muda-se o semáforo(variável)

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

//                                                 - AULA 11 -

// = Strings - são cadeias de caracteres, ou seja, um conjunto de letras, números e símbolos que formam uma palavra, frase ou texto.
// Há dois tipos em JS: String primitiva e String objeto.
// As strings primitivas são criadas com aspas duplas ou simples, enquanto a objeto é criada utilizando o construtor String().
// String template - são criadas utilizando crases (``) e permitem a interpolação de variáveis e expressões dentro da string, utilizando a sintaxe ${}.

let mensagem4 = "olá, ";
let nome = "Paulo!";
let mensagem5 = ` bem-vindo`;
let mensagem6 = `${nome}, seja bem-vindo!`;

console.log(mensagem4 + nome + mensagem5); // concatenação de strings
console.log(`${mensagem4} ${nome} ${mensagem5}`); // template string
console.log(mensagem6); // template string

console.log(mensagem6[0]); // retorna o primeiro caractere da string (indice 0)
console.log((mensagem6[4] = "a")); // não altera o valor da string - imprimindo apenas a atribuição ()
// a atribuição é feita, mas não altera o valor da string

console.log(mensagem6.length); // retorna o tamanho da string
console.log(mensagem6.toUpperCase()); // retorna a string em maiúsculo

// = Numbers - são valores numéricos, ou seja, números inteiros ou decimais.

let numero1 = 10;
let numero2 = 20.5; // número de ponto flutuante (decimal)
let numero3 = -5;
// Infinit e NaN são valores especiais do tipo Number, que representam respectivamente o infinito e o "Not a Number" (não é um número).

let string = "10";
let numero4 = 10;

console.log(string + numero4); // concatenação de string com número, resultando em "1010"
console.log(`${string} e ${numero4}`); // template string, resultando em "10 e 10"
console.log(Number(string) + numero4); // conversão de string para número, resultando em 20

//                                                 - AULA 12 -

// = Boolean - são valores lógicos, ou seja, verdadeiro (true) ou falso (false).

let ligado = true;
let desligado = false;
// (verdadeiro = sim = 1 ) e (falso = não = 0)

console.log(true == 1);
console.log(false == 0);

let nome2 = "Paulo";
console.log(Boolean(nome2)); // true, pois a string não está vazia
let nome3 = "";
console.log(Boolean(nome3)); // false, pois a string está vazia

//                                                 - AULA 13 -

// = Undefined - é um valor especial que representa a ausência de valor ou objeto, ou seja, uma variável que foi declarada, mas não foi inicializada com nenhum valor.
let produto;
let carrinho = undefined;

console.log(produto);
console.log(typeof carrinho);

// = Null - é um valor especial que representa a ausência de valor ou objeto.

let carro = null;
console.log(carro);
console.log(typeof carro);

//                                                 - AULA 14 -

// Exercício 1 -  Escreva um programa simples que exiba uma string no terminal utilizando console.log().

console.log("oi");

// Exercício 2 -  Modifique o programa anterior para armazenar a mensagem em uma variável antes de exibi-la no console.

let mensagem7 = "oi";
console.log(mensagem7);

// Exercício 3 - Declare três variáveis mutáveis: nome (string), idade (number) e isStudent (boolean).

let nome1 = "Erick";
let idade = 20;
let isStudent = true;
console.log(nome, idade, isStudent);

// Exercício 4 - Modifique o valor das variáveis anteriores e imprima os novos valores no console.

nome1 = "Maria Eduarda";
idade = 26;
isStudent = true;
console.log(nome, idade, isStudent);

// Exercício 5: Crie uma variável constante que irá armazenar um número e imprima no console.

const num3 = 50;
console.log(num3);

// Exercício 6: Declare duas variáveis, endereco e telefone, sem atribuir valores a elas.

let endereco;
let tel;

// Exercício 7: Declare variáveis com nomes descritivos para armazenar o nome de um produto, seu preço e a quantidade em estoque.

let nomeprod = "notebook";
let precoprod = "2000";
let not_estoque = "100";
console.log(nomeprod, precoprod, not_estoque);

// Exercício 8: Declare uma variável para armazenar o nome de uma cidade e outra para armazenar a sua população. Exiba uma mensagem combinando ambas as variáveis.

let cidade = "Leopoldina";
let populacao = 56000;

console.log("A cidade de " + cidade + ", tem uma população de " + populacao);
console.log(`A cidade de ${cidade} tem uma população de ${populacao}`);

//                                                 - AULA 16 -

// # ADIÇÃO

let valor = 10;
let val = 20;
console.log(valor + val);

let valo = "20";
console.log(valor + valo); // concatenação

// #SUBTRAÇÃO

console.log(valor - valo);

// #DIVISÃO

console.log(valor / valo);

// #MÓDULO - Retorno do resto da divisão

console.log(valor % valo);

//                                                 - AULA 17 -

// #Operadores Aritiméticos Avançados
// #EXPONENCIAÇÃO

let base = 2;
let expoente = 3;
let resultado = base ** expoente; // 2 elevado a 3
console.log(resultado);

// #INCREMENTO

let cont = 0;
console.log(controle++); // aumenta 1 sempre que eu executo o programa

// #DECREMENTO
