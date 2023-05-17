const Pool = require("pg").Pool;

const pool = new Pool({
    user: "postgres",
    password: "1234",
    host: "localhost",
    port: 5000,
    database: "perntodo"
});

module.exports = pool;