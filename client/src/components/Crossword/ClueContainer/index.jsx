import React from 'react';

const ClueContainer = ({ puzzleWords, selectedClue }) => {
  return (
    <div>
      {puzzleWords.map((w, i) => (
        <p className={selectedClue !== i ? 'hidden' : ''} key={`${w.word}-${i}`} index={i}>
          {w.clue.text} ({w.clue.count.join(', ')})
        </p>
      ))}
    </div>
  );
};

export default ClueContainer;
