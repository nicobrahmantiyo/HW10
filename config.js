const Pool = require('pg').Pool;
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'movies-database',
  password: '130923',
  port: 5432,
});

module.exports = pool;
