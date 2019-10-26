import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import axios from 'axios';

function Register() {
  const [values, setValues] = useState({
    name: '',
    email: '',
    password: '',
    passwordCheck: '',
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
      console.log('Passwords do not match');
    } else {
      const newUser = {
        name,
        email,
        password,
      };
      try {
        const config = {
          headers: {
            'Content-Type': 'application/json',
          },
        };
        const body = JSON.stringify(newUser);
        const response = await axios.post('/api/users', body, config);
        console.log(response.data);
      } catch (error) {
        console.error(error.response.data);
      }
    }
  };

  return (
    <>
      <section>
        <h3>Sign Up</h3>
        <form
          // className={classes.container}
          onSubmit={e => onSubmit(e)}
          noValidate
          autoComplete='off'>
          <TextField
            id='outlined-name'
            label='Name'
            // className={classes.textField}
            name='name'
            onChange={handleChange('name')}
            margin='normal'
            variant='outlined'
            required
          />
          <TextField
            id='outlined-email-input'
            label='Email'
            // className={classes.textField}
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
            // className={classes.textField}
            type='password'
            name='password'
            onChange={handleChange('password')}
            margin='normal'
            variant='outlined'
            required
          />
          <TextField
            id='outlined-password-input-check'
            label='Repeat Password'
            // className={classes.textField}
            type='password'
            name='passwordCheck'
            onChange={handleChange('passwordCheck')}
            margin='normal'
            variant='outlined'
            required
          />
          <Button
            type='submit'
            variant='outlined'
            color='primary'
            // className={classes.button}
          >
            Sign Up
          </Button>
        </form>
      </section>
    </>
  );
}

export default Register;
