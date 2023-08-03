require("dotenv").config();
const express = require("express");
const path = require("path");
const dict = require('./dictionary');
const bodyParser = require('body-parser');
const mongo = require('./db');

const app = express();

// Serves up all static and generated assets in in a specified folder.
app.use(express.static(path.join(__dirname, '../client/dist')));
app.use(bodyParser.json())

// Routes - get/post
app.get('/fetch', (req, res) => {
  mongo.Dict.find({})
    .then(glossary => {
      res.json(glossary);
    })
    .catch(err => console.log('Cannot fetch data', err));
})

app.post('/dict', (req, res) => {
  // call dict API
  // store results into db

  dict.dictionary(req, res)
    .then(result => {
      // save in db
      mongo.save(result.data, null)
    })
    .catch(err => console.error(err));
})

app.delete('/delete', (req, res) => {
  // console.log(req.body);
  mongo.Dict.deleteOne({text: req.body.text})
    .then(() => res.send('successfully deleted'))
    .catch(err => console.log('Cannot find word to delete', err));
})

app.put('/put', (req, res) => {
  console.log('put req', req.body);
  // find word and replace definition
  mongo.Dict.replaceOne({text: req.body.data[0]}, {text: req.body.data[0], definition: req.body.data[1]})
    .then(() => res.send('successfully edited'))
    .catch(err => console.log('Cannot find word to edit', err));
})


app.listen(process.env.PORT);
console.log(`Listening at http://localhost:${process.env.PORT}`);
