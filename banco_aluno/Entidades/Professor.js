const { Sequelize } = require("sequelize");
const db = require("./db");

const Professor = db.define("professor", {
  matricula: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nome: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  idade: Sequelize.INTEGER,
});

module.exports = Professor;
