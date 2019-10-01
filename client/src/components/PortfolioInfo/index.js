import React from "react";

function PortfolioInfo(props) {
  return (
    <article data-project={props.projectNum} className="port-content__item">
      <h3 className="port-content__title">{props.title}</h3>
      {props.children}
      <div className="btn-group">
        {props.siteURL ? (
          <a
            className="btn btn-primary"
            href={props.siteURL}
            target="_blank"
            rel="noopener noreferrer"
          >
            Website
          </a>
        ) : null}
        <a
          className="btn btn-success"
          href={props.repoURL}
          target="_blank"
          rel="noopener noreferrer"
        >
          Code
        </a>
      </div>
    </article>
  );
}

export default PortfolioInfo;
