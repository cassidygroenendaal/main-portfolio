import React from 'react';
import { Link } from 'react-router-dom';

function PortfolioTile(props) {
	return (
		<div className="col-lg-4 col-md-6 col-12">
			<Link
				to={`/code/project/${props.projectNum}`}
				className="d-block port-item"
			>
				<img className="port-item__image" src={props.imgURL} alt={props.title} />
				<div className="port-item__overlay d-flex flex-column justify-content-center align-items-center">
					<h5 className="overlay__title">{props.title}</h5>
					<p className="overlay__text">Read More...</p>
				</div>
			</Link>
		</div>
	);
}

export default PortfolioTile;
