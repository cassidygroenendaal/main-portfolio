import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class PortfolioTile extends Component {
	render() {
		return (
			<Link to={`/code/project/${this.props.projectNum}`}>
				<div className="card">
					<h5 className="card-title">{this.props.title}</h5>
					<p className="card-text">I am some card text</p>
				</div>
			</Link>
		);
	}
}

export default PortfolioTile;
