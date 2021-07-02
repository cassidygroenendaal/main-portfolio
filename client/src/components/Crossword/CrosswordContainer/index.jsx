import React, { useState, useEffect } from 'react';

import API from '../../../lib/API';

import { Puzzle } from '../';

const CrosswordContainer = () => {
  const [puzzleWords, setPuzzleWords] = useState([]);
  const [puzzleTheme, setPuzzleTheme] = useState('');

  const puzzleThemes = [
    'forest',
    'farm',
    'ocean',
    'sky',
    'star',
    'magic',
    'animals',
    'desert'
  ];

  const generateCrossword = () => {
    const randIndex = Math.floor(Math.random() * puzzleThemes.length);

    setPuzzleTheme(puzzleThemes[randIndex]);
    generateWordList({ theme: puzzleThemes[randIndex], limit: 2 });
  };

  const generateWordList = async ({ theme, limit }) => {
    let generatedWords;
    await fetch(`https://api.datamuse.com/words?rel_trg=${theme}`)
      .then(res => res.json())
      .then(data => {
        generatedWords = data;
      });

    // if (generatedWords.length > limit) {
      // const uniqueWords = generatedWords.filter((v, i, a) => a.indexOf(v) === i);
      // const selectedWords = [];

      // while (selectedWords.length < limit) {
      //   const randIndex = Math.floor(Math.random() * uniqueWords.length);
      //   const newWord = uniqueWords[randIndex];
      //   uniqueWords.splice(randIndex, 1);
      //   selectedWords.push(newWord);
      // }

      // getDefinitions(selectedWords);
    // } else {
      getDefinitions(generatedWords.filter((v, i, a) => a.indexOf(v) === i), limit);
    // }
  };

  const getDefinitions = async (wordsToDefine, limit) => {
    const wordsToSet = await API.Crossword
      .getDefinitions(wordsToDefine, limit)
      .then(response => response.words)
      .catch(err => console.log(err));

    setPuzzleWords(wordsToSet);
  };

  const generateIntersections = () => {
    if (puzzleWords.length === 0) return;

    // console.log('Generating intersections');
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
