Number.prototype.entre = function (inicio, fim) {
    return this >= inicio && this <= fim
}

const imprimirResultado = function (nota) {
    if (nota.entre(9, 10)) {
        resultado = ("Quadro de Honra");
    } else if (nota.entre(7, 8.99)) {
        resultado = ("Aprovado");
    } else if (nota.entre(4, 6.99)) {
        resultado = ("Recuperação");
    } else if (nota.entre(0, 3.99)) {
        resultado = ("Reprovado");
    } else {
        resultado = ("Nota Inválida");
    }
    console.log(`Nota: ${nota} -> ${resultado}`);
}

imprimirResultado(10  ) // Quadro de Honra
imprimirResultado(8.9 ) // Aprovado
imprimirResultado(6.55) // Recuperação
imprimirResultado(2.3 ) // Reprovado
imprimirResultado(-1  ) // Nota Inválida
imprimirResultado(11  ) // Nota Inválida

