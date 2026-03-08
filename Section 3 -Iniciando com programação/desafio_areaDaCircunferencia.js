// fórmula = 2 * π * r

const PI = 3.141592653589793; // nomear constantes com todas as letras em maiúsculas é uma convenção comum em JavaScript
let raio = 10;
let area = PI * raio * raio;

console.log("A área de uma circunferência de raio " + raio + " é: " + area.toFixed(2));

// Usando funções mais avançadas do JavaScript para calcular a área da circunferência

area = Math.PI * Math.pow(raio, 2);
console.log("A área de uma circunferência de raio " + raio + " é: " + area.toFixed(2));