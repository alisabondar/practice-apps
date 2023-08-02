import { useState } from 'react';
import axios from 'axios';

export default function Add() {
  const [word, setWord] = useState('');

  let handleClick = () => {
    axios.post('/dict', {data: word})
      .catch(err => console.error(err));
  }

  return(
    <div>
      <input
        value={word}
        onChange={e => setWord(e.target.value)}
        placeholder= 'Add word here...'
      />
      <button onClick={handleClick}>Add</button>
    </div>
  );
}