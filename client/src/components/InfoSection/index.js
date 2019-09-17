import React from 'react';

import About from '../../components/About';
import Contact from '../../components/Contact';

function InfoSection(props) {
	return (
		<div className="row">
			<About />
			<Contact />
		</div>
	);
}

export default InfoSection;
