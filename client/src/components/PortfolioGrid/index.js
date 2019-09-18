import React from 'react';

import PortTile from '../../components/PortfolioTile';

function PortfolioGrid(props) {
	return (
		<div className="row no-gutters port-grid">
			<PortTile
				title="Road Trip DJ"
				projectNum={1}
				imgURL="/images/project-thumbs/proj-15-rtdj.png"
			/>
			<PortTile
				title="Beacon"
				projectNum={2}
				imgURL="/images/project-thumbs/proj-13-beacon.png"
			/>
			<PortTile
				title="Giphy API"
				projectNum={3}
				imgURL="/images/project-thumbs/proj-05-Giphy-API.PNG"
			/>
			<PortTile
				title="Bamazon"
				projectNum={4}
				imgURL="/images/project-thumbs/proj-10-bamazon.gif"
			/>
			<PortTile
				title="Event Hunter"
				projectNum={5}
				imgURL="/images/project-thumbs/proj-07-event-hunter.PNG"
			/>
			<PortTile
				title="Comic Scraper"
				projectNum={6}
				imgURL="/images/project-thumbs/proj-14-scraper.png"
			/>
		</div>
	);
}

export default PortfolioGrid;
