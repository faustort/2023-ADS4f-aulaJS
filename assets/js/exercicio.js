// https://dummyjson.com/docs/posts
// criar uma estrutura de publicação de notícias
// para o retorno do Json acima

/*
https://getbootstrap.com/docs/5.3/components/card/

<div class="card">
  <div class="card-body">
    <h5 class="card-title">Título</h5>
    <p class="card-text">Descrição da notícia.</p>
  </div>
</div>
*/

// primeiro precisamos buscar
const buscaPosts = fetch("https://dummyjson.com/posts")
  // then transformar em json
  .then((response) => response.json())
  // then receber os dados em json e ver onde vamos fazer o forEach
  .then((data) => {
    const posts = data.posts;
    posts.forEach((post) => {
      const card = document.createElement("div");
      const cardBody = document.createElement("div");
      const titulo = document.createElement("h5");
      const texto = document.createElement("p");
      card.classList.add("card");
      cardBody.classList.add("card-body");
      titulo.classList.add("card-title");
      texto.classList.add("card-text");
      titulo.innerText = post.title;
      texto.innerText = post.description;
      cardBody.append(titulo);
      cardBody.append(texto);
      card.append(cardBody);
      document.body.append(card);
    });
  });
