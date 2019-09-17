import React from 'react';

import PortGrid from '../../components/PortfolioGrid';

function PortfolioSection(props) {
	return (
		<div className="portfolio px-lg-5 px-md-4 px-0">
			<h1 className="display-4 mb-5">My Work</h1>
			<PortGrid />
		</div>
	);
}

export default PortfolioSection;
