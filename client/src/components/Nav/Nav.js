import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.scss';

const Nav = () => {
  return (
    <>
      <nav className='nav'>
        <h1>
          <Link to='/'>17 Community</Link>
        </h1>
        <ul>
          <li>
            <Link to='/members'>Members</Link>
          </li>
          <li>
            <Link to='/register'>Register</Link>
          </li>
          <li>
            <Link to='/login'>Login</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Nav;
