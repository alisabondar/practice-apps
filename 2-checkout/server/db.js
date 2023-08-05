const mysql = require("mysql2");
const Promise = require("bluebird");

// Configure process.env variables in ../.env
const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
});

const db = Promise.promisifyAll(connection, { multiArgs: true });

db.connectAsync()
  .then(() => console.log(`Connected to MySQL as id: ${db.threadId}`))
  .then(() =>
    // Expand this table definition as needed:
    db.queryAsync(
      `CREATE TABLE IF NOT EXISTS responses ( id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, cookieID VARCHAR(250) UNIQUE, name VARCHAR(250), email VARCHAR(250), pass VARCHAR(250), addLine1 VARCHAR(250), addLine2 VARCHAR(250), city VARCHAR(250), state VARCHAR(250), zip VARCHAR(250), ccnum VARCHAR(250), exp VARCHAR(250), cvv VARCHAR(250), billzip VARCHAR(250))`
    )
  )
  .catch((err) => console.log(err));

module.exports = db;
