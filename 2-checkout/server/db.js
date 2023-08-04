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
      `CREATE TABLE IF NOT EXISTS responses (
        id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, cookie_id CHAR,
        name CHAR,
        email CHAR,
        password CHAR,
        addressLine1 CHAR,
        addressLine2 CHAR,
        city CHAR,
        state CHAR,
        zip INT,
        credit_card_num INT,
        expiration INT,
        cvv INT,
        billing_zip INT)`
    )
  )
  .catch((err) => console.log(err));

module.exports = db;
