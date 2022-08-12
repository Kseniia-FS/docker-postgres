const Pool = require('pg').Pool;

const dataBase = new Pool({
    user: 'admin',
    password: 'pizza',
    host: 'localhost',
    port: 5432,
    database: 'postgres'
});

module.exports = dataBase;