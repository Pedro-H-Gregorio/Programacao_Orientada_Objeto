const { Pool } = require("pg");

async function conexao() {
  const pool = new Pool({
    connectionString: process.env.DB_URL,

    ssl: {
      rejectUnauthorized: false,
    },
  });

  const client = await pool.connect();
  const res = await client.query("SELECT * from aluno");
  console.log(res.rows);
  /*await client.query(
      `Create table professor(
          id serial primary key, 
          nome varchar
      );`);*/
  client.release();
  pool.end();
}

conexao();
