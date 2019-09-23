import React, { Component } from 'react';

import PortInfo from '../../components/PortfolioInfo';

class PortfolioContent extends Component {
	state = {};

	render() {
		return (
			<div className="row no-gutters port-content">
				<div>
					<PortInfo
						title="Road Trip DJ"
						projectNum={1}
						imgURL="/images/project-thumbs/proj-15-rtdj.png"
					/>
					<PortInfo
						title="Beacon"
						projectNum={2}
						imgURL="/images/project-thumbs/proj-13-beacon.png"
					/>
					<PortInfo
						title="Giphy API"
						projectNum={3}
						imgURL="/images/project-thumbs/proj-05-Giphy-API.PNG"
					/>
					<PortInfo
						title="Bamazon"
						projectNum={4}
						imgURL="/images/project-thumbs/proj-10-bamazon.gif"
					/>
					<PortInfo
						title="Event Hunter"
						projectNum={5}
						imgURL="/images/project-thumbs/proj-07-event-hunter.PNG"
					/>
					<PortInfo
						title="Comic Scraper"
						projectNum={6}
						imgURL="/images/project-thumbs/proj-14-scraper.png"
					/>
				</div>
				<button className="close-button" onClick={this.props.onCloseClick}>
					<i className="fas fa-times" />
					<span>Close</span>
				</button>
			</div>
		);
	}
}

export default PortfolioContent;
