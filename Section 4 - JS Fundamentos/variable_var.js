
      {
        var sera = "Será???";
      }
console.log(sera) // Imprime: Será??? - Ela fica acessível globalmente


      {
        let sera2 = "Será2???";
      }
// console.log(sera2) // sera2 is not defined - Ela não fica acessível fora do bloco onde foi definida

function funcao() {
    var local = 123
    console.log(local) // Imprime: 123 - Ela fica acessível dentro da função
}
// console.log(local) // local is not defined - Ela não fica acessível fora da função

// No brower, as variáveis tem dois escopos: Global ou Local (escopo de Função)

var numero = 1
{
    var numero = 2
    console.log("dentro = ", numero) // Imprime: 2 - A variável numero foi sobrescrita, pois var tem escopo global ou de função, e não de bloco
}
console.log('fora   = ', numero) 

// Isso não acontece com let:
let numeroLet = 1
{
    let numeroLet = 2
    console.log("dentro = ", numeroLet) // Imprime: 2 - A variável numeroLet foi sobrescrita, pois let tem escopo de bloco
}
console.log('fora   = ', numeroLet) 