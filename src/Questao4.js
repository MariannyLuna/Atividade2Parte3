const dadosSensiveis = {
  usuarios: [
    {
      cpf: "123.456.789-00",
      cartaoCredito: "5555-6666-7777-8888",
      telefone: "(11) 99999-9999",
      nome: "Fulano de Tal"
    }
  ],
  metadata: {
    ip: "192.168.1.100",
    token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9"
  }
};

function sanitizarDados(dados) {
  const copia = JSON.parse(JSON.stringify(dados));

  copia.usuarios = copia.usuarios.map(u => ({
    nome: u.nome,
    cpf: "***.***.***-" + u.cpf.slice(-2),
    cartaoCredito: "****-****-****-" + u.cartaoCredito.slice(-4),
    telefone: u.telefone.replace(/\(\d+\) \d+/, match => {
      const ddd = match.match(/\((\d+)\)/)[1];
      return `(${ddd}) *****`;
    }) + u.telefone.slice(-5)
  }));

  copia.metadata.token = copia.metadata.token.slice(0, 10) + "...";

  return copia;
}

console.log(sanitizarDados(dadosSensiveis));