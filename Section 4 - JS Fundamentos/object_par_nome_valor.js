// par nome/valor
const saudacao = "opa"; // contexto léxico 1

function exec() {
  const saudacao = "falaaa"; // contexto léxico 2
  return saudacao;
}

// Objetos são grupos aninhados de Chave/Valor
const cliente = {
  nome: "Pedro",
  idade: 32,
  peso: 90,
  endereco: {
    logradouro: "Rua Muito Legal",
    numero: 123,
  },
};
console.log(saudacao);
console.log(exec());
console.log(cliente); // Imprime o objeto cliente
console.log(cliente.endereco.logradouro); // Erro, pois logradouro não é uma variável, mas sim um atributo do objeto cliente
