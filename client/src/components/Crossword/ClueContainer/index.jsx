import React from 'react';

const ClueContainer = ({ clues, selectedClue }) => {
  return (
    <div>
      {clues.map((c, i) => (
        <p className={selectedClue !== i ? 'hidden' : ''} word={c.clue} key={c.word} index={i}>
          {c.clue}
        </p>
      ))}
    </div>
  );
};

export default ClueContainer;
