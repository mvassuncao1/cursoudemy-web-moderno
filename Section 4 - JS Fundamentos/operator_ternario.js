// Função arrow com operador ternário
const resultado = nota => nota >= 7 ? 'Aprovado' : 'Reprovado';
console.log(resultado(7.1));
console.log(resultado(6.7));

// Função tradicional com operador ternário
function resultado2(nota) {
  return nota >= 7 ? 'Aprovado' : 'Reprovado';
}
console.log(resultado2(7.1));
console.log(resultado2(6.7));

