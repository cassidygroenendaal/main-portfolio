import React, { useState, useEffect } from 'react';

import { Puzzle } from '../';

const CrosswordContainer = () => {
  const [puzzleWords, setPuzzleWords] = useState([]);
  const [puzzleTheme, setPuzzleTheme] = useState('forest');

  const generateCrossword = () => {
    generateWordList({ theme: puzzleTheme, limit: 10 });
  };

  const generateWordList = async ({ theme, limit }) => {
    let generatedWords;
    await fetch(`https://api.datamuse.com/words?rel_trg=${theme}`)
      .then(res => res.json())
      .then(data => {
        generatedWords = data;
      });

    if (generatedWords.length > limit) {
      const uniqueWords = generatedWords.filter((v, i, a) => a.indexOf(v) === i);
      const selectedWords = [];

      while (selectedWords.length < limit) {
        const randIndex = Math.floor(Math.random() * uniqueWords.length);
        const newWord = uniqueWords[randIndex];
        uniqueWords.splice(randIndex, 1);
        selectedWords.push(newWord);
      }

      setPuzzleWords(selectedWords);
    } else {
      setPuzzleWords(generatedWords.filter((v, i, a) => a.indexOf(v) === i));
    }
  };

  const generateIntersections = () => {
    if (puzzleWords.length === 0) return;

    console.log('Generating intersections');
  };

  useEffect(
    () => generateIntersections(),
    // eslint-disable-next-line
    [puzzleWords]
  );

  return (
    <div>
      <h1>{puzzleTheme}</h1>
      <button onClick={generateCrossword}>Generate Crossword</button>
      <Puzzle words={puzzleWords} />
    </div>
  );
};

export default CrosswordContainer;
