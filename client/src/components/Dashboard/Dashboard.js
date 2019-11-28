import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Loader from '../Loader/Loader';
import DashboardActions from '../DasboardActions/DashboardActions';
import { getCurrentProfile, deleteAccount } from '../../actions/profile';
import newUserImage from '../../assets/illustrations/new_profile.svg';
// Material-UI Components Imports
import Button from '@material-ui/core/Button';

const Dashboard = ({
  getCurrentProfile,
  deleteAccount,
  auth: { user },
  profile: { profile, loading },
}) => {
  useEffect(() => {
    getCurrentProfile();
  }, [getCurrentProfile]);

  return loading && profile === null ? (
    <Loader />
  ) : (
    <section className='section dashboard'>
      <h4>
        Hello{' '}
        <span style={{ color: 'var(--color-primary)' }}>
          {user && user.name}
        </span>
        !
      </h4>
      {profile !== null ? (
        <>
          <DashboardActions />
          <button onClick={() => deleteAccount()}>Delete Account</button>
        </>
      ) : (
        <>
          <img src={newUserImage} alt='new user' />
          <p>You have not yet setup the profile.</p>
          <div className='btn-group'>
            <Button size='large' variant='outlined' color='primary'>
              <Link to='./create-profile'>Create Profile</Link>
            </Button>
            <Button
              size='large'
              variant='outlined'
              color='primary'
              onClick={() => deleteAccount()}>
              Delete Account
            </Button>
          </div>
        </>
      )}
    </section>
  );
};

Dashboard.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  deleteAccount: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  auth: state.auth,
  profile: state.profile,
});

export default connect(mapStateToProps, { getCurrentProfile, deleteAccount })(
  Dashboard,
);
