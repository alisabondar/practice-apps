require("dotenv").config();
const express = require("express");
const path = require("path");

const app = express();

// Serves up all static and generated assets in in a specified folder.
app.use(express.static(path.join(__dirname, '../client/dist')));

// Routes - get/post
// app.get('url', (req, res) => {

// })

// app.post('url', (req, res) => {

// })


app.listen(process.env.PORT);
console.log(`Listening at http://localhost:${process.env.PORT}`);
