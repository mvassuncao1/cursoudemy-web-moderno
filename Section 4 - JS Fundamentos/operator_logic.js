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
console.log("V xor V ->", xor(true,  true));  // false
console.log("V xor F ->", xor(true,  false)); // true
console.log("F xor V ->", xor(false, true));  // true
console.log("F xor F ->", xor(false, false)); // false

// 70. Operadores: Lógicos => 4:09
// Criei a branch develop no repositório para testes