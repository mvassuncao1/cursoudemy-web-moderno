/*
    Iniciamos com a = 7 e b = 94 e voce deve trocar os valores de a e b, ou seja, a deve passar a ser 94 e b deve passar a ser 7. Imprima os valores de a e b antes e depois da troca.
*/

let a = 7;
let b = 94;

console.log("Antes da troca:                    a = " + a + ",  b = " + b);

// Realizando a troca usando uma variável temporária
let temp = a;
a = 94;
b = temp;

console.log("Depois da troca:                   a = " + a + ", b = " + b);

// Realizando a troca usando desestruturação (ES6)
[a, b] = [b, a];
console.log("Depois da troca (desestruturação): a = " + a + ",  b = " + b);
