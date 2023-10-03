console.log("DOM");
// é um acronimo para Document Object Model

const h1 = document.createElement("h1");

h1.innerText = "Título 1 ";
h1.innerHTML += "<em>Título com Span</em>";

console.log(h1);

// append é uma forma de eu inserir o elemento
// que então é apenas um objeto na memória
// dentro do meu documento html
document.body.append(h1);

h1.innerText = "Mudei de novo";

// aqui eu crio uma função que recebe um objeto
// para criar elementos html
function criarElementos(data) {
  // aqui eu crio os elementos
  const h1 = document.createElement("h1");
  const div = document.createElement("div");
  const p = document.createElement("p");
  // aqui eu atribuo os valores que recebi
  h1.innerText = data.titulo;
  p.innerText = data.texto;
  // aqui eu insiro os elementos dentro da div
  div.append(h1);
  div.append(p);
  // aqui eu insiro a div dentro do body
  document.body.append(div);
}

// realiza a busca de dados em uma api
// e retorna uma promise
const busca = fetch("https://dummyjson.com/users")
  .then(
    // aqui eu trato o dado que veio da api
    function (response) {
      console.log("Dado que veio sem tratamento: ", response);
      return response.json();
    }
  )
  .then(
    // aqui eu trato o json que veio da function anterior
    function (data) {
      // aqui recebo somente o objeto users do json
      const usuarios = data.users;
      // aqui eu percorro o array de usuários
      usuarios.forEach((usuario) =>
        criarElementos({
          titulo: usuario.firstName,
          texto: usuario.email,
        })
      );
    }
  );

const funcionarios = {
  limite: 3,
  users: [
    {
      // 0
      nome: "Juana",
      email: "juana@bol.com.br",
    },
    {
      // 1
      nome: "Carlos",
      email: "carlos@bol.com.br",
    },
    {
      // 2
      nome: "Maria Eduarda",
      email: "madu@bol.com.br",
    },
  ],
};

funcionarios.users.forEach((funcionario) => {
  console.log(funcionario.nome);
  console.log(funcionario.email);
});
