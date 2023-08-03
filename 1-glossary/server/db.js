const mongoose = require("mongoose");
// 1. Use mongoose to establish a connection to MongoDB
mongoose.connect('mongodb://localhost/dictionary', {useNewUrlParser: true, useUnifiedTopology: true});

// 2. Set up any schema and models needed by the app
const dictSchema = new mongoose.Schema({
  text: {
    type: String,
    unique: true
  },
  definition: String
})

// 3. Export the models
const Dict = mongoose.model('Dictionary', dictSchema);

dictSchema.methods.save = (req, res) => {
  // how to refresh if encounter duplicate key/word...
  Dict.create({text: req[0].word, definition: req[0].meanings[0].definitions[0].definition})
    .catch(err => console.log('Cannot add to database', err));

  // to add more properties later..
  // req.forEach(def => {
  //   Dict.create({text: def.definitions[0]})
  // })
  // console.log(req);
}

// 4. Import the models into any modules that need them
// how to export all?
module.exports.Dict = Dict;
module.exports.save = dictSchema.methods.save;
