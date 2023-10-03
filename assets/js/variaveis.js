console.log("Variáveis");

// Escopo da minha aplicação
var nome = "Fausto"; // variável comum

let nome2 = "Fausto 2"; // variável que pode ser alterada

const nome3 = "Fausto 3"; // variável que não pode ser alterada

let sobrenome = "Silva";

let nomeCompleto = nome + " " + sobrenome; // concatenando variáveis

let idade = 35;

idade = idade + 36; // alterando o valor da variável

nomeCompleto = nomeCompleto + idade; // concatenando variáveis

let funcionario = {
  nomeFuncionario: "Fausto",
  sobrenomeFuncionario: "Silva",
  idadeFuncionario: 35,
};

console.log(
  funcionario.nomeFuncionario + " " + funcionario.sobrenomeFuncionario
); // concatenando variáveis
console.log(
  `${funcionario.nomeFuncionario} ${funcionario.sobrenomeFuncionario}`
); // template string

funcionario.nomeFuncionario = "Fausto 2";

console.log(funcionario);
