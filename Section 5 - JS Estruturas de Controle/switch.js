const imprimirResultado = function (nota) {
  switch (Math.floor(nota)) {
    case 10:
    case 9:
      console.log(`Nota: ${nota} -> Quadro de Honra`);
      break;
    case 8:
    case 7:
      console.log(`Nota: ${nota} -> Aprovado`);
      break;
    case 6:
    case 5:
    case 4:
      console.log(`Nota: ${nota} -> Recuperação`);
      break;
    case 3:
    case 2:
    case 1:
    case 0:
      console.log(`Nota: ${nota} -> Reprovado`);
      break;
    default:
      console.log(`Nota: ${nota} -> Nota Inválida`);
  }
};

imprimirResultado(10); // Quadro de Honra
imprimirResultado(8.9); // Aprovado
imprimirResultado(6.55); // Recuperação
imprimirResultado(2.3); // Reprovado
imprimirResultado(-1); // Nota Inválida
imprimirResultado(11); // Nota Inválida
imprimirResultado("Epa"); // Nota Inválida
