import React, { useState, useEffect } from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { createProfile, getCurrentProfile } from "../../actions/profile";

// Material-UI Components Imports
import Button from "@material-ui/core/Button";

const EditProfile = ({
  profile: { profile, loading },
  createProfile,
  getCurrentProfile,
  history
}) => {
  const [formData, setFormData] = useState({
    website: "",
    location: "",
    status: "",
    interests: "",
    bio: "",
    instagram: "",
    facebook: "",
    linkedin: ""
  });

  useEffect(() => {
    getCurrentProfile();

    setFormData({
      website: loading || !profile.website ? "" : profile.website,
      location: loading || !profile.location ? "" : profile.location,
      status: loading || !profile.status ? "" : profile.status,
      interests:
        loading || !profile.interests ? "" : profile.interests.join(","),
      bio: loading || !profile.bio ? "" : profile.bio,
      instagram: loading || !profile.social ? "" : profile.social.instagram,
      facebook: loading || !profile.social ? "" : profile.social.facebook,
      linkedin: loading || !profile.social ? "" : profile.social.linkedin
    });
    // eslint-disable-next-line
  }, [loading, getCurrentProfile]);

  const {
    website,
    location,
    status,
    interests,
    bio,
    instagram,
    facebook,
    linkedin
  } = formData;
  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    createProfile(formData, history, true);
  };

  return (
    <>
      <form onSubmit={e => onSubmit(e)}>
        <input
          type="text"
          placeholder="website"
          name="website"
          value={website}
          onChange={e => onChange(e)}
        ></input>
        <input
          type="text"
          placeholder="location"
          name="location"
          value={location}
          onChange={e => onChange(e)}
        />
        <input
          type="text"
          placeholder="your profesion"
          name="status"
          value={status}
          onChange={e => onChange(e)}
        />
        <input
          type="text"
          placeholder="interests"
          name="interests"
          value={interests}
          onChange={e => onChange(e)}
        />
        <input
          type="text"
          placeholder="bio"
          name="bio"
          value={bio}
          onChange={e => onChange(e)}
        />
        <input
          type="text"
          placeholder="instagram"
          name="instagram"
          value={instagram}
          onChange={e => onChange(e)}
        />
        <input
          type="text"
          placeholder="facebook"
          name="facebook"
          value={facebook}
          onChange={e => onChange(e)}
        />
        <input
          type="text"
          placeholder="linkedin"
          name="linkedin"
          value={linkedin}
          onChange={e => onChange(e)}
        />
        <Button type="submit" variant="outlined" color="primary">
          Submit
        </Button>
        <Link to="./dashboard">Go to Dash</Link>
      </form>
    </>
  );
};

EditProfile.propTypes = {
  createProfile: PropTypes.func.isRequired,
  getCurrentProfile: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile
});

export default connect(mapStateToProps, { createProfile, getCurrentProfile })(
  withRouter(EditProfile)
);
