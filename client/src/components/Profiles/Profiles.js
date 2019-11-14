import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Loader from "../Loader/Loader";
import { getProfiles } from "../../actions/profile";

import ProfilePreview from "../ProfilePreview/ProfilePreview";

const Profiles = ({ getProfiles, profile: { profiles, loading } }) => {
  useEffect(() => {
    getProfiles();
  }, [getProfiles]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <h2>Users</h2>
          <p>Share your story</p>
          <article>
            {profiles.length > 0 ? (
              profiles.map(profile => (
                <ProfilePreview key={profile._id} profile={profile} />
              ))
            ) : (
              <div>no profile found</div>
            )}
          </article>
        </>
      )}
    </>
  );
};

Profiles.propTypes = {
  profile: PropTypes.object.isRequired,
  getProfiles: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile
});

export default connect(mapStateToProps, { getProfiles })(Profiles);
