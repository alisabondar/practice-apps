import { useState } from 'react';
import words from '../index.jsx';
import axios from 'axios';

export default function WordList({ wordList, fetch }) {

  // add edit and delete functionality

  let deleteHandler = (e) => {
    return axios.delete('/delete', {data: {text: e.target.name}})
      .then(() => {
        console.log('fetching');
        fetch();
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