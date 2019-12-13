import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { createProfile, getCurrentProfile } from "../../actions/profile";
import avatar from "../../assets/illustrations/avatar_female.svg";

// Material-UI Components Imports
import light from "../../themes/light";
import { ThemeProvider } from "@material-ui/styles";
import Card from "@material-ui/core/Card";
import TextField from "@material-ui/core/TextField";
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
    <ThemeProvider theme={light}>
      <section className="edit__profile-section">
        <Card className="edit__profile-card">
          <figure>
            <img className="edit__profile-avatar" src={avatar} alt="avt"></img>
          </figure>
          <form className="edit__profile-form" onSubmit={e => onSubmit(e)}>
            <h4>Edit Profile</h4>

            <TextField
              label="Website"
              type="text"
              placeholder="Personal website"
              name="website"
              value={website}
              variant="outlined"
              onChange={e => onChange(e)}
            />
            <TextField
              label="Location"
              type="text"
              placeholder="Your hometown"
              name="location"
              value={location}
              variant="outlined"
              onChange={e => onChange(e)}
            />
            <TextField
              label="Profession"
              type="text"
              placeholder="Share what do you do in life"
              name="status"
              value={status}
              variant="outlined"
              onChange={e => onChange(e)}
            />
            <TextField
              label="Intrests"
              type="text"
              placeholder="Share your hobbies"
              name="interests"
              value={interests}
              variant="outlined"
              onChange={e => onChange(e)}
            />
            <TextField
              label="Biography"
              type="text"
              placeholder="Let us know you better!"
              name="bio"
              value={bio}
              variant="outlined"
              onChange={e => onChange(e)}
            />
            <TextField
              label="Instagram"
              type="text"
              placeholder="Instagram account"
              name="instagram"
              value={instagram}
              variant="outlined"
              onChange={e => onChange(e)}
            />
            <TextField
              label="Facebook"
              type="text"
              placeholder="Facebook account"
              name="facebook"
              value={facebook}
              variant="outlined"
              onChange={e => onChange(e)}
            />
            <TextField
              label="LinkedIn"
              type="text"
              placeholder="LinkedIn account"
              name="linkedin"
              value={linkedin}
              variant="outlined"
              onChange={e => onChange(e)}
            />
            <Button type="submit" variant="contained" color="primary">
              Submit
            </Button>
          </form>
        </Card>
      </section>
    </ThemeProvider>
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
