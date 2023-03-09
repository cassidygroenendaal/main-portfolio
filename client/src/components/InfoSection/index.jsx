import React from 'react';

import About from '../../components/About';
import Contact from '../../components/Contact';

const InfoSection = props => {
  return (
    <div className='info-block'>
      <div className='row no-gutters'>
        <About />
        <Contact />
      </div>
    </div>
  );
};

export default InfoSection;
