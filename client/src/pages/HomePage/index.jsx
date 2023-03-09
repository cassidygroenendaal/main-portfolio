import React from 'react';

import HeroSection from '../../components/HeroSection';
import PortfolioSection from '../../components/PortfolioSection';
import InfoSection from '../../components/InfoSection';

const HomePage = props => {
  return (
    <div className='main'>
      <HeroSection />
      <PortfolioSection />
      <InfoSection />
    </div>
  );
};

export default HomePage;
