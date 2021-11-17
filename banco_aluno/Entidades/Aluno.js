const { Sequelize } = require("sequelize");
const db = require("./db");

const Aluno = db.define(
  "aluno",
  {
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
  },
  { timestamps: false }
);

module.exports = Aluno;
