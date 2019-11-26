import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import "./Register.scss";
import PropTypes from "prop-types";

// Redux
import { connect } from "react-redux";
import { setAlert } from "../../actions/alert";
import { register } from "../../actions/auth";

// Material-UI Components Imports
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const Register = ({ setAlert, register, isAuthenticated }) => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    passwordCheck: ""
  });

  const { name, email, password, passwordCheck } = values;

  // Making a copy of values (spread operator) and change the name to the value
  const handleChange = name => e => {
    setValues({ ...values, [name]: e.target.value });
  };

  const onSubmit = async e => {
    e.preventDefault();
    // Checking if both passwords match
    if (password !== passwordCheck) {
      setAlert("Passwords do not match", "danger");
    } else {
      register({ name, email, password });
    }
  };

  if (isAuthenticated) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <article className="article">
      <h3>Sign Up</h3>
      <form
        className="register-form"
        onSubmit={e => onSubmit(e)}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="outlined-name"
          label="Name"
          className="text-field"
          name="name"
          onChange={handleChange("name")}
          margin="normal"
          variant="outlined"
          // required
        />
        <TextField
          id="outlined-email-input"
          label="Email"
          className="text-field"
          type="email"
          name="email"
          onChange={handleChange("email")}
          autoComplete="email"
          margin="normal"
          variant="outlined"
          // required
        />
        <TextField
          id="outlined-password-input"
          label="Password"
          className="text-field"
          type="password"
          name="password"
          onChange={handleChange("password")}
          margin="normal"
          variant="outlined"
          // required
        />
        <TextField
          id="outlined-password-input-check"
          label="Repeat Password"
          className="text-field"
          type="password"
          name="passwordCheck"
          onChange={handleChange("passwordCheck")}
          margin="normal"
          variant="outlined"
          // required
        />
        <Button
          type="submit"
          variant="outlined"
          color="primary"
          // className={classes.button}
        >
          Sign Up
        </Button>
      </form>
      <p>
        Already have an account? <Link to="/auth">Log In</Link>
      </p>
    </article>
  );
};

Register.propTypes = {
  setAlert: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { setAlert, register })(Register);
