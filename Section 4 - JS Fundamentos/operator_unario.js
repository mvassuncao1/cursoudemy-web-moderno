let num1 = 1
let num2 = 2

console.log(++num1 === num2--) // true incrementa num1 para 4, compara com num2 (que é 2) e depois decrementa num2 para 1
console.log(num1 === num2) // false compara num1 (que é 4) com num2 (que é 1)

if (true){
    console.log(num1)   // 1 mostra o valor atual de num1, que é 1
    console.log(num1++) // 1 mostra o valor atual de num1, que é 1, e depois incrementa num1 para 2
    console.log(num1)   // 2 mostra o valor atualizado de num1, que é 2
    console.log(++num1) // 3 incrementa num1 para 3 e depois mostra o valor atualizado, que é 3
}

let boleano = false
console.log(!boleano) // true mostra o valor negado de boleano, que é true