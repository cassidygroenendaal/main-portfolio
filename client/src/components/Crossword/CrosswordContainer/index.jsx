import React, { useState, useEffect } from 'react';

import API from '../../../lib/API';

import { Puzzle, ClueContainer } from '../';

const CrosswordContainer = () => {
  const [puzzleWords, setPuzzleWords] = useState([]);
  const [puzzleTheme, setPuzzleTheme] = useState('');
  const [selectedWord, setSelectedWord] = useState(-1);

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

    getDefinitions(generatedWords.filter((v, i, a) => a.indexOf(v) === i), limit);
  };

  const getDefinitions = async (wordsToDefine, limit) => {
    const wordsToSet = await API.Crossword
      .getDefinitions(wordsToDefine, limit)
      .then(response => response.words)
      .catch(err => console.log(err));

    console.log(wordsToSet);
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
      {puzzleWords.length > 0 && (
        <div>
          <Puzzle
            puzzleWords={puzzleWords}
            selectedWord={selectedWord}
            setSelectedWord={setSelectedWord}
          />
          <ClueContainer clues={puzzleWords} selectedClue={selectedWord} />
        </div>
      )}
    </div>
  );
};

export default CrosswordContainer;
