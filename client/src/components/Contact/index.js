import React from 'react';

import ContactItem from '../ContactItem';

function Contact(props) {
	return (
		<div className="col-lg-6 col-12 contact">
			<div className="mx-5 h-100 d-flex flex-column justify-content-center align-items-center">
				<h2 className="display-4 mb-5">Contact</h2>
				<div className="contact__items">
					<ContactItem href="#" text="URL 1" />
					<ContactItem href="#" text="URL 2" />
					<ContactItem href="#" text="URL 3" />
				</div>
			</div>
		</div>
	);
}

export default Contact;
