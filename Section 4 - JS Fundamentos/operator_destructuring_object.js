// Extrai elementos de um array ou propriedades de um objeto em variáveis distintas

// Desestruturação de array
const [a, b, c] = [1, 2, 3];
console.log(a); // Imprime 1, pois a recebe o valor do primeiro elemento do array
console.log(b); // Imprime 2, pois b recebe o valor do segundo  elemento do array
console.log(c); // Imprime 3, pois c recebe o valor do terceiro elemento do array

// Desestruturação de objeto
const pessoa = {
  nome: "João",
  idade: 30,
  endereco: {
    logradouro: "Rua Legal",
    numero: 456,
    cidade: "São Paulo",
  },
};
const {
  nome,
  idade,
  endereco: { cidade },
} = pessoa; // Não é uma operação de Atribuição // Operação de desestruturação para extrair as propriedades nome, idade e cidade do objeto pessoa e atribuí-las a variáveis distintas - const { chave1, chave2, ... } = objeto/array
console.log(nome); // Imprime "João", pois nome recebe o valor da propriedade nome do objeto pessoa
console.log(idade); // Imprime 30, pois idade recebe o valor da propriedade idade do objeto pessoa
console.log(cidade); // Imprime "São Paulo", pois cidade recebe o valor da propriedade cidade do objeto pessoa

// Desestruturação mudando nome da variável
const { nomeDaPessoa = nome, idadeDaPessoa = idade } = pessoa; // Desestruturação de objeto com mudança de nome das variáveis - const { chave1: novaVariavel1, chave2: novaVariavel2, ... } = objeto/array
console.log(nomeDaPessoa); // Imprime "João", pois nomeDaPessoa recebe o valor da propriedade nome do objeto pessoa
const { cidadeDaPessoa = cidade } = pessoa.endereco; // Desestruturação de objeto aninhado com mudança de nome da variável - const { chave1: novaVariavel1, chave2: novaVariavel2, ... } = objeto/array
console.log(cidadeDaPessoa); // Imprime "São Paulo", pois cidadeDaPessoa recebe o valor da propriedade cidade do objeto pessoa.endereco

const { sobrenome, bemHumorada = "Sim" } = pessoa; // Desestruturação de objeto com uma propriedade que não existe no objeto pessoa - const { chave1, chave2, ... } = objeto/array
console.log(sobrenome); // Imprime undefined, pois sobrenome não existe como propriedade do objeto pessoa
console.log(bemHumorada); // Imprime "Sim", pois bemHumorada recebe o valor padrão "Sim" definido na desestruturação, já que a propriedade bemHumorada não existe no objeto pessoa

const {
  endereco: { logradouro, numero },
} = pessoa; // Extrai as propriedades logradouro, numero e cidade do objeto pessoa.endereco e as atribui a variáveis logradouro, numero e cidade respectivamente
console.log(logradouro, numero); // Imprime "Rua Legal", 456, "São Paulo", pois logradouro, numero e cidade recebem os valores das propriedades correspondentes do objeto pessoa.endereco

const {
  endereco: { logradouro: rua, numero: num },
} = pessoa; // Extrai as propriedades logradouro e numero do objeto pessoa.endereco e as atribui a variáveis rua e num respectivamente, mudando o nome das variáveis
console.log(rua, num); // Imprime "Rua Legal", 456, pois rua e num recebem os valores das propriedades logradouro e numero do objeto pessoa.endereco

let { conta } = pessoa; // Desestruturação de objeto para extrair a propriedade conta do objeto pessoa
console.log(conta); // Imprime undefined, pois conta não existe como propriedade do objeto pessoa

let {
  conta: { ag, numConta },
} = pessoa; // Desestruturação de objeto para extrair as propriedades ag e numConta do objeto pessoa.conta
//console.log(ag, numConta); // TypeError: Cannot read properties of undefined (reading 'ag'), pois conta não existe como propriedade do objeto pessoa, resultando em um erro ao tentar acessar as propriedades ag e numConta de um objeto undefined