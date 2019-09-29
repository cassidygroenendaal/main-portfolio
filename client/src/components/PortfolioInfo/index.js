import React from "react";

function PortfolioInfo(props) {
  return (
    <article data-project={props.projectNum} className="port-content__item">
      <h3>{props.title}</h3>
      {props.children}
      <div className="btn-group">
        {props.siteURL ? (
          <a
            className="btn btn-primary"
            href={props.siteURL}
            target="_blank"
            rel="noopener noreferrer"
          >
            View in Browser
          </a>
        ) : null}
        <a
          className="btn btn-success"
          href={props.repoURL}
          target="_blank"
          rel="noopener noreferrer"
        >
          View Repository
        </a>
      </div>
    </article>
  );
}

export default PortfolioInfo;
