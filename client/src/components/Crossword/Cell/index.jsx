import React, { useEffect, useState } from 'react';

const Cell = ({
  letter,
  index,
  value,
  isWordSelected,
  isSelected,
  isWordGuessed,
  handleClick,
  handleEnterLetter,
  handleDelete,
  handleNavigate
}) => {
  const [isFilledIn, setIsFilledIn] = useState(false);

  const isHorizontal = true;
  // const isIntersection = false;

  const handleKeyDown = e => {
    if (!isSelected) return;

    switch (e.key) {
      case 'Backspace':
        handleDelete(index);
        break;
      case ' ':
        console.log("Pressed Spacebar")
        break;
      case 'ArrowRight':
        if (isHorizontal) handleNavigate({ cellIndex: index });
        break;
      case 'ArrowDown':
        if (!isHorizontal) handleNavigate({ cellIndex: index });
        break;
      case 'ArrowLeft':
        if (isHorizontal) handleNavigate({ cellIndex: index, isBackward: true });
        break;
      case 'ArrowUp':
        if (!isHorizontal) handleNavigate({ cellIndex: index, isBackward: true });
        break;
      default:
        handleEnterLetter(e.key.toUpperCase(), index);
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  });

  useEffect(
    () => {
      if (!isFilledIn) setIsFilledIn(isWordGuessed);
    },
    // eslint-disable-next-line
    [isWordGuessed]
  );

  const cellClass = isSelected
    ? 'cw__cell--selected'
    : isWordSelected ? 'cw__word--selected' : '';

  return (
    <div className='cw__cell-wrapper'>
      {isFilledIn ? (
        <span className='cw__cell--filled'>{letter}</span>
      ) : (
        <span
          role='textbox'
          className={`cw__cell ${cellClass}`}
          onClick={handleClick}
          data-cell-index={index}
        >
          {value}
        </span>
      )}
    </div>
  );
};

export default Cell;
