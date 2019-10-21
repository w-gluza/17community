import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <>
      <nav>
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