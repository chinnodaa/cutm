const mysql = require('mysql2/promise');
require('dotenv').config();

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

pool.getConnection()
  .then((connection) => {
    console.log('Connected to MySQL database');
    connection.release(); // Release the connection back to the pool
  })
  .catch((err) => {
    console.error('Error connecting to MySQL database:', err);
  });

module.exports = pool;
