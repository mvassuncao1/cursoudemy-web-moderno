function rand({ min = 0, max = 1000 }) {
  const valor = Math.random() * (max - min) + min;
  return Math.floor(valor);
}

console.log(rand({ max: 50, min: 40 })); // Gera um número aleatório entre 40 e 50
console.log(rand({ min: 955 })); // Gera um número aleatório entre 955 e 1000
console.log(rand({ max: 15 })); // Gera um número aleatório entre 0 e 15
console.log(rand({})); // Gera um número aleatório entre 0 e 1000
// console.log(rand()); // Erro, pois a função espera um objeto como argumento, mesmo que seja vazio

console.log('---------------------------------')

function rand2( min = 0, max = 1000 ) {
  const valor = Math.random() * (max - min) + min;
  return Math.floor(valor);
}
console.log(rand2(50, 40)); // Gera um número aleatório entre 40 e 50
console.log(rand2(955, 1000)); // Gera um número aleatório entre 955 e 1000
console.log(rand2(0, 15)); // Gera um número aleatório entre 0 e 15
console.log(rand2(998)); // Gera um número aleatório entre 998 e 1000
//console.log(rand2(,996)); // SyntaxError: Unexpected token ',' // Erro, pois os parâmetros min e max devem ser passados na ordem correta, mesmo que sejam opcionais


console.log("---------------------------------");
// Passando parâmetros para a função usando Array destructuring
function rand3([min = 0, max = 1000]) {
  if (min > max) [min, max] = [max, min]; // Troca os valores de min e max se min for maior que max usando Array destructuring

  const valor = Math.random() * (max - min) + min;
  return Math.floor(valor);
}
console.log(rand3([50, 40])); // Gera um número aleatório entre 40 e 50
console.log(rand3([955])); // Gera um número aleatório entre 955 e 1000
console.log(rand3([, 15])); // Gera um número aleatório entre 0 e 15
console.log(rand3([])); // Gera um número aleatório entre 0 e 1000
// console.log(rand3()); // TypeError: undefined is not iterable (cannot read property Symbol(Symbol.iterator)) - pois a função espera um array como argumento, mesmo que seja vazio

