function seForVerdadeEuFalo(valor) {
  if (valor) {
    console.log("É verdade... " + valor);
  }
}

seForVerdadeEuFalo(); // undefined - não retorna nada, mas é considerado falso
seForVerdadeEuFalo(false); // não retorna nada, mas é considerado falso
seForVerdadeEuFalo(null); // não retorna nada, mas é considerado falso
seForVerdadeEuFalo(undefined); // não retorna nada, mas é considerado falso
seForVerdadeEuFalo(NaN); // não retorna nada, mas é considerado falso
seForVerdadeEuFalo(""); // string vazia - não retorna nada, mas é considerado falso
seForVerdadeEuFalo(0); // número zero - não retorna nada, mas é considerado falso
seForVerdadeEuFalo(-1); //   É verdade... -1
seForVerdadeEuFalo(" "); //  É verdade... (string com espaço, não é vazia)
seForVerdadeEuFalo("?"); //  É verdade... ?
seForVerdadeEuFalo([]); //   É verdade... (array vazio é considerado verdadeiro)
seForVerdadeEuFalo({}); //   É verdade... (objeto vazio é considerado verdadeiro)
