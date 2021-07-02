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
      {puzzleWords.map((w, i) => (
        <Word
          handleGuessWordCorrectly={guessWordCorrectly}
          puzzleWord={w}
          handleSelectWord={selectWord}
          isSelected={i === selectedWord}
          key={`${w.words.join('')}-${i}`}
          index={i}
        />
      ))}
    </div>
  );
};

export default Puzzle;
