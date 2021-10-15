import React from 'react';

import { Word } from '../';

const Puzzle = ({ puzzleWords, selectedWord, setSelectedWord }) => {
  const selectWord = index => {
    setSelectedWord(index);
  };

  const guessWordCorrectly = () => {
    setSelectedWord(-1);
  };

  console.log('Puzzle Words in Puzzle:', puzzleWords);

  return (
    <div style={{ position: 'relative', backgroundColor: 'pink', height: '200px'}}>
      {puzzleWords.map((puzzleWord, i) => (
        <Word
          startY={i * 30}
          handleGuessedWordCorrectly={guessWordCorrectly}
          puzzleWord={puzzleWord}
          handleSelectWord={selectWord}
          isSelected={i === selectedWord}
          key={`${puzzleWord.word}-${i}`}
          index={i}
        />
      ))}
    </div>
  );
};

export default Puzzle;
