// Operadores aritméticos são operadores binários, ou seja, operam sobre dois operandos. Eles realizam operações matemáticas básicas como adição, subtração, multiplicação, divisão e módulo

const [a, b, c, d] = [3, 5, 1, 15] // Cria variáveis a, b, c e d com os valores 3, 5, 1 e 15 respectivamente usando desestruturação de array

// ++a    prefix  / prefixado
// a++    postfix / posfixado
// a + b  infix   / infixado

//-a operador unário

const soma          = a + b // Soma de a e b
const subtracao     = a - b // Subtração de a e b
const multiplicacao = a * b // Multiplicação de a e b
const divisao       = a / b // Divisão de a por b
const modulo        = a % 2 // Resto da divisão de a por 2

console.log(soma, subtracao, multiplicacao, divisao, modulo) // Imprime os resultados das operações aritméticas

