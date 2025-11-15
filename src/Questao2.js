function analisarTexto(texto) {
  const palavras = texto
    .toLowerCase()
    .match(/[a-zà-ú]+/gi);

  const totalPalavras = palavras.length;


  const mapa = {};
  for (let p of palavras) {
    mapa[p] = (mapa[p] || 0) + 1;
  }

  const frequencia = Object.entries(mapa).map(([palavra, freq]) => {
    return { palavra, frequencia: freq };
  });


  const soma = palavras.reduce((acc, p) => acc + p.length, 0);
  const tamanhoMedio = soma / palavras.length;

  return {
    totalPalavras: totalPalavras,
    frequenciaPalavras: frequencia,
    tamanhoMedioPalavras: tamanhoMedio.toFixed(2)
  };
}

const texto = "JavaScript é uma linguagem de programação. JavaScript é versátil e JavaScript é poderoso.";

console.log(analisarTexto(texto));