import { useState } from 'react';
import words from '../index.jsx';
import axios from 'axios';

export default function WordList({ wordList, state }) {

  // add edit and delete functionality
  console.log(state);

  let deleteHandler = (e) => {
    axios.delete('/delete', {data: {text: e.target.name}})
      .then(response => {
      state();
      })
      .catch(err => console.log('Cannot delete', err));
  }

  let editHandler = (e) => {
    axios.post('/edit', {data: e.target.name})
    // console.log(e.target.name);
  }

  const words = wordList.map((word, index) =>
    <li key={index}>
      {word.text}- {word.definition}
      <label onClick={deleteHandler}>
        <input name={word.text} type='checkbox' />
      </label>
      <button name={word.text} onClick={editHandler}>edit</button>
    </li>
  );

  return (
    <ul>
      {words}
    </ul>
  );
}