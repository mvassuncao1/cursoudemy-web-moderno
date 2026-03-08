const escola = "Cod3r";

console.log(escola.charAt(4)); // Acessa o caractere na posição 4 = r
console.log(escola.charAt(0)); // Acessa o caractere na posição 0 = C
console.log(escola.charAt(-1)); // Acessa o caractere na posição -1, que não existe, retornando uma string vazia
console.log(escola.charAt(5)); // Acessa o caractere na posição 5, que não existe, retornando uma string vazia

console.log(escola.charCodeAt(3)); // Retorna o código Unicode do caractere na posição 3 = 51

console.log(escola.indexOf("d")); // Retorna a posição do primeiro caractere '3' encontrado na string = 2
console.log(escola.indexOf("a")); // Retorna a posição do primeiro caractere 'a' encontrado na string, mas nao encontra = -1

console.log(escola.substring(2)); // Retorna a substring a partir da posição 2 até o final da string = d3r
console.log(escola.substring(1)); // Retorna a substring a partir da posição 1 até o final da string = od3r
console.log(escola.substring(0)); // Retorna a substring a partir da posição 0 até o final da string = Cod3r
console.log(escola.substring(0, 3)); // Retorna a substring da posição 0 até a posição 3 (exclusiva) = Cod

console.log("Escola ".concat(escola).concat("!")); // Concatena a string 'Escola ' com a variável escola e depois concatena com "!" = Escola Cod3r!
console.log("Escola " + escola + "!"); // Concatena a string 'Escola ' com a variável escola e depois concatena com "!" usando o operador + = Escola Cod3r!

console.log(escola.replace(3, "e")); // Substitui o caractere '3' por 'e' na string = Coder
console.log(escola.replace(/\d/, "e")); // Substitui o primeiro número encontrado por 'e' usando expressão regular = Coder

const nomes = "Ana, Maria, Pedro";
console.log(nomes.split(", ")); // Divide a string em um array usando ', ' como separador = ['Ana', 'Maria', 'Pedro']
const arrayNomes = nomes.split(", "); // Divide a string em um array usando ', ' como separador
console.log(arrayNomes); // Imprime o array resultante = ['Ana', 'Maria', 'Pedro']
console.log(typeof arrayNomes); // Verifica o tipo da variável arrayNomes, que é um array = object

console.log("3" + 2); // Concatena a string "3" com o número 2, resultando em "32"
console.log(3 + "2"); // Concatena o número 3 com a string "2", resultando em "32"
