// o 'ou exclusivo' é representado por 'xor' ou '^' em algumas linguagens, mas em JavaScript não existe um operador específico para isso. No entanto, podemos simular o comportamento do 'xor' usando uma combinação de operadores lógicos.

// O 'xor' retorna true se apenas um dos operandos for verdadeiro, e false caso contrário. Podemos usar a seguinte expressão para simular o 'xor':

/* 
  OU EXCLUSIVO XOR:
      V xor V -> F
      V xor F -> V
      F xor V -> V
      F xor F -> F
*/

function xor(a, b) {
  return (a || b) && !(a && b);
}
console.log("V xor V ->", xor(true, true)); // false
console.log("V xor F ->", xor(true, false)); // true
console.log("F xor V ->", xor(false, true)); // true
console.log("F xor F ->", xor(false, false)); // false

// 70. Operadores: Lógicos => 4:09
// Criei a branch develop no repositório para testes
// Commitei alterações na branch develop
// Fiz merge da branch develop para a main

//-------------------------------------------------------
/* Eu tenho dois trabalhos para fazer
    - Se fizer os dois trabalhos eu compro uma TV 55"
    - Se fizer um trabalho apenas eu compro uma TV 32"
    - Se fizer um dos dois ou os dois eu tomo sorvete
    - Se não comprar sorvete eu fico saudável
*/
function compras(trabalho1, trabalho2) {
  const comprarSorvete = trabalho1 || trabalho2;
  const comprarTV55 = trabalho1 && trabalho2;
  //const comprarTV32 = trabalho1 ^ trabalho2; // operador bitwise XOR para simular o comportamento do 'xor'
  const comprarTV32 = trabalho1 != trabalho2;  // outra forma de simular o 'xor' usando desigualdade
  const saudavel = !comprarSorvete;
  console.log(comprarSorvete, comprarTV55, comprarTV32, saudavel);
}
compras(true,  true);  // true  true  false false
compras(true,  false); // true  false true  false
compras(false, true);  // true  false true  false
compras(false, false); // false false false true