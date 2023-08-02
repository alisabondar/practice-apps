import { React, useState, useEffect } from "react";
import { render } from "react-dom";
import Add from './components/add.jsx';
import Search from './components/search.jsx';
import WordList from './components/wordList.jsx';
import axios from 'axios';

const App = () => {

  const [words, setWords] = useState([]);

  // optimization - create separate func for get req

  // set state with useEffect
  // this will be executed every time the site is rendered
  useEffect(() => {
    return axios.get('/fetch')
      .then(response => {
        console.log(response.data);
        setWords(response.data);
      })
      .catch(err => console.log('Could not fetch data', err))
  }, []);

  return (
    <div>
      <div>
        <Search />
      </div>
      <div>
        <Add />
      </div>
      <div>
        <ul><WordList wordList ={words}/></ul>
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