function area(largura, altura) {
  const area = largura * altura;
  if (area > 20) return area;
  else return area;
}

console.log(area(1, 200));
console.log(area(10));
console.log(area(1, 200, 3));


function soma() {
let total = 0
  for (i in arguments) {
    total += arguments[i];
  }
  return total;
}
console.log(soma(10, 20, 30, 40, 50));
