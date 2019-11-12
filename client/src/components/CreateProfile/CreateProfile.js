import React, { useState } from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { createProfile } from "../../actions/profile";

// Material-UI Components Imports
import Button from "@material-ui/core/Button";

const CreateProfile = ({ createProfile, history }) => {
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

  const handleChange = name => e => {
    setFormData({ ...formData, [name]: e.target.value });
  };

  const onSubmit = e => {
    e.preventDefault();
    createProfile(formData, history);
  };

  return (
    <>
      <form onSubmit={e => onSubmit(e)}>
        <input
          type="text"
          placeholder="website"
          name="website"
          onChange={handleChange("website")}
        ></input>
        <input
          type="text"
          placeholder="location"
          name="location"
          onChange={handleChange("location")}
        ></input>
        <input
          type="text"
          placeholder="status"
          name="your profesion"
          onChange={handleChange("status")}
        ></input>
        <input
          type="text"
          placeholder="interests"
          name="interests"
          onChange={handleChange("interests")}
        ></input>
        <input
          type="text"
          placeholder="bio"
          name="bio"
          onChange={handleChange("bio")}
        ></input>
        <input
          type="text"
          placeholder="instagram"
          name="instagram"
          onChange={handleChange("instagram")}
        ></input>
        <input
          type="text"
          placeholder="facebook"
          name="facebook"
          onChange={handleChange("facebook")}
        ></input>
        <input
          type="text"
          placeholder="linkedin"
          name="linkedin"
          onChange={handleChange("linkedin")}
        ></input>
        <Button type="submit" variant="outlined" color="primary">
          Submit
        </Button>
      </form>
    </>
  );
};

CreateProfile.propTypes = {
  createProfile: PropTypes.func.isRequired
};

export default connect(null, { createProfile })(withRouter(CreateProfile));
