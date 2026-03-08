// Armazenando Função em uma constante
const imprimirSoma = function somar(a, b) {
  console.log(a + b)
};
imprimirSoma(2, 3)
// console.log(somar(2, 4)); // Erro: somar is not defined
// imprimirSoma.somar(2, 4); // Erro: imprimirSoma.somar is not a function

// Armazenando uma Função Arrow em uma variável
const soma = (a, b) => {
    return a + b
}
console.log(soma(9, 8))

// Retorno implícito
const subtracao = (a, b) => a - b
console.log(subtracao(9, 8))

const cl = a => console.log(a)
cl('Legal!!!')