let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo = 1
console.log(!!isAtivo) // !! converte o valor para boolean (usando a negação duas vezes), retornando true para valores truthy e false para valores falsy

isAtivo = 0
console.log(!!isAtivo) // !! converte o valor para boolean (usando a negação duas vezes), retornando true para valores truthy e false para valores falsy

console.log(!!0) //falso
console.log(!!1) //verdadeiro
console.log(!!2) //verdadeiro
console.log(!!-1) //verdadeiro
console.log(!!' ') //verdadeiro
console.log(!!'') //falso
console.log(!!'qualquer coisa') //verdadeiro
console.log(!![]) //verdadeiro
console.log(!!{}) //verdadeiro
console.log(!!null) //falso
console.log(!!0.1) //verdadeiro
console.log(!!' ') //verdadeiro
console.log(!!'qualquer coisa') //verdadeiro
console.log(!![]) //verdadeiro
console.log(!!{}) //verdadeiro
console.log(!!new Date()) //verdadeiro
console.log(!!Infinity) //verdadeiro
console.log(!!NaN) //falso
console.log(!!undefined) //falso
console.log(!!(isAtivo = 33)) //verdadeiro
console.log(!!(isAtivo = 0)) //verdadeiro

console.log('' || null || 0 || 1) //retorna o primeiro valor truthy encontrado, que é 1
console.log('' || null || 0 || 'qualquer coisa') //retorna o primeiro valor truthy encontrado, que é 'qualquer coisa'

let nome = ''
console.log(nome || 'Desconhecido') //retorna 'Desconhecido' porque nome é uma string vazia, que é falsy