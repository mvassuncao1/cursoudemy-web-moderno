const peso1 = 1.0;
const peso2 = Number("1.1");
console.log(peso1, peso2);

console.log(Number.isInteger(peso1)); //true
console.log(Number.isInteger(peso2)); //false

const avaliacao1 = 9.871;
const avaliacao2 = 6.871;
console.log(avaliacao1, avaliacao2);
const total = avaliacao1 * peso1 + avaliacao2 * peso2;
const media = total / (peso1 + peso2);
console.log(media.toFixed(2));
console.log(typeof media);

console.log(media.toString());  //converte para string
console.log(media.toString(2)); //converte para binário
console.log(typeof media); // ainda é do tipo numero