import words from '../index.jsx';

export default function WordList({wordList}) {

  const words = wordList.map((word, index) =>
    <li key={index}>
      {word.text}- {word.definition}
    </li>
  );

  return (
    <ul>
      {words}
    </ul>
  );
}