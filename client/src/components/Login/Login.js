import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// Material-UI Components Imports
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Register from '../Register/Register';

function Login() {
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
    console.log('Success');
  };

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
}

export default Login;