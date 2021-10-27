const { Pool } = require("pg");

async function conexao() {
  const pool = new Pool({
    connectionString: process.env["DB_URL"],
    ssl: {
      rejectUnauthorized: false,
    },
  });

  const client = await pool.connect();
  const res = await client.query("SELECT * from aluno");
  console.log(res.rows);
  /*await client.query(
    `Create table TURMA (
        id serial primary key, 
        nome varchar,
        matricula_professor integer,
        FOREIGN KEY (matricula_professor) REFERENCES professor(matricula)
    );`
  );*/
  await client.query(
    `INSERT INTO TURMA (nome, matricula_professor) VALUES ('poo',1);`
  );
  const response = await client.query("SELECT * from turma");
  console.log(response.rows);
  client.release();
  pool.end();
}

conexao();
