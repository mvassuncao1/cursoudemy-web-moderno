/* no navegador, a variavel global é o objeto window 

this === window // true

var a = "Teste"
window.a // "Teste"
this.a // "Teste"

let b = 123
window.b // undefined // variáveis declaradas com let ou const não são adicionadas ao objeto global window
this.b // undefined
b // 123

const c = 456
window.c // undefined
this.c // undefined

function f1() { return this === window }
f1() // true
this.f1() // true
window.f1() // true

const f2 = () => console.log(this === window)
f2() // true
this.f2() // Uncaught TypeError: this.f2 is not a function at <anonymous>:1:6
window.f2() // Uncaught TypeError: this.f2 is not a function at <anonymous>:1:8

let pessoa = {nome: 'Ana', falar: function() { return `Eu sou ${this.nome}` }}
pessoa.falar() // 'Eu sou Ana' // o this dentro do método falar se refere ao objeto pessoa
*/

// No node:
let a = 3;
console.log(a); // 3
console.log(this.a); // undefined
console.log(global.a); // undefined

global.b = 123;
console.log(b); // 123
console.log(this.b); // undefined
console.log(global.b); // 123

this.c = 2345;
//console.log(c); //ReferenceError: c is not defined
console.log(this.c); // 2345
console.log(global.c); // undefined
this.d = false;
this.e = "Teste";
console.log(module.exports); // { d: false, e: 'Teste' }
console.log(this);           // { d: false, e: 'Teste' }
console.log(this === module.exports); // true
console.log(this === global); // false

// Criando uma variável sem var, let ou const
abc = 123; // Isso é possível, mas NÃO RECOMENDADO, pois cria uma variável global de forma implícita
console.log(abc); // 123
console.log(global.abc); // 123
