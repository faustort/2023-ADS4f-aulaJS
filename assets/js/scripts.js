console.log("Funções  - Arrow Functions");
// Função simples
function digaOi() {
  alert("oi");
}

// Função anônima - não tem nome
const digaOi2 = () => {
  alert("oi2");
};

// Função anônima - de retorno
const digaOi3 = () => "oi3";

// Função anônima - de retorno com parâmetro
const digaOi4 = (nome) => "oi4 " + nome;

// Função anônima - de retorno com parâmetro utilizando
// template string com crase
const digaOi5 = (nome) => `oi5 ${nome}`;
