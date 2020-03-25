import React, { Component } from 'react';

import PortTile from '../../components/PortfolioTile';

class PortfolioGrid extends Component {
	render() {
		return (
			<div className="row no-gutters port-grid">
				<PortTile
					title="Road Trip DJ"
					projectNum={1}
					imgURL="/images/project-thumbs/RTDJ.png"
					onClick={this.props.onTileClick}
				/>
				<PortTile
					title="Beacon"
					projectNum={2}
					imgURL="/images/project-thumbs/Beacon.png"
					onClick={this.props.onTileClick}
				/>
				<PortTile
					title="ACNH Collecting Guide"
					projectNum={3}
					imgURL="/images/project-thumbs/acnh-desktop.jpg"
					onClick={this.props.onTileClick}
				/>
				<PortTile
					title="Gif Getter"
					projectNum={4}
					imgURL="/images/project-thumbs/Gif-Getter.PNG"
					onClick={this.props.onTileClick}
				/>
				<PortTile
					title="Bamazon"
					projectNum={5}
					imgURL="/images/project-thumbs/Bamazon.gif"
					onClick={this.props.onTileClick}
				/>
				<PortTile
					title="Event Hunter"
					projectNum={6}
					imgURL="/images/project-thumbs/Event-Hunter.PNG"
					onClick={this.props.onTileClick}
				/>
			</div>
		);
	}
}

export default PortfolioGrid;
