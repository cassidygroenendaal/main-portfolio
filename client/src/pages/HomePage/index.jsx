import React, { Component } from 'react';

import HeroSection from '../../components/HeroSection';
import { PortfolioSection } from '../../components/Portfolio';
import InfoSection from '../../components/InfoSection';

class HomePage extends Component {
  render() {
    return (
      <div className='main'>
        <HeroSection />
        <PortfolioSection />
        <InfoSection />
      </div>
    );
  }
}

export default HomePage;
