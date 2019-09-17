import React, { Component } from 'react';

import PortTile from '../../components/PortfolioTile';

class HomePage extends Component {
	render() {
		return (
			<div className="Home">
				<div className="row">
					<div className="col">
						<h1>Home Page</h1>
						<h4>Hero</h4>
						<h4>Portfolio Grid</h4>
						<PortTile title="Project 1" projectNum={1} />
						<PortTile title="Project 2" projectNum={2} />
						<PortTile title="Project 3" projectNum={3} />
						<PortTile title="Project 4" projectNum={4} />
						<h4>About</h4>
						<h4>Contact</h4>
					</div>
				</div>
			</div>
		);
	}
}

export default HomePage;
