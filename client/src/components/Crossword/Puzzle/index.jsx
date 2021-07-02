import React, { useState } from 'react';

import { Word } from '../';

const Puzzle = ({ words }) => {
  const [selectedWord, setSelectedWord] = useState(-1);

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
