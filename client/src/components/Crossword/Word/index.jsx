import React, { useState, useEffect } from 'react';

import { Cell } from '../';

const Word = ({
  puzzleWord,
  index,
  isSelected,
  handleSelectWord,
  handleGuessedWordCorrectly
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

  const onEnterLetter = (enteredKey, cellIndex) => {
    const guessedArray = [...guessedLetters];
    const newGuess = enteredKey.trim().split('')[0];

    // Set the new guess into the guessedLetters array
    guessedArray.splice(cellIndex, 1, newGuess);
    setGuessedLetters(guessedArray);

    moveSelection({ cellIndex });
  };

  const onDelete = cellIndex => {
    const guessedArray = [...guessedLetters];

    // Delete current letter if the cell is filled in
    if (guessedLetters[cellIndex]) {
      guessedArray.splice(cellIndex, 1, '');
    } else {
      // Delete the previous letter & move backward
      guessedArray.splice(cellIndex - 1, 1, '');
      moveSelection({ cellIndex, isBackward: true });
    }

    setGuessedLetters(guessedArray);
  };

  const onNavigate = ({ cellIndex, isBackward }) => {
    console.log('Navigating...');

    moveSelection({ cellIndex, isBackward });
  };

  const moveSelection = ({ cellIndex, isBackward }) => {
    if (isBackward) {
      if (cellIndex - 1 > 0) {
        setSelectedCell(cellIndex - 1);
      } else {
        setSelectedCell(0);
      }
    } else {
      if (cellIndex + 1 < puzzleWord.allLetters.length) {
        setSelectedCell(cellIndex + 1);
      }
    }
  };

  const checkSolution = () => {
    let isGuessCorrect = true;
    puzzleWord.allLetters.forEach((letter, i) => {
      if (letter !== guessedLetters[i]) isGuessCorrect = false;
    });

    if (isGuessCorrect) {
      setIsWordGuessed(true);
      handleGuessedWordCorrectly();
    }
  };

  const clearWord = () => {
    setGuessedLetters(puzzleWord.allLetters.map(letter => ''));
  };

  // Reset word on initial load
  useEffect(() => {
    clearWord();
    // eslint-disable-next-line
  }, []);

  // See if word has been completely guessed
  useEffect(
    () => {
      let shouldCheckSolution = true;

      guessedLetters.forEach(letter => {
        if (!letter) shouldCheckSolution = false;
      });

      if (shouldCheckSolution) checkSolution();
    },
    // eslint-disable-next-line
    [guessedLetters]
  );

  // Render
  return (
    <div>
      {puzzleWord.allLetters.map((letter, i) => (
        <Cell
          isWordSelected={isSelected}
          isSelected={isSelected && i === selectedCell}
          isWordGuessed={isWordGuessed}
          letter={letter}
          value={guessedLetters[i]}
          handleClick={onClickCell}
          handleEnterLetter={onEnterLetter}
          handleDelete={onDelete}
          handleNavigate={onNavigate}
          index={i}
          key={`${index}-${letter}-${i}`}
        />
      ))}
    </div>
  );
};

export default Word;
