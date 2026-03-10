const obj1 = {}; // Criando um objeto vazio
console.log(typeof obj1); // tipo do obj1 é 'object'
obj1.nome = "Marcos"; // notação literal para adicionar um atributo 'nome' ao objeto obj1
obj1["idade"] = 42;
console.log(obj1);

function funcionario(nomeEnviado) { // ultiliza Function Constructor para criar um objeto do tipo funcionario
  this.nome = nomeEnviado;
  this.informaNome = function () {
    console.log("O nome do funcionário é", this.nome);
  };
}

func1 = new funcionario("Marcos");
console.log(func1.nome); // Imprime "Marcos"
func1.informaNome(); // Imprime "O nome do funcionário é Marcos" usando a função informaNome do objeto func1

