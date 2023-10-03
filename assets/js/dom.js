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

function criarElementos(data) {
  const h1 = document.createElement("h1");
  const div = document.createElement("div");
  const p = document.createElement("p");
  h1.innerText = data.titulo;
  p.innerText = data.texto;
  div.append(h1);
  div.append(p);
  document.body.append(div);
}

const busca = fetch("https://dummyjson.com/users")
    .then(
        function (response) {
            console.log("Dado que veio sem tratamento: ",response);    
            return response.json();
        }
    )
    .then(
        function (data){
            const usuarios = data.users;

            usuarios.forEach(
                (usuario) => 
                    criarElementos({
                        titulo: usuario.firstName,
                        texto: usuario.email
                    })
            )

        }
    );
