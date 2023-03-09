import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = props => {
  return (
    <div className='NotFound'>
      <h1>Oops!</h1>
      <p>
        Sorry, the page you requested cannot be found. <Link to='/'>Click here</Link> to
        return to the home page.
      </p>
    </div>
  );
};

export default NotFound;
