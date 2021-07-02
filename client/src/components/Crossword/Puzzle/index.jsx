import React from 'react';

import { Word } from '../';

const Puzzle = ({ words, selectedWord, setSelectedWord }) => {

  const selectWord = index => {
    setSelectedWord(index);
  };

  const guessWordCorrectly = () => {
    setSelectedWord(-1);
  };

  return (
    <div>
      {words.map((w, i) => (
        <Word
          handleGuessWordCorrectly={guessWordCorrectly}
          word={w.word}
          handleSelectWord={selectWord}
          isSelected={i === selectedWord}
          key={w.word}
          index={i}
        />
      ))}
    </div>
  );
};

export default Puzzle;
