console.log(typeof Object); // function
console.log(typeof new Object()); // object

const Cliente = function () {};
console.log(typeof Cliente); // function
console.log(typeof new Cliente()); // object

class Produto {}
console.log(typeof Produto); //function - internamente a classe é uma função
console.log(typeof new Produto()); // object

