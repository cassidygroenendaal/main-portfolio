import React, { Component } from 'react';

import HeroSection from '../../components/HeroSection';
import PortfolioSection from '../../components/PortfolioSection';
import InfoSection from '../../components/InfoSection';

class HomePage extends Component {
	render() {
		return (
			<div className="row">
				<div className="col">
					<HeroSection />
					<PortfolioSection />
					<InfoSection />
				</div>
			</div>
		);
	}
}

export default HomePage;
