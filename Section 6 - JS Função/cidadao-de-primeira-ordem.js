// Função é um Fisrt Class Object (Citizen), ou seja, é um tipo de dado que pode ser tratado como qualquer outro tipo de dado (string, number, boolean, etc). Isso significa que uma função pode ser atribuída a uma variável, passada como argumento para outra função, retornada por outra função, etc.
// Higher-Order Function é uma função que recebe outra função como argumento ou retorna uma função como resultado. Isso é possível porque as funções são First Class Objects.

// Função de forma literal:
function funcao1() {}

// Armazenar em uma variável:
const funcao2 = function () {};

// Armazenar em um array:
const vetor = [
  function (a, b) {
    return a + b;
  },
  funcao1,
  funcao2,
];
console.log(vetor[0](2, 3)); // Chama a função anônima que está na posição 0 do array e passa os argumentos 2 e 3

// Armazenar em um atributo de objeto:
const obj = {};
obj.falar = function () {
  return "Opa";
};
console.log(obj.falar()); // Chama a função que está no atributo falar do objeto obj

// Passar função como parâmetro:
function run(funcao3) {
  funcao3();
}
run(function () {
  console.log("Executando...");
}); // Passa uma função anônima como argumento para a função run

// Retornar uma função:
function soma(a, b) {
  return function (c) {
    return a + b + c;
  };
}
console.log(soma(2, 3)(4)); // Chama a função soma e passa os argumentos 2 e 3, o resultado é uma função que recebe um argumento c, e depois chama essa função passando o argumento 4, o resultado é a soma de 2 + 3 + 4 = 9
const resultadoAB = soma(2, 3); // Chama a função soma e passa os argumentos 2 e 3, o resultado é uma função que recebe um argumento c
console.log(resultadoAB(4)); // Chama a função que foi retornada pela função soma e passa o argumento 4, o resultado é a soma de 2 + 3 + 4 = 9
// teste
