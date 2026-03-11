function gerarAleatorio(min, max) {
  retorno = Math.random() * (max - min) + min;
  return Math.floor(retorno);
}

let opcao = -1;

do {
  opcao = gerarAleatorio(-1, 10);
  console.log(opcao);
} while (opcao != -1);
