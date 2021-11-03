const Estagio = require("c:/Users/pedro/Documents/Pedro/Programacao_Orientada_Objeto/banco_aluno/Entidades/Estagio");

async function createTableEstagio() {
  await Estagio.sync({ alter: true });
}

async function readEstagio() {
  const estagio = await Estagio.findAll();
  console.log(estagio);
}

async function addEstagio(n) {
  n.forEach(async (estagio) => await Estagio.create(estagio));
}

async function deleteEstagio() {
  await Estagio.drop();
}

module.exports = { createTableEstagio, readEstagio, addEstagio, deleteEstagio };
