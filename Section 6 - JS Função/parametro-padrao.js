function soma1(a, b, c) {
  a = a || 1;
  b = b || 1;
  c = c || 1;
  return a + b + c;
}

console.log(soma1()); // O resultado é 3, porque os valores undefined são considerados falsy, então as variáveis a, b e c recebem o valor 1, e o resultado é a soma de 1 + 1 + 1 = 3
console.log(soma1(3)); // O resultado é 5, porque o valor 3 é considerado truthy, então a variável a recebe o valor 3, e as variáveis b e c recebem o valor 1, e o resultado é a soma de 3 + 1 + 1 = 5
console.log(soma1(1, 2, 3)); // O resultado é 6, porque os valores 1, 2 e 3 são considerados truthy, então as variáveis a, b e c recebem os valores 1, 2 e 3 respectivamente, e o resultado é a soma de 1 + 2 + 3 = 6
console.log(soma1(0, 0, 0)); // O resultado é 3, porque o valor 0 é considerado falsy, então a variável a, b e c recebem o valor 1, e o resultado é a soma de 1 + 1 + 1 = 3
console.log(soma1("a", "b", "c")); // O resultado é 'abc', porque os valores 'a', 'b' e 'c' são considerados truthy, então as variáveis a, b e c recebem os valores 'a', 'b' e 'c' respectivamente, e o resultado é a concatenação de 'a' + 'b' + 'c' = 'abc'

function soma2(a, b, c) {
  a = a !== undefined ? a : 1;
  b = 1 in arguments ? b : 1;
  c = isNaN(c) ? 1 : c;
  return a + b + c;
}

console.log(soma2()); // O resultado é 3, porque os valores undefined são considerados falsy, então as variáveis a, b e c recebem o valor 1, e o resultado é a soma de 1 + 1 + 1 = 3
console.log(soma2(3)); // O resultado é 5, porque o valor 3 é considerado truthy, então a variável a recebe o valor 3, e as variáveis b e c recebem o valor 1, e o resultado é a soma de 3 + 1 + 1 = 5
console.log(soma2(1, 2, 3)); // O resultado é 6, porque os valores 1, 2 e 3 são considerados truthy, então as variáveis a, b e c recebem os valores 1, 2 e 3 respectivamente, e o resultado é a soma de 1 + 2 + 3 = 6
console.log(soma2(0, 0, 0)); // O resultado é 0, porque o valor 0 é considerado falsy, mas a variável c recebe o valor 0, que não é NaN, então a variável c recebe o valor 0, e o resultado é a soma de 0 + 0 + 0 = 0
console.log(soma2("a", "b", "c")); // O resultado é ab1, porque os valores 'a', 'b' e 'c' são considerados truthy, então as variáveis a, b e c recebem os valores 'a', 'b' e 'c' respectivamente, mas a variável c recebe o valor 1, porque 'c' é NaN, e o resultado é a concatenação de 'a' + 'b' + 1 = 'ab1'

function soma3(a = 1, b = 1, c = 1) {
  return a + b + c;
}

console.log(soma3()); // O resultado é 3, porque os valores undefined são considerados falsy, então as variáveis a, b e c recebem o valor 1, e o resultado é a soma de 1 + 1 + 1 = 3
console.log(soma3(3)); // O resultado é 5, porque o valor 3 é considerado truthy, então a variável a recebe o valor 3, e as variáveis b e c recebem o valor 1, e o resultado é a soma de 3 + 1 + 1 = 5
console.log(soma3(1, 2, 3)); // O resultado é 6, porque os valores 1, 2 e 3 são considerados truthy, então as variáveis a, b e c recebem os valores 1, 2 e 3 respectivamente, e o resultado é a soma de 1 + 2 + 3 = 6
console.log(soma3(0, 0, 0)); // O resultado é 0, porque o valor 0 é considerado falsy, mas as variáveis a, b e c recebem o valor 0, que não é undefined, então as variáveis a, b e c recebem o valor 0, e o resultado é a soma de 0 + 0 + 0 = 0
console.log(soma3("a", "b", "c")); // O resultado é abc, porque os valores 'a', 'b' e 'c' são considerados truthy, então as variáveis a, b e c recebem os valores 'a', 'b' e 'c' respectivamente, e o resultado é a concatenação de 'a' + 'b' + 'c' = 'abc'
