function Pessoa(){
    this.nome = "Pedro",
    this.sobrenome = "gregorio"
}

function Aluno (){ 
    this.matricula = "01"
}
Aluno.prototype = Pessoa.__proto__

let a = new Aluno()

console.log(a.nome)