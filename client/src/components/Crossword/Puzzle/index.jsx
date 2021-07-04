import React from 'react';

import { Word } from '../';

const Puzzle = ({ puzzleWords, selectedWord, setSelectedWord }) => {
  const selectWord = index => {
    setSelectedWord(index);
  };

  const guessWordCorrectly = () => {
    setSelectedWord(-1);
  };

  return (
    <div>
      {puzzleWords.map((puzzleWord, i) => (
        <Word
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
