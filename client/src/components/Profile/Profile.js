import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import { connect } from "react-redux";
import Loader from "../Loader/Loader";
import { getProfileById } from "../../actions/profile";

import ProfileHeader from "../ProfileHeader/ProfileHeader";

const Profile = ({
  getProfileById,
  profile: { profile, loading },
  auth,
  match
}) => {
  // props match let you get id from URL

  useEffect(() => {
    getProfileById(match.params.id);
  }, [getProfileById, match.params.id]);

  return (
    <>
      {profile === null || loading ? (
        <Loader />
      ) : (
        <section className="section">
          {auth.isAuthenticated &&
            auth.loading === false &&
            auth.user._id === profile.user._id && (
              <Button variant="outlined" color="primary">
                <Link to="/edit-profile">Edit Profile</Link>
              </Button>
            )}

          <div>
            <ProfileHeader profile={profile} />
          </div>
          <Button variant="outlined" color="primary">
            <Link to="/profiles">Back to profiles</Link>
          </Button>
        </section>
      )}
    </>
  );
};

Profile.propTypes = {
  getProfileById: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile,
  auth: state.auth
});
export default connect(mapStateToProps, { getProfileById })(Profile);
