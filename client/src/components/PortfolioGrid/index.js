import React from 'react';

import PortTile from '../../components/PortfolioTile';

function PortfolioGrid(props) {
	return (
		<div className="container px-0">
			<div className="row no-gutters port-grid">
				<PortTile title="Project 1" projectNum={1} />
				<PortTile title="Project 2" projectNum={2} />
				<PortTile title="Project 3" projectNum={3} />
				<PortTile title="Project 4" projectNum={4} />
				<PortTile title="Project 5" projectNum={5} />
				<PortTile title="Project 6" projectNum={6} />
			</div>
		</div>
	);
}

export default PortfolioGrid;
