import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Loader from '../Loader/Loader';
import { getProfiles } from '../../actions/profile';

import ProfilePreview from '../ProfilePreview/ProfilePreview';

const Profiles = ({ getProfiles, profile: { profiles, loading } }) => {
  useEffect(() => {
    getProfiles();
  }, [getProfiles]);

  return (
    <section className='section members'>
      {loading ? (
        <Loader />
      ) : (
        <>
          <h2>Members</h2>

          <article className='profiles-container'>
            {profiles.length > 0 ? (
              profiles.map(profile => (
                <ProfilePreview key={profile._id} profile={profile} />
              ))
            ) : (
              <div>
                <p>Profile not found.</p>
              </div>
            )}
          </article>
        </>
      )}
    </section>
  );
};

Profiles.propTypes = {
  profile: PropTypes.object.isRequired,
  getProfiles: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  profile: state.profile,
});

export default connect(mapStateToProps, { getProfiles })(Profiles);
