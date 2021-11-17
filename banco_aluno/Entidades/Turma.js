const { Sequelize } = require("sequelize");
const db = require("./db");

const Turma = db.define(
  "turma",
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nome: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  },
  { timestamps: false }
);

module.exports = Turma;
