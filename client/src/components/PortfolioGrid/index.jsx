import React from 'react';

import PortTile from '../../components/PortfolioTile';

const PortfolioGrid = ({ onTileClick }) => {
  return (
    <div className='row no-gutters port-grid'>
      <PortTile
        title='Bank of America'
        projectNum={1}
        imgURL='/images/project-thumbs/bank-of-america.jpg'
        onClick={onTileClick}
      />
      <PortTile
        title='Game Development'
        projectNum={2}
        imgURL='/images/project-thumbs/wdg-clip.gif'
        onClick={onTileClick}
      />
      <PortTile
        title='Pop Star Runner'
        projectNum={3}
        imgURL='/images/project-thumbs/pop-star-runner-1.png'
        onClick={onTileClick}
      />
      <PortTile
        title='ACNH Collecting Guide'
        projectNum={4}
        imgURL='/images/project-thumbs/acnh-desktop.png'
        onClick={onTileClick}
      />
      <PortTile
        title='Road Trip DJ'
        projectNum={5}
        imgURL='/images/project-thumbs/RTDJ.png'
        onClick={onTileClick}
      />
      <PortTile
        title='Event Hunter'
        projectNum={6}
        imgURL='/images/project-thumbs/Event-Hunter.PNG'
        onClick={onTileClick}
      />
    </div>
  );
};

export default PortfolioGrid;
