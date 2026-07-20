const { Pool } = require("pg");

const pool = new Pool({
  host: "localhost",
  port: 5432,
  user: "postgres",
  password: "postgres",
  database: "cloudticket",
});

pool.query("SELECT NOW()")
  .then(result => {
    console.log("✅ Database connected!");
    console.log(result.rows[0]);
  })
  .catch(err => {
    console.error(err);
  });

module.exports = pool;