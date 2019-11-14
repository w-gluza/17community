import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Loader from "../Loader/Loader";
import DashboardActions from "../DasboardActions/DashboardActions";
import { getCurrentProfile, deleteAccount } from "../../actions/profile";

const Dashboard = ({
  getCurrentProfile,
  deleteAccount,
  auth: { user },
  profile: { profile, loading }
}) => {
  useEffect(() => {
    getCurrentProfile();
  }, [getCurrentProfile]);

  return loading && profile === null ? (
    <Loader />
  ) : (
    <>
      <h1>Dashboard</h1>
      <p>Hello {user && user.name}</p>
      {profile !== null ? (
        <>
          <DashboardActions />
          <button onClick={() => deleteAccount()}>Delete Account</button>
        </>
      ) : (
        <>
          <p>You have not yet setup the profile</p>
          <Link to="./create-profile">Create Profile</Link>
          <button onClick={() => deleteAccount()}>Delete Account</button>
        </>
      )}
    </>
  );
};

Dashboard.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  deleteAccount: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  profile: state.profile
});

export default connect(mapStateToProps, { getCurrentProfile, deleteAccount })(
  Dashboard
);
