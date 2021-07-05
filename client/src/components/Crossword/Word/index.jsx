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
  const [isWordRight, setIsWordRight] = useState(false);
  const [isWordWrong, setIsWordWrong] = useState(false);

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
    const newGuess = enteredKey;

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
      setGuessedLetters(guessedArray);
    } else {
      // Delete the previous letter & move backward
      moveSelection({ cellIndex, isBackward: true, isDelete: true });
    }
  };

  const onNavigate = ({ cellIndex, isBackward, shouldChangeIntersection }) => {
    if (shouldChangeIntersection) {
      console.log('Changing intersection...');
      return;
    }

    moveSelection({ cellIndex, isBackward });
  };

  const moveSelection = ({ cellIndex, isBackward, isDelete }) => {
    const guessedArray = [...guessedLetters];
    let amountToMove = 1;

    if (isBackward) {
      // Try to move backward
      if (cellIndex === puzzleWord.firstIndex) {
        if (isDelete) guessedArray.splice(puzzleWord.firstIndex, 1, '');
        return;
      }

      // find last cell that is alphanumeric
      let nextCell = -1;

      for (let i = cellIndex - 1; nextCell < 0; i--) {
        if (puzzleWord.letters[i].isAlphaNum) nextCell = i;
      }

      amountToMove = cellIndex - nextCell;

      if (cellIndex - amountToMove >= puzzleWord.firstIndex) {
        if (isDelete) {
          guessedArray.splice(cellIndex - amountToMove, 1, '');
          setGuessedLetters(guessedArray);
        }
        setSelectedCell(cellIndex - amountToMove);
      } else {
        if (isDelete) {
          guessedArray.splice(puzzleWord.firstIndex, 1, '');
          setGuessedLetters(guessedArray);
        }
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
      setIsWordWrong(false);
      setIsWordRight(true);
      handleGuessedWordCorrectly();
    } else {
      setIsWordWrong(true);
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
        if (!letter) {
          shouldCheckSolution = false;
          setIsWordWrong(false);
        }
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
          isWordRight={isWordRight}
          isWordWrong={isWordWrong}
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
