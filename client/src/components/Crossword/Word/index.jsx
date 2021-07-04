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
      setSelectedCell(puzzleWord.firstIndex);
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

  const onNavigate = ({ cellIndex, isBackward, shouldChangeIntersection }) => {
    if (shouldChangeIntersection) {
      console.log('Changing intersection...');
      return;
    }

    moveSelection({ cellIndex, isBackward });
  };

  const moveSelection = ({ cellIndex, isBackward }) => {
    let amountToMove = 1;

    if (isBackward) {
      // Try to move backward
      if (cellIndex === puzzleWord.firstIndex) return;
      // find last cell that is alphanumeric
      let nextCell = -1;

      for (let i = cellIndex - 1; nextCell < 0; i--) {
        if (puzzleWord.letters[i].isAlphaNum) nextCell = i;
      }

      amountToMove = cellIndex - nextCell;

      if (cellIndex - amountToMove >= puzzleWord.firstIndex) {
        setSelectedCell(cellIndex - amountToMove);
      } else {
        setSelectedCell(puzzleWord.firstIndex);
      }
    } else {
      // Try to move forward
      if (cellIndex === puzzleWord.lastIndex) return;

      // find next cell that is alphanumeric
      let nextCell = -1;

      for (let i = cellIndex + 1; nextCell < 0; i++) {
        if (puzzleWord.letters[i].isAlphaNum) nextCell = i;
      }

      amountToMove = nextCell - cellIndex;

      if (cellIndex + amountToMove <= puzzleWord.lastIndex) {
        setSelectedCell(cellIndex + amountToMove);
      } else {
        setSelectedCell(puzzleWord.lastIndex);
      }
    }
  };

  const checkSolution = () => {
    let isGuessCorrect = true;
    puzzleWord.letters.forEach((letter, i) => {
      if (letter.character !== guessedLetters[i]) isGuessCorrect = false;
    });

    if (isGuessCorrect) {
      setIsWordGuessed(true);
      handleGuessedWordCorrectly();
    }
  };

  const clearWord = () => {
    setGuessedLetters(
      puzzleWord.letters.map(letter => {
        if (letter.isAlphaNum) return '';
        else return letter.character;
      })
    );
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
      {puzzleWord.letters.map((letter, i) => (
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
          key={`${index}-${letter.character}-${i}`}
        />
      ))}
    </div>
  );
};

export default Word;
