const pessoa = {
  saudacao: "Bom dia!",
  falar() {
    return this.saudacao;
  },
};
console.log(pessoa.falar()); // O resultado é "Bom dia!", porque o método falar() acessa a propriedade saudacao do objeto pessoa através do operador this

const falar = pessoa.falar;
console.log(falar()); // O resultado é undefined, porque a função falar() foi atribuída a uma variável falar, e quando ela é chamada, o valor de this não é mais o objeto pessoa, mas sim o objeto global (window no navegador), que não tem a propriedade saudacao

const falarDePessoa = pessoa.falar.bind(pessoa);
console.log(falarDePessoa()); // O resultado é "Bom dia!", porque o método bind() cria uma nova função que, quando chamada, tem seu this definido para o valor passado como argumento (pessoa), ou seja, a função falarDePessoa() tem o this definido para o objeto pessoa, e quando ela é chamada, ela acessa a propriedade saudacao do objeto pessoa e retorna "Bom dia!"
