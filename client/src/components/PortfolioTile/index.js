import React from 'react';
import { Link } from 'react-router-dom';

function PortfolioTile(props) {
	return (
		<div className="col-lg-4 col-md-6 col-12">
			<Link to={`/code/project/${props.projectNum}`}>
				<div className="card">
					<h5 className="card-title">{props.title}</h5>
					<p className="card-text">I am some card text</p>
				</div>
			</Link>
		</div>
	);
}

export default PortfolioTile;
