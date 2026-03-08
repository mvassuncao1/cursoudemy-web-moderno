// Função sem retorno

function imprimeSoma(a, b) {
  console.log(a + b);
}
imprimeSoma(2, 3); // 5
imprimeSoma(2); // NaN (Not a Number)
imprimeSoma(); // NaN (Not a Number)
imprimeSoma(20, 30, 40, 50, 60); // 5 (os argumentos extras são ignorados)
imprimeSoma("texto 1 ", "texto 2");

function soma(a, b = 1) {
  return a + b;
}
console.log(soma(2, 80));
console.log(soma(2)); // 3 (o valor padrão de b é 1)

function soma2(a = 0, b) { // NaN - O valor padrão de a é 0, mas b não tem um valor padrão definido, o que pode levar a resultados inesperados se b não for fornecido.
    return a + b
}
console.log(soma2(2))