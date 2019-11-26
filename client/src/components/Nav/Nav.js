import React from "react";
import { Link } from "react-router-dom";
import "./Nav.scss";
import PropTypes from "prop-types";

// Redux
import { connect } from "react-redux";
import { logout } from "../../actions/auth";

const Nav = ({ auth: { isAuthenticated, loading }, logout }) => {
  const authLinks = (
    <ul>
      <li>
        <Link to="/posts">Posts</Link>
      </li>
      <li>
        <Link to="/profiles">Profiles</Link>
      </li>
      <li>
        <Link to="/dashboard">Dashboard</Link>
      </li>
      <li>
        <button onClick={logout} to="!#">
          Logout
        </button>
      </li>
    </ul>
  );

  const guestLinks = (
    <ul>
      <li>
        <Link to="/profiles">Profiles</Link>
      </li>
      <li>
        <Link to="/members">Members</Link>
      </li>
      <li>
        <Link to="/authentication">SignIn</Link>
      </li>
      <li>
        <Link to="/authentication">Login</Link>
      </li>
    </ul>
  );
  return (
    <>
      <nav className="nav">
        <h1>
          <Link to="/">17 Community</Link>
        </h1>
        {!loading && <>{isAuthenticated ? authLinks : guestLinks}</>}
      </nav>
    </>
  );
};

Nav.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, { logout })(Nav);
