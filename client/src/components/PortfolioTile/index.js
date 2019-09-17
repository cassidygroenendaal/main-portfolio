import React, { Component } from 'react';
import { Link } from 'react-router-dom';

function PortfolioTile(props) {
	return (
		<Link to={`/code/project/${props.projectNum}`}>
			<div className="card">
				<h5 className="card-title">{props.title}</h5>
				<p className="card-text">I am some card text</p>
			</div>
		</Link>
	);
}

export default PortfolioTile;
