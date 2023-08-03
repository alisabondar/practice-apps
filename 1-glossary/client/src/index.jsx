import { React, useState, useEffect } from "react";
import { render } from "react-dom";
import Search from './components/search.jsx';
import WordList from './components/wordList.jsx';
import axios from 'axios';

const App = () => {

  const [words, setWords] = useState([]);
  const [addWord, setAddWord] = useState('');

  // create get function
  const fetch = () => {
    console.log('made it');
    return axios.get('/fetch')
      .then(response => {
        setWords(response.data);
      })
      .catch(err => console.log('Could not fetch data', err))
  };

  // set state with useEffect
  // this will be executed every time the site is rendered
  useEffect(() => {
    fetch();
  }, []);

  // add word and rerender
  let handleClick = () => {
    axios.post('/dict', {data: addWord})
      .then(() => useEffect())
      .catch(err => console.error(err));
    // fetch();
  }

  return (
    <div>
      <div>
        <h1>Glossary</h1>
      </div>
      <div>
        <Search />
      </div>
      <div>
        <form onSubmit={handleClick}>
          <input
            onChange={e => setAddWord(e.target.value)}
            placeholder='Add word here...'
          />
          <button>Add</button>
        </form>
      </div>
      <div>
        <ul><WordList wordList ={words} state={fetch}/></ul>
      </div>
    </div>
  );
}

const domNode = document.getElementById('root');
render(<App />, domNode);
// ReactDOM.render(<App />, document.getElementById('root'));


// var seed = [
//   {word: 'software', def: 'Software is a set of computer programs and associated documentation and data.'},
//   {word: 'hardware', def: 'In contrast, hardware is from which the system is built and which actually performs the work.'},
//   {word: 'programming language', def: 'A programming language is a system of notation for writing computer programs.'}
// ];