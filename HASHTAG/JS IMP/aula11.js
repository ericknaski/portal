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
