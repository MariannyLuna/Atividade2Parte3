const produtosJSON = `{
 "itens": [
   {
     "id": 1,
     "nome": "Notebook Gamer",
     "preco": 2999.99,
     "categoria": "eletronicos",
     "tags": ["tecnologia", "computacao", "gamer"]
   },
   {
     "id": 2, 
     "nome": "Mesa Escritório",
     "preco": 450.50,
     "categoria": "moveis",
     "tags": ["escritorio", "madeira", "profissional"]
   }
 ]
}`;

function formatarProdutos(json) {
  const obj = JSON.parse(json);
  const lista = [];

  for (let item of obj.itens) {
    const preco = item.preco.toFixed(2).replace(".", ",");
    const linha = `${item.nome} - R$ ${preco} (Categoria: ${item.categoria})`;
    lista.push(linha);
  }

  return lista;
}

console.log(formatarProdutos(produtosJSON));