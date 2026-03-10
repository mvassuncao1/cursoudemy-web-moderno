const obj1 = {}; // Criando um objeto vazio
console.log(typeof obj1); // tipo do obj1 é 'object'
obj1.nome = "Marcos";
obj1["idade"] = 42;
console.log(obj1);

function funcionario(nomeEnviado) {
  this.nome = nomeEnviado;
}

func1 = new funcionario("Marcos");
console.log(func1.nome); // Imprime "Marcos"


