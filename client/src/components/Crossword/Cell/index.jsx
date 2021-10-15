import React, { useEffect, useState } from 'react';

const Cell = ({
  letter,
  index,
  value,
  isWordSelected,
  isSelected,
  isWordRight,
  isWordWrong,
  isVertical,
  handleClick,
  handleEnterLetter,
  handleDelete,
  handleNavigate
}) => {
  const [isFilledIn, setIsFilledIn] = useState(false);

  // const isHorizontal = true;
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
        if (!isVertical) handleNavigate({ cellIndex: index });
        break;
      case 'ArrowDown':
        if (isVertical) handleNavigate({ cellIndex: index });
        break;
      case 'ArrowLeft':
        if (!isVertical) handleNavigate({ cellIndex: index, isBackward: true });
        break;
      case 'ArrowUp':
        if (isVertical) handleNavigate({ cellIndex: index, isBackward: true });
        break;
      default:
        if (/^([a-zA-Z0-9]{1})$/.test(e.key))
          handleEnterLetter(e.key.toUpperCase(), index);
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  });

  useEffect(
    () => {
      if (!isFilledIn) setIsFilledIn(isWordRight);
    },
    // eslint-disable-next-line
    [isWordRight]
  );

  useEffect(() => {
    if (!letter.isAlphaNum) setIsFilledIn(true);
    // eslint-disable-next-line
  }, []);

  const cellClass = isSelected
    ? 'cw__cell--selected'
    : isWordSelected ? 'cw__word--selected' : '';

  const cellClassWrong = isSelected
    ? 'cw__cell--selected--wrong'
    : isWordSelected ? 'cw__word--selected--wrong' : '';

  return (
    <div className={`${isVertical ? '' : 'cw__cell-wrapper--horizontal'}`}>
      {isFilledIn ? (
        <span className='cw__cell--filled'>{letter.character}</span>
      ) : (
        <span
          role='textbox'
          className={`cw__cell ${isWordWrong ? cellClassWrong : cellClass}`}
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
