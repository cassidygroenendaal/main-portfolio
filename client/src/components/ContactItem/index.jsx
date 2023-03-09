import React from 'react';

const ContactItem = props => {
  return (
    <div className='contact__item'>
      <i className={`contact__icon ${props.icon}`} />
      <a href={props.href} className='contact__link'>
        {props.text}
      </a>
    </div>
  );
};

export default ContactItem;
