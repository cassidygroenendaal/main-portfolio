import React, { useEffect, useState } from 'react';

const Cell = ({
  letter,
  index,
  value,
  isWordSelected,
  isSelected,
  isWordGuessed,
  handleChange,
  handleClick,
}) => {
  const [isFilledIn, setIsFilledIn] = useState(false);

  // const hasVerticalNeighboors = false;
  // const hasHorizontalNeighboors = true;

  const handleKeyUp = e => {
    if (!isSelected) return;
    
    // If keys are alphabetic, try to enter them
    if (e.key === 'Backspace') {
      handleChange('', index);
    } else {
      handleChange(e.key.toUpperCase(), index);
    }
  };

  useEffect(() => {
    window.addEventListener('keyup', handleKeyUp);
    return () => window.removeEventListener('keyup', handleKeyUp);
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

    // console.log(`Cell for letter ${letter} is${isSelected ? ' ' : ' not'} selected`)

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
