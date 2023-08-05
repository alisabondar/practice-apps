require("dotenv").config();
const express = require("express");
const path = require("path");
const bodyParser = require('body-parser')
const sessionHandler = require("./middleware/session-handler");
const logger = require("./middleware/logger");

// Establishes connection to the database on server start
const db = require("./db");

const app = express();


// Adds `req.session_id` based on the incoming cookie value.
// Generates a new session if one does not exist.
app.use(sessionHandler);

// Logs the time, session_id, method, and url of incoming requests.
app.use(logger);

// Serves up all static and generated assets in a specified folder.
app.use(express.static(path.join(__dirname, '../client/dist')));
app.use(bodyParser.json());

// ROUTES HERE
app.post('/userData', (req, res) => {
  var info = req.body.data;
  db.query('INSERT INTO responses (cookieID, name, email, pass, addLine1, addLine2, city, state, zip, ccnum, exp, cvv, billzip) \ values(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', [info.cookie, info.name, info.email, info.pass, info.line1, info.line2, info.city, info.state, info.zipcode, info.ccnum, info.exp, info.cvv, info.billzip], function(err) {if (err) {
    console.log(err);
  } else {
    console.log('success');
  }})
})

app.listen(process.env.PORT);
console.log(`Listening at http://localhost:${process.env.PORT}`);
