import { useState } from 'react';
import words from '../index.jsx';
import axios from 'axios';

export default function WordList({ wordList, fetch }) {

  // add edit and delete functionality

  let deleteHandler = (e) => {
    axios.delete('/delete', {data: {text: e.target.name}})
      .then(() => {
        fetch();
      })
      .catch(err => console.log('Cannot delete', err));
  }

  let editHandler = (e) => {
    // need to send two things: og word and new word
    var chosenWord = e.target.name;
    // create pop up for new word search

    var newDef = prompt('Please enter new definition:');

    axios.put('/put', {data: [chosenWord, newDef]})
      .then(() => {
        fetch();
      })
      .catch(err => console.log('Cannot edit', err));
  }

  const words = wordList.map((word, index) =>
    <li key={index}>
      {word.text}- {word.definition}
      {/* <label onClick={deleteHandler}>
        <input name={word.text} />
      </label> */}
      <button name={word.text} onClick={deleteHandler}>delete</button>
      <button name={word.text} onClick={editHandler}>edit</button>
    </li>
  );

  return (
    <ul>
      {words}
    </ul>
  );
}