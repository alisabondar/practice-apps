import words from '../index.jsx';

export default function WordList({wordList}) {

  const words = wordList.map((word, index) =>
    <li key={index}>
      {word.word}- {word.def}
    </li>
  );

  return (
    <ul>
      {words}
    </ul>
  );
}