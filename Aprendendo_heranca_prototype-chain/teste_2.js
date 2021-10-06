let Pessoa = {
  nome: "Pedro",
  sobrenome: "gregorio",
};

let Aluno = { __proto__: Pessoa, curso: "Informática" };

let Estagio = {
  __proto__: Aluno,
  funcao: "Desenvolvedor",
};

console.log(Object.entries(Estagio));
