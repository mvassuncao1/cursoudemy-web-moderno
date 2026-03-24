// Execute cada função separadamente pois o setInterval() é assíncrono e pode causar confusão na saída do console

function Pessoa1() {
  this.idade = 0;
  setInterval(function () {
    this.idade++;
    console.log(this.idade);
  }, 1000);
}
new Pessoa1(); // O resultado é NaN, porque a função setInterval() é executada em um contexto global, e o valor de this dentro da função é o objeto global (window no navegador), que não tem a propriedade idade, então quando a função tenta acessar this.idade, ela retorna undefined, e quando tenta incrementar undefined, o resultado é NaN

function Pessoa2() {
  this.idade = 0;
  setInterval(
    function () {
      this.idade++;
      console.log(this.idade);
    }.bind,
    1000,
  );
}
new Pessoa2(); // O resultado é 1, 2, 3, ... porque a função setInterval() é executada em um contexto global, mas a função passada como argumento para setInterval() é uma função anônima que tem o método bind() chamado, e o método bind() retorna uma nova função que tem seu this definido para o valor passado como argumento (Pessoa2), ou seja, a função anônima tem o this definido para o objeto Pessoa2, e quando ela é chamada, ela acessa a propriedade idade do objeto Pessoa2 e incrementa seu valor a cada segundo, resultando em 1, 2, 3, ...

function Pessoa3() {
  this.idade = 0;
  const self = this; // Armazena o valor de this em uma variável self
  setInterval(function () {
    self.idade++; // Usa a variável self para acessar a propriedade idade do objeto Pessoa3
    console.log(self.idade);
  }, 1000);
}
new Pessoa3(); // Cria um novo objeto Pessoa3, e a função setInterval é chamada a cada 1000 milissegundos (1 segundo), incrementando a propriedade idade do objeto Pessoa3 e imprimindo o valor atualizado no console
