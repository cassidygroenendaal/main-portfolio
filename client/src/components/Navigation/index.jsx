import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navigation = props => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const targetClass = `collapse navbar-collapse${!isCollapsed ? ' show' : ''}`;
  const togglerClass = `navbar-toggler${isCollapsed ? ' collapsed' : ''}`;

  return (
    <div className='Navigation'>
      <nav className='navbar navbar-expand-lg navbar-light bg-light mb-3'>
        <Link className='navbar-brand' to='/'>
          Cassidy Groenendaal
        </Link>
        <button
          className={togglerClass}
          onClick={() => setIsCollapsed(!isCollapsed)}
          data-toggle='collapse'
          data-target='#navbarSupportedContent'
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon' />
        </button>

        <div className={targetClass} id='navbarSupportedContent'>
          <ul className='navbar-nav mr-auto'>
            <li className='nav-item'>
              <Link
                className='nav-link'
                to='/'
                onClick={() => setIsCollapsed(!isCollapsed)}
              >
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                className='nav-link'
                to='/code/project'
                onClick={() => setIsCollapsed(!isCollapsed)}
              >
                Project
              </Link>
            </li>
          </ul>
          <ul className='navbar-nav'>
            <li className='nav-item'>
              <Link
                className='nav-link'
                to='/'
                onClick={() => setIsCollapsed(!isCollapsed)}
              >
                Something Else
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navigation;
