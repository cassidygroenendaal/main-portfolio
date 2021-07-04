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
  const isIntersection = false;

  const handleKeyDown = e => {
    if (!isSelected) return;

    switch (e.key) {
      case 'Backspace':
        handleDelete(index);
        break;
      case ' ':
        if (isIntersection)
          handleNavigate({ cellIndex: index, shouldChangeIntersection: true });
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
        if (/^[a-zA-Z0-9]+$/.test(e.key)) handleEnterLetter(e.key.toUpperCase(), index);
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

  useEffect(() => {
    if (!letter.isAlphaNum) setIsFilledIn(true);
    // eslint-disable-next-line
  }, []);

  const cellClass = isSelected
    ? 'cw__cell--selected'
    : isWordSelected ? 'cw__word--selected' : '';

  return (
    <div className='cw__cell-wrapper'>
      {isFilledIn ? (
        <span className='cw__cell--filled'>{letter.character}</span>
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
