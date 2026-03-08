var funcs = []


for (var i = 0; i < 10; i++) {
    funcs.push(function() {
        console.log(i)
    })
}
funcs[0]() // Imprime: 10 - A variável i é compartilhada entre as funções, e quando o loop termina, i tem o valor 10 - deveria imprimir 0
funcs[1]() // Imprime: 10 - A variável i é compartilhada entre as funções, e quando o loop termina, i tem o valor 10 - deveria imprimir 1

var funcs = []


for (let iLet = 0; iLet < 10; iLet++) {
    funcs.push(function() {
        console.log(iLet)
    })
}
funcs[0]() // Imprime: 0 - A variável iLet é local ao bloco do loop, e cada iteração cria uma nova variável
funcs[1]() // Imprime: 1 - A variável iLet é local ao bloco do loop, e cada iteração cria uma nova variável