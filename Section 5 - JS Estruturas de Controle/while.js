function gerarAleatorio(min = 0, max) {
  const retorno = Math.random() * (max - min) + min;
  return Math.floor(retorno);
}

let opcao = 0;

while (opcao != -1) {
  opcao = gerarAleatorio(-1, 10);
  console.log(opcao);
}
