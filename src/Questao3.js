const usuariosJSON = `[
 {"nome": " carlos silva ", "email": "CARLOS@EMAIL.COM", "idade": "25"},
 {"nome": "MARIA", "email": "maria@email.com", "idade": "30"},
 {"nome": "João Santos", "email": "joao@email.com", "idade": "17"}
]`;

function capitalizeNome(nome) {
  return nome
    .trim()
    .toLowerCase()
    .split(" ")
    .map(n => n.charAt(0).toUpperCase() + n.slice(1))
    .join(" ");
}

function validarEmail(email) {
  return /^[\w.-]+@[\w.-]+\.\w{2,}$/i.test(email);
}

function normalizarUsuarios(json) {
  const usuarios = JSON.parse(json);

  return usuarios.map(u => {
    const nome = capitalizeNome(u.nome);
    const email = u.email.toLowerCase();
    const idade = Number(u.idade);
    const maiorIdade = idade >= 18;

    return {
      nome,
      email,
      emailValido: validarEmail(email),
      idade,
      maiorIdade
    };
  });
}

console.log(normalizarUsuarios(usuariosJSON));