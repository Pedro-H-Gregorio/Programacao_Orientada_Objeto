const Estagio = require("c:/Users/pedro/Documents/Pedro/Programacao_Orientada_Objeto/banco_aluno/Entidades/Estagio");

class EstagioCotroller extends Estagio {
  static async createTableEstagio() {
    await Estagio.sync({ alter: true });
  }

  static async readEstagio() {
    const estagio = await Estagio.findAll();
    console.log(estagio);
  }

  static async addEstagio(n) {
    n.forEach(async (estagio) => await Estagio.create(estagio));
  }

  static async deleteEstagio() {
    await Estagio.drop();
  }
}

module.exports = EstagioCotroller;
