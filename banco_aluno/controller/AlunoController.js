const Aluno = require("../Entidades/Aluno");

class AlunoController extends Aluno {
  static async createTableAluno() {
    await Aluno.sync({ alter: true });
  }

  static async readAluno() {
    const alunos = await Aluno.findAll();
    console.log(alunos);
  }

  static async addAluno(n) {
    n.forEach(async (aluno) => await Alunocreate(aluno));
  }

  static async deleteAluno() {
    await Aluno.drop();
  }
}
module.exports = AlunoController;
