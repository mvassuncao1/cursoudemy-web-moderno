function trataErroELancar(erro) {
  //throw new Error("...deu ruim"); //Error: ...deu ruim
  //throw 10; //10
  //throw true; //true
  //throw "mensagem"; //"mensagem"
  //throw erro.name; //TypeError
  //throw erro.message; //Cannot read properties of undefined (reading 'toUpperCase')
}

function imprimirNomeGritado(obj) {
  try {
    console.log(obj.name.toUpperCase() + "!!!");
  } catch (e) {
    trataErroELancar(e);
  } finally { // Executa sempre, independente do resultado do try/catch (erro ou sucesso)
    console.log("Processamento concluído.");
  }
}

const obj = { nomeDaVariavelDiferenteDoEsperado: "Roberto" };
imprimirNomeGritado(obj);
