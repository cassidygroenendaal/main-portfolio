import React, { Component } from 'react';

import HeroSection from '../../components/HeroSection';
import PortfolioSection from '../../components/PortfolioSection';
import InfoSection from '../../components/InfoSection';

class HomePage extends Component {
	render() {
		return (
			<div>
				<HeroSection />
				<PortfolioSection />
				<InfoSection />
			</div>
		);
	}
}

export default HomePage;
