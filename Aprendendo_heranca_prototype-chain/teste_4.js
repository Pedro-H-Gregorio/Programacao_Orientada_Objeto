class Pessoa {
  constructor() {
    (this.nome = "Pedro"), (this.sobrenome = "Gregorio");
  }
}

class Aluno extends Pessoa {
  constructor() {
    super();
    this.curso = "Informática";
  }

  imprimir() {
    console.log(`${this.nome} ${this.sobrenome}: ${this.curso}`);
  }
}

/* Aluno.prototype.imprimir = () => (console.log("Bora voar")) */
let a = new Aluno();
a.imprimir();
