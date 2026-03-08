//Usando var
console.log('a antes da declaração  = ' , a)
var a = 100
console.log('a depois da declaração = ' , a)

// O hoisting (içamento) no JavaScript é o comportamento padrão onde as declarações de variáveis e funções são movidas para o topo do seu escopo pelo interpretador antes da execução do código, permitindo que sejam referenciadas antes de serem declaradas na ordem da escrita.



// Usando let
// console.log('b antes da declaração = ', b) // Erro: ReferenceError: Cannot access 'b' before initialization
let b = 200
console.log('b depois da declaração = ' , b)