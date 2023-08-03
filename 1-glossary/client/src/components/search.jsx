import { useState } from 'react';

export default function Search({ handleSearch }) {
  const [search, setSearch] = useState('');

  // use form every time u need value AND click event
  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      handleSearch(search);
      }}>
      <input onChange={e => setSearch(e.target.value)} placeholder='Type in a word...'/>
      <button>Search</button>
    </form>
  );
}