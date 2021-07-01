import React from 'react';

const PortfolioInfo = ({ children, title, imgURL, projectNum, siteURL, repoURL }) => {
  return (
    <article data-project={projectNum} className='port-content__item'>
      <h4 className='port-content__title'>{title}</h4>
      <div className='button-group d-block mb-4'>
        {siteURL ? (
          <a
            className='btn btn-outline-primary'
            href={siteURL}
            target='_blank'
            rel='noopener noreferrer'
          >
            Website
          </a>
        ) : null}
        <a
          className='btn btn-outline-success ml-2'
          href={repoURL}
          target='_blank'
          rel='noopener noreferrer'
        >
          Code
        </a>
      </div>
      <img className='port-content__img' src={imgURL} alt={title} />
      {children}
    </article>
  );
};

export default PortfolioInfo;
