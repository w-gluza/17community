import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

// Redux
import { connect } from 'react-redux';
import { logout } from '../../actions/auth';

const Nav = ({
  auth: { isAuthenticated, loading },
  logout,
  isMenuOpen,
  onToggleMenu,
}) => {
  // const toggleMenuClasses = isMenuOpen ? 'open' : 'close';
  const [isSmallScreen, setSmallScreen] = useState(true);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(min-width: 700px)');
    mediaQuery.addListener(handleMediaQueryChange);
    handleMediaQueryChange(mediaQuery);
    return () => {
      mediaQuery.removeListener(handleMediaQueryChange);
    };
  }, []);

  const handleMediaQueryChange = mediaQuery => {
    if (mediaQuery.matches) {
      setSmallScreen(false);
    } else {
      setSmallScreen(true);
    }
  };

  const authLinks = (
    <ul>
      <li>
        <Link to='/dashboard'>Dashboard</Link>
      </li>
      <li>
        <Link to='/profiles'>Members</Link>
      </li>
      <li>
        <Link to='/milestones'>Milestones</Link>
      </li>
      <li>
        <Link to='/posts'>Posts</Link>
      </li>
      <li onClick={logout} to='!#'>
        <span>Log Out</span>
      </li>
    </ul>
  );

  const guestLinks = (
    <ul>
      <li>
        <Link to='/profiles'>Members</Link>
      </li>
      <li>
        <Link to='/authentication'>Sign Up</Link>
      </li>
      <li>
        <Link to='/authentication'>Log In</Link>
      </li>
    </ul>
  );
  return (
    <>
      <nav className={isSmallScreen ? 'nav' : 'nav nav-lg'}>
        <h1>
          <Link to='/'>17 Community</Link>
        </h1>
        {!loading && <>{isAuthenticated ? authLinks : guestLinks}</>}
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
