import React from 'react';

function PortfolioTile(props) {
	return (
		<div className="col-lg-4 col-md-6 col-12 port-tile">
			<div
				className="d-block port-item"
				onClick={props.onClick}
				data-project={props.projectNum}
			>
				<img
					className="port-item__image"
					src={props.imgURL}
					alt={props.title}
				/>
				<div className="port-item__overlay d-flex flex-column justify-content-center align-items-center">
					<h5 className="overlay__title">{props.title}</h5>
					<p className="overlay__text">Click To Read More...</p>
				</div>
				<div className="port-item__dummy-overlay"></div>
			</div>
		</div>
	);
}

export default PortfolioTile;
