import React from 'react';

const PortfolioInfo = ({
  children,
  title,
  imgURL,
  imgURLs = [],
  projectNum,
  siteURL,
  repoURL
}) => {
  return (
    <article data-project={projectNum} className='port-content__item'>
      <h4 className='port-content__title'>{title}</h4>
      <div className='button-group d-block mb-4'>
        {siteURL && (
          <a
            className='btn btn-outline-primary'
            href={siteURL}
            target='_blank'
            rel='noopener noreferrer'
          >
            Website
          </a>
        )}
        {repoURL && (
          <a
            className='btn btn-outline-success ml-2'
            href={repoURL}
            target='_blank'
            rel='noopener noreferrer'
          >
            Code
          </a>
        )}
      </div>
      {imgURL &&
      !imgURLs.length > 0 && (
        <div className='port-content__img-container'>
          <img className='port-content__img' src={imgURL} alt={title} />
        </div>
      )}
      {imgURLs.length > 0 && (
        <div className='port-content__img-container--array'>
          {imgURLs.map(img => (
            <div
              key={img.url}
              className='port-content__img-container port-content__img--array'
              style={{ flexBasis: img.flexBasis ? `${img.flexBasis}em` : 'auto' }}
            >
              <img className='port-content__img' src={img.url} alt={img.url} />
            </div>
          ))}
        </div>
      )}
      {children}
    </article>
  );
};

export default PortfolioInfo;
