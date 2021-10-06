let Pessoa = {
  nome: "Pedro",
  sobrenome: "Gregório",
};

let Aluno = Object.assign({}, Pessoa, { curso: "Informática" });

// procurar funçao para criar objetos multiplos

console.log(Aluno);
