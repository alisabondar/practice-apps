const axios = require('axios');

let dictionary = (req, res) => {
  // make api call
  // url https://api.dictionaryapi.dev/api/v2/entries/en/${req.body.data}
  // access meanings
  return axios({
    method: 'get',
    url: `https://api.dictionaryapi.dev/api/v2/entries/en/${req.body.data}`
  })
    .catch(err => console.error(err));
}

module.exports.dictionary = dictionary;