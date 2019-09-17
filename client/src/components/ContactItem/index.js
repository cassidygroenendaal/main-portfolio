import React from 'react';

function ContactItem(props) {
	return (
		<div className="contact__item">
			<a href={props.href} className="contact__link">
				{props.text}
			</a>
		</div>
	);
}

export default ContactItem;
