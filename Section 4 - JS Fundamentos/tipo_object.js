const prod0 = []; // Array
const prod1 = {}; // Object

prod1.nome = "Celular Ultra Mega";
prod1.preco = 4998.9;
prod1["Desconto Legal"] = 0.4; // Evitar atributos com espaço (evitar usar com espaços)
console.log(prod1);

const prod2 = {
  nomme: "Camisa Polo",
  preco: 79.9,
  clientesQueCompraram: {nome: 'Marcos', data: '08/03/2026'}
};
console.log(prod2);
console.log(prod2.clientesQueCompraram.nome);

// Exemplo de JSON
// Os atributos ficam entre aspas duplas, as chaves e os valores são separados por dois pontos, e os pares de chave-valor são separados por vírgulas.
const prod3 = '{"nome": "Notebook", "preco": 2199.90}'; // JSON (JavaScript Object Notation)