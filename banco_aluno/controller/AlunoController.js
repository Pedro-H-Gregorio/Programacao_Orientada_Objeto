const Aluno = require("../Entidades/Aluno");

class AlunoController {
  static async createTableAluno() {
    await Aluno.sync({ alter: true });
  }

  static async readAluno() {
    const alunos = await Aluno.findAll();
    console.log(alunos);
  }

  static async addAluno(n) {
    n.forEach(async (aluno) => await Aluno.create(aluno));
  }

  static async deleteAluno() {
    await Aluno.drop();
  }

  static async updated(obj) {
    const aluno = await Aluno.findByPk(obj.id);
    aluno.update(obj);
  }
}
module.exports = AlunoController;
