function parseQueryString(query) {
  const partes = query.split("&");
  const obj = {};

  for (let p of partes) {
    const separado = p.split("=");
    const chave = separado[0];
    let valor = separado[1];

    if (!isNaN(valor)) {
      valor = Number(valor);
    }

    obj[chave] = valor;
  }

  return obj;}