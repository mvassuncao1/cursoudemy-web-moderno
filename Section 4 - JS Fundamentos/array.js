// O Array é heterogênio - pode conter elementos de tipos diferentes
// O Array pode mudar de tamanho

const valores = [7.7, 8.9, 6.3, 9.2]
console.log(valores[0], valores[3]) // Acessa os elementos do array pelos índices 0 e 3 = 7.7 9.2
console.log(valores[4]) // Acessa o elemento do array no índice 4, que não existe, retornando undefined
valores[4] = 10 // Adiciona um novo elemento no índice 4 do array
console.log(valores) // Imprime o array atualizado = [7.7, 8.9, 6.3, 9.2, 10]
valores[10] = 0 // Adiciona um novo elemento no índice 10 do array, deixando os índices intermediários como undefined
console.log(valores) // Imprime o array atualizado = [7.7, 8.9, 6.3, 9.2, 10, <5 empty items>, 0]
console.log(valores.length) // Imprime o comprimento do array, que é 11 devido ao índice 10 = 11

valores.push({id: 3}, false, null, 'teste') // Adiciona novos elementos no final do array
console.log(valores) // Imprime o array atualizado com os novos elementos = [7.7, 8.9, 6.3, 9.2, 10, <5 empty items>, 0, {id: 3}, false, null, 'teste'] 

console.log(valores.pop()) // Remove e retorna o último elemento do array, que é 'teste'
console.log(valores) // Imprime o array atualizado após a remoção do último elemento = [7.7, 8.9, 6.3, 9.2, 10, <5 empty items>, 0, {id: 3}, false, null]
delete valores[0] // Remove o elemento no índice 0 do array, deixando um buraco (undefined) no lugar
console.log(valores) // Imprime o array atualizado após a remoção do elemento no índice 0 = [<1 empty item>, 8.9, 6.3, 9.2, 10, <5 empty items>, 0, {id: 3}, false, null]
console.log(typeof valores) // Imprime o tipo do array, que é 'object' = object
