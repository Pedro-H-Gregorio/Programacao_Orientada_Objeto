const Turma = require("C:/Users/pedro/Documents/Pedro/Programacao_Orientada_Objeto/banco_aluno/Entidades/Turma.js");

class TurmaController extends Turma {
  static async createTableTurma() {
    await Turma.sync({ alter: true });
  }

  static async readTurma() {
    const turmas = await Turma.findAll();
    console.log(turmas);
  }

  static async addTurma(n) {
    n.forEach(async (turma) => await Turmacreate(turma));
  }

  static async deleteTurma() {
    await Turma.drop();
  }
}
module.exports = TurmaController;
