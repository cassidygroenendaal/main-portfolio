import React from 'react';

import { Cell } from '../';

const Word = ({ word }) => {
  const letters = word.split('');

  return (
    <div>
      {letters.map((letter, i) => <Cell key={`${letter}-${i}`} letter={letter} />)}
    </div>
  );
};

export default Word;
