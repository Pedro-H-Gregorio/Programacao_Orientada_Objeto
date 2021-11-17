const Professor = require("c:/Users/pedro/Documents/Pedro/Programacao_Orientada_Objeto/banco_aluno/Entidades/Professor");

class ProfessorController extends Professor {
  static async createTableProfessor() {
    await Professor.sync({ alter: true });
  }

  static async readProfessor() {
    const Professor = await Professor.findAll();
    console.log(Professor);
  }

  static async addProfessor(n) {
    n.forEach(async (aluno) => await Professorcreate(aluno));
  }

  static async deleteProfessor() {
    await Professor.drop();
  }
}
module.exports = ProfessorController;
