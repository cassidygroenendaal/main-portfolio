import React from "react";

function PortfolioInfo(props) {
  return (
    <article data-project={props.projectNum} className="port-content__item">
      <h4 className="port-content__title">{props.title}</h4>
      <div className="button-group d-block mb-4">
        {props.siteURL ? (
          <a
            className="btn btn-outline-primary"
            href={props.siteURL}
            target="_blank"
            rel="noopener noreferrer"
          >
            Website
          </a>
        ) : null}
        <a
          className="btn btn-outline-success ml-2"
          href={props.repoURL}
          target="_blank"
          rel="noopener noreferrer"
        >
          Code
        </a>
      </div>
      <img className="port-content__img" src={props.imgURL} alt={props.title}/>
      {props.children}
    </article>
  );
}

export default PortfolioInfo;
