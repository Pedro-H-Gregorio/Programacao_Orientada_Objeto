const { Sequelize } = require("sequelize");
require("dotenv").config();

const mySecret = process.env.DB_URL;

const db = new Sequelize(mySecret, {
  dialect: "postgres",
  dialectOptions: {
    ssl: {
      rejectUnauthorized: false,
    },
  },
  define: {
    freezeTableName: true,
  },
});

module.exports = db;
