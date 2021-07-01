import React from 'react';

import { Word } from '../';

const Puzzle = ({ words }) => {
  return <div>{words.map(w => <Word key={w.word} word={w.word} />)}</div>;
};

export default Puzzle;
