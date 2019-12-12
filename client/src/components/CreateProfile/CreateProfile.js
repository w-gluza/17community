import React, { useState, useEffect } from "react";
import { withRouter, Redirect } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { createProfile, getCurrentProfile } from "../../actions/profile";
import { TextField } from "@material-ui/core";

// Material-UI Components Imports
import light from "../../themes/light";
import { ThemeProvider } from "@material-ui/styles";
import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";

const CreateProfile = ({
  createProfile,
  getCurrentProfile,
  profile: { profile, loading },
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
    createProfile(formData, history);
  };
  useEffect(() => {
    getCurrentProfile();
  }, [getCurrentProfile]);

  return loading && profile === null ? (
    <Redirect to="/dashboard" />
  ) : (
    <ThemeProvider theme={light}>
      <section className="create__profile-section">
        <article>
          <Card className="create__profile-card">
            <figure>
              <div className="create__profile-avatar"></div>
            </figure>
            <form onSubmit={e => onSubmit(e)} className="create__profile-form">
              <h4>Tell us more about you!</h4>
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
        </article>
      </section>
    </ThemeProvider>
  );
};

CreateProfile.propTypes = {
  createProfile: PropTypes.func.isRequired,
  getCurrentProfile: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  profile: state.profile
});
export default connect(mapStateToProps, { createProfile, getCurrentProfile })(
  withRouter(CreateProfile)
);
