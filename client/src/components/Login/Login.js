import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

// Redux
import { connect } from 'react-redux';
import { login } from '../../actions/auth';

// Material-UI Components Imports
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const Login = ({ login, isAuthenticated }) => {
  const [values, setValues] = useState({
    email: '',
    password: '',
  });

  const { email, password } = values;

  const handleChange = name => e => {
    setValues({ ...values, [name]: e.target.value });
  };

  const onSubmit = async e => {
    e.preventDefault();
    login(email, password);
  };

  // Redirect if logged in
  if (isAuthenticated) {
    return <Redirect to='/dashboard' />;
  }

  return (
    <>
      <section>
        <h3>Log In</h3>
        <form onSubmit={e => onSubmit(e)} noValidate autoComplete='off'>
          <TextField
            id='outlined-email-input'
            label='Email'
            type='email'
            name='email'
            onChange={handleChange('email')}
            autoComplete='email'
            margin='normal'
            variant='outlined'
            required
          />
          <TextField
            id='outlined-password-input'
            label='Password'
            type='password'
            name='password'
            onChange={handleChange('password')}
            margin='normal'
            variant='outlined'
            required
          />
          <Button type='submit' variant='outlined' color='primary'>
            Log In
          </Button>
        </form>
        <p>
          Don't have an account? <Link to='/register'>Register</Link>
        </p>
      </section>
    </>
  );
};

Login.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(
  mapStateToProps,
  {
    login,
  },
)(Login);
