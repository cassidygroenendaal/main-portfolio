import React from 'react';

const PortfolioTile = ({ title, imgURL, projectNum, onClick }) => {
  return (
    <div className='col-lg-4 col-md-6 col-12 port-tile'>
      <div className='d-block port-item' onClick={onClick} data-project={projectNum}>
        <img className='port-item__image' src={imgURL} alt={title} />
        <div className='port-item__overlay d-flex flex-column justify-content-center align-items-center'>
          <h5 className='overlay__title'>{title}</h5>
          <p className='overlay__text'>Click To Read More...</p>
        </div>
        <div className='port-item__dummy-overlay' />
      </div>
    </div>
  );
};

export default PortfolioTile;
