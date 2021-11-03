const { Sequelize } = require("sequelize");
const db = require("./db");

const Estagio = db.define("estagio", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nome: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  inicio: Sequelize.DATEONLY,
  fim: Sequelize.DATEONLY,
  funcao: Sequelize.STRING,
});

module.exports = Estagio;
