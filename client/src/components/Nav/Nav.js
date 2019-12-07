import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import burgerIcon from '../../assets/icons/burger.svg';
import closeIcon from '../../assets/icons/close.svg';

// Redux
import { connect } from 'react-redux';
import { logout } from '../../actions/auth';

const Nav = ({ auth: { isAuthenticated, loading }, logout }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const authLinks = (
    <ul className={isMenuOpen ? 'show' : 'hide'}>
      <li>
        <Link to='/dashboard' onClick={() => setIsMenuOpen(!isMenuOpen)}>
          Dashboard
        </Link>
      </li>
      <li>
        <Link to='/profiles' onClick={() => setIsMenuOpen(!isMenuOpen)}>
          Members
        </Link>
      </li>
      <li>
        <Link to='/milestones' onClick={() => setIsMenuOpen(!isMenuOpen)}>
          Milestones
        </Link>
      </li>
      <li>
        <Link to='/posts' onClick={() => setIsMenuOpen(!isMenuOpen)}>
          Posts
        </Link>
      </li>
      <li onClick={logout} to='!#'>
        <span>Log Out</span>
      </li>
    </ul>
  );

  const guestLinks = (
    <ul className={isMenuOpen ? 'show' : 'hide'}>
      <li>
        <Link to='/profiles' onClick={() => setIsMenuOpen(!isMenuOpen)}>
          Members
        </Link>
      </li>
      <li>
        <Link to='/authentication' onClick={() => setIsMenuOpen(!isMenuOpen)}>
          Sign Up
        </Link>
      </li>
      <li>
        <Link to='/authentication' onClick={() => setIsMenuOpen(!isMenuOpen)}>
          Log In
        </Link>
      </li>
    </ul>
  );
  return (
    <>
      <nav className='nav'>
        <h1>
          <Link to='/'>17 Community</Link>
        </h1>
        {!loading && <>{isAuthenticated ? authLinks : guestLinks}</>}
        <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? (
            <img src={closeIcon} alt='close menu' className='menu-icon' />
          ) : (
            <img src={burgerIcon} alt='burger menu' className='menu-icon' />
          )}
        </button>
      </nav>
    </>
  );
};

Nav.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logout })(Nav);
