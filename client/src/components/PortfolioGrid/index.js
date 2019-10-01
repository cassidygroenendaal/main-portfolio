import React, { Component } from 'react';

import PortTile from '../../components/PortfolioTile';

class PortfolioGrid extends Component {
	render() {
		return (
			<div className="row no-gutters port-grid">
				<PortTile
					title="Road Trip DJ"
					projectNum={1}
					imgURL="/images/project-thumbs/proj-15-rtdj.png"
					onClick={this.props.onTileClick}
				/>
				<PortTile
					title="Beacon"
					projectNum={2}
					imgURL="/images/project-thumbs/proj-13-beacon.png"
					onClick={this.props.onTileClick}
				/>
				<PortTile
					title="Gif Getter"
					projectNum={3}
					imgURL="/images/project-thumbs/proj-05-Giphy-API.PNG"
					onClick={this.props.onTileClick}
				/>
				<PortTile
					title="Bamazon"
					projectNum={4}
					imgURL="/images/project-thumbs/proj-10-bamazon.gif"
					onClick={this.props.onTileClick}
				/>
				<PortTile
					title="Event Hunter"
					projectNum={5}
					imgURL="/images/project-thumbs/proj-07-event-hunter.PNG"
					onClick={this.props.onTileClick}
				/>
				<PortTile
					title="Comic Scraper"
					projectNum={6}
					imgURL="/images/project-thumbs/proj-14-scraper.png"
					onClick={this.props.onTileClick}
				/>
			</div>
		);
	}
}

export default PortfolioGrid;
