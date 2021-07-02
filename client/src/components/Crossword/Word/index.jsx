import React, { useState, useEffect } from 'react';

import { Cell } from '../';

const Word = ({
  word,
  index,
  isSelected,
  handleSelectWord,
  handleGuessWordCorrectly
}) => {
  const [selectedCell, setSelectedCell] = useState(-1);
  const [guessedLetters, setGuessedLetters] = useState([]);
  const [isWordGuessed, setIsWordGuessed] = useState(false);

  const solutionArray = word.split('');

  const selectCell = cellIndex => {
    if (!isSelected) {
      handleSelectWord(index);
      setSelectedCell(0);
      return;
    }

    setSelectedCell(cellIndex);
  };

  const onClickCell = e => {
    e.preventDefault();
    selectCell(parseInt(e.currentTarget.dataset.cellIndex));
  };

  const onChange = (key, index) => {
    const guessedArray = [...guessedLetters];
    const newGuess = key.trim().split('')[0];

    // Handle if user entered a space
    if (newGuess === undefined) return;

    // Set the new guess into the guessedLetters array
    guessedArray.splice(index, 1, newGuess);
    setGuessedLetters(guessedArray);

    if (index + 1 < solutionArray.length) {
      setSelectedCell(index + 1);
    } else {
      setSelectedCell(-1);
      checkSolution(guessedArray);
    }
  };

  const checkSolution = guessedArray => {
    let isGuessCorrect = true;
    solutionArray.forEach((letter, i) => {
      if (letter !== guessedArray[i]) isGuessCorrect = false;
    });

    if (isGuessCorrect) {
      setIsWordGuessed(true);
      handleGuessWordCorrectly();
    }
  };

  useEffect(() => {
    setGuessedLetters(solutionArray.map(letter => ''));
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      {solutionArray.map((letter, i) => (
        <Cell
          isWordSelected={isSelected}
          isSelected={isSelected && i === selectedCell}
          isWordGuessed={isWordGuessed}
          letter={letter}
          value={guessedLetters[i]}
          handleChange={onChange}
          handleClick={onClickCell}
          index={i}
          key={`${index}-${letter}-${i}`}
        />
      ))}
    </div>
  );
};

export default Word;
