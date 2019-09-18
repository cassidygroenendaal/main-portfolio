import React from 'react';

import PortGrid from '../../components/PortfolioGrid';

function PortfolioSection(props) {
	return (
		<div className="portfolio">
			<h1 className="display-4 mb-5">My Work</h1>
			<PortGrid />
		</div>
	);
}

export default PortfolioSection;
