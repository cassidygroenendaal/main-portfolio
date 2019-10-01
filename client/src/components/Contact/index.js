import React from 'react';

import ContactItem from '../ContactItem';

function Contact(props) {
	return (
		<div className="col-lg-6 col-12 contact">
			<div className="mx-5 h-100 d-flex flex-column justify-content-center align-items-center">
				<h2 className="display-4 mb-5 info__title contact__title">Contact</h2>
				<div className="contact__items">
					<ContactItem href="mailto:cassidygroenendaal@gmail.com" icon="fas fa-envelope" text="cassidygroenendaal@gmail.com" />
					<ContactItem href="https://www.linkedin.com/in/cassidy-groenendaal/" icon="fab fa-linkedin-in" text="https://www.linkedin.com/in/cassidy-groenendaal/" />
					<ContactItem href="https://github.com/cassidygroenendaal" icon="fab fa-github" text="https://github.com/cassidygroenendaal" />
				</div>
			</div>
		</div>
	);
}

export default Contact;
