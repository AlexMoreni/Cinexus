const { Pool } = require("pg");

const pool = new Pool({
  user: "postgres",
  host: "::1",
  database: "cinexus",
  password: "991763323",
  port: 5432,
});

module.exports = pool;
