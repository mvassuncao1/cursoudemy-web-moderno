console.log('01)', '1' == 1)  // true comparação de valor
console.log('02)', '1' === 1) // false comparação de valor e tipo
console.log('03)', '3' != 3)  // false comparação de valor
console.log('04)', '3' !== 3) // true comparação de valor e tipo

console.log('05)', 3 > 2) // true
console.log('06)', 3 >= 2) // true
console.log('07)', 3 < 2) // false
console.log('08)', 3 <= 2) // false

const d1 = new Date(0) // 01/01/1970 // marco 0
const d2 = new Date(0)

console.log('09)', d1 === d2) // false - comparação de referência na memoria, cada objeto tem um endereço diferente
console.log('10)', d1 == d2)  // false - comparação de referência na memoria, cada objeto tem um endereço diferente
console.log('11)', d1.getTime() === d2.getTime()) // true - comparação de valor

console.log('12)', undefined == null) // true - comparação de valor
console.log('13)', undefined === null) // false - comparação de valor e tipo

