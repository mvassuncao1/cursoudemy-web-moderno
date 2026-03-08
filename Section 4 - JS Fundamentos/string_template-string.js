const nome = "Rebeca";
const diaDeAula = "quarta-feira";
const concatenacao = "Olá " + nome + "!";
const template = `
                  Olá 
                  ${nome}!
                  Sua aula é na ${diaDeAula}!
                  `; //template string ou template literal
console.log(template); // Impreime com quebras de linha e espaços, mas mantém a formatação original do código-fonte

//expressões

console.log(`1 + 1 = ${1 + 1}`); // Imprime "1 + 1 = 2", avaliando a expressão dentro do template string

const up = texto => texto.toUpperCase();
console.log(`Olá ${up(nome)}!`); // Imprime "Olá REBECA!" usando a função up para converter o nome para maiúsculas

console.log(`Ei... ${up('cuidado')}!`); // Imprime "Ei... CUIDADO!" usando a função up para converter o texto para maiúsculas
