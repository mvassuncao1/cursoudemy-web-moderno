const a = { name: "Teste" };
console.log(a);

const b = a; //b recebe a - atribuição por referêcia em objetos
console.log(b);

a.name = "Mudei o valor em a";
console.log(a);
console.log(b); //b também mudou, pois b é uma referência para o mesmo objeto que a aponta

let c = a.name; //c recebe o valor do atributo name de a, que é uma string
console.log(c);
a.name = "Mudei o valor de a novamente";
console.log(a);
console.log(c); //c não mudou, pois c é uma cópia do valor da string, e não uma referência para o objeto

b.name = "Mudei o valor em b";
console.log(a); // Mudança é refletida em a

let d = 1;
e = d;
e++;
console.log(e); // e foi incromentado
console.log(d); // d nao foi incromentado pois em tipos primitivos a atribuição é por valor, não por referência

console.log(
  "-----------------------------------------------------------------------------",
);

let valor;
console.log(valor); // undefined - variável declarada mas sem valor atribuído
// console.log(valor2) // ReferenceError: valor2 is not defined - variável nunca foi inicializada

valor = null; // Ausência de valor ou endereço de memória. É um valor atribuído explicitamente para indicar que a variável não tem valor.
console.log(valor); // null

let f = a; // f recebe a referência do objeto que a aponta
console.log(f); // f aponta para o mesmo objeto que a
f = null; // f agora aponta para null, não mais para o objeto que a aponta
console.log(f); // f é null
console.log(a); // a ainda aponta para o objeto original, pois f foi apenas uma referência e não afetou a referência de a

// console.log(valor.toString()); // TypeError: Cannot read property 'toString' of null - tentando acessar um método em null

const produto = {}
console.log(produto.preco) // undefined - atributo preco não existe no objeto produto
// console.log(produto.preco).a // TypeError: Cannot read property 'a' of undefined - tentando acessar um atributo de um valor undefined
produto.preco = 3.50
console.log(produto) // { preco: 3.5 } - agora o objeto produto tem um atributo preco com valor 3.50
produto.preco = undefined // Atribuindo undefined explicitamente, o atributo preco ainda existe, mas seu valor é undefined
console.log(produto) // { preco: undefined } - o atributo preco existe, mas seu valor é undefined
delete produto.preco // Deletando o atributo preco do objeto produto - use this instead of assigning undefined to remove the attribute from the object
console.log(produto) // {} - o objeto produto agora não tem mais o atributo preco

