import React from 'react';

const Cell = ({ letter }) => {
  return <input className="cw__cell" type='text' placeholder={letter} />;
};

export default Cell;
