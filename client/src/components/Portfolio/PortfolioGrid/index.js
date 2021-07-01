import React from 'react';

import { PortfolioTile } from '../';

const PortfolioGrid = ({ onTileClick }) => {
  return (
    <div className='row no-gutters port-grid'>
      <PortfolioTile
        title='Road Trip DJ'
        projectNum={1}
        imgURL='/images/project-thumbs/RTDJ.png'
        onClick={onTileClick}
      />
      <PortfolioTile
        title='Beacon'
        projectNum={2}
        imgURL='/images/project-thumbs/Beacon.png'
        onClick={onTileClick}
      />
      <PortfolioTile
        title='ACNH Collecting Guide'
        projectNum={3}
        imgURL='/images/project-thumbs/acnh-desktop.jpg'
        onClick={onTileClick}
      />
      <PortfolioTile
        title='Crossword Puzzler'
        projectNum={4}
        imgURL='/images/project-thumbs/Gif-Getter.PNG'
        onClick={onTileClick}
      />
      <PortfolioTile
        title='Bamazon'
        projectNum={5}
        imgURL='/images/project-thumbs/Bamazon.gif'
        onClick={onTileClick}
      />
      <PortfolioTile
        title='Event Hunter'
        projectNum={6}
        imgURL='/images/project-thumbs/Event-Hunter.PNG'
        onClick={onTileClick}
      />
    </div>
  );
};

export default PortfolioGrid;
