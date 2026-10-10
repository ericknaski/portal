//                                                 - AULA 18 -

// #Operadores de comparação
// São usados para comparar valores e retornam um valor booleano (true ou false)

// ==   Igualdade (apenas valor)         ->  X == Y
// ===  Estrita igualdade (valor e tipo) ->  X === Y
// !=   Desigualdade                     ->  X != Y
// !==  Estrita desigualdade              ->  X !== Y
// >    Maior que                        ->  X > Y
// >=   Maior ou igual que               ->  X >= Y
// <    Menor que                        ->  X < Y
// <=   Menor ou igual que               ->  X <= Y

let x = 5;
let y = "5";

console.log(x == y); // true  (compara só o valor)
console.log(x === y); // false (valor igual, mas tipos diferentes: number x string)
console.log(x != y); // false
console.log(x !== y); // true
console.log(x > 3); // true
console.log(x >= 5); // true
console.log(x < 3); // false
console.log(x <= 5); // true

let senha = "123";
let senhadig = "1234";
let comparacao = senha === senhadig;

console.log("Você digitou a senha: " + comparacao);
