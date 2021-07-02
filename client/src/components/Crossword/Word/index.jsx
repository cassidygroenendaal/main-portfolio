import React, { useState, useEffect } from 'react';

import { Cell } from '../';

const Word = ({
  puzzleWord,
  index,
  isSelected,
  handleSelectWord,
  handleGuessWordCorrectly
}) => {
  const [selectedCell, setSelectedCell] = useState(-1);
  const [guessedLetters, setGuessedLetters] = useState([]);
  const [isWordGuessed, setIsWordGuessed] = useState(false);

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

  const onChange = (enteredKey, cellIndex) => {
    const guessedArray = [...guessedLetters];
    const newGuess = enteredKey.trim().split('')[0];

    // Set the new guess into the guessedLetters array
    guessedArray.splice(cellIndex, 1, newGuess);
    setGuessedLetters(guessedArray);

    // Move selection backward if deleting letters
    if (enteredKey === '') {
      moveSelection({ cellIndex, isBackward: true });
    } else {
      moveSelection({ cellIndex, shouldCheckSolution: true, guessedArray });
    }
  };

  const moveSelection = ({
    cellIndex,
    isBackward,
    shouldCheckSolution,
    guessedArray
  }) => {
    if (isBackward) {
      if (cellIndex - 1 > 0) {
        setSelectedCell(cellIndex - 1);
      } else {
        setSelectedCell(0);
      }
    } else {
      if (cellIndex + 1 < puzzleWord.allLetters.length) {
        setSelectedCell(cellIndex + 1);
      } else {
        setSelectedCell(-1);
        if (shouldCheckSolution) checkSolution(guessedArray);
      }
    }
  };

  const checkSolution = guessedArray => {
    let isGuessCorrect = true;
    puzzleWord.allLetters.forEach((letter, i) => {
      if (letter !== guessedArray[i]) isGuessCorrect = false;
    });

    if (isGuessCorrect) {
      setIsWordGuessed(true);
      handleGuessWordCorrectly();
    }
  };

  const clearWord = () => {
    setGuessedLetters(puzzleWord.allLetters.map(letter => ''));
  };

  useEffect(() => {
    clearWord();
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      {puzzleWord.allLetters.map((letter, i) => (
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
