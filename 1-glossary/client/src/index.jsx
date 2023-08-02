import { React, useState } from "react";
import { render } from "react-dom";
import Search from './components/search.jsx';
import WordList from './components/wordList.jsx';

var seed = [
  {word: 'software', def: 'Software is a set of computer programs and associated documentation and data.'},
  {word: 'hardware', def: 'In contrast, hardware is from which the system is built and which actually performs the work.'},
  {word: 'programming language', def: 'A programming language is a system of notation for writing computer programs.'}
];

const App = () => {

  const [words, setWords] = useState(seed);

  return (
    <div>
      <div>
        <Search/>
      </div>
      <div>
        <input placeholder='Add word here ...'/>
        <button>Add</button>
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

