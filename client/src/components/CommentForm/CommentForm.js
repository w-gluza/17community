import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addComment } from '../../actions/post';
import spreadLove from '../../assets/illustrations/love.svg';

// Material-UI Components Imports
import light from '../../themes/light';
import { ThemeProvider } from '@material-ui/styles';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import { TextField } from '@material-ui/core';

const CommentForm = ({ postId, addComment }) => {
  const [text, setText] = useState('');

  return (
    <ThemeProvider theme={light}>
      <Card className='comments'>
        <form
          className='comments-form'
          onSubmit={e => {
            e.preventDefault();
            addComment(postId, { text });
            setText('');
          }}>
          <p>Comment</p>
          <TextField
            className='comment-field'
            name='text'
            variant='outlined'
            value={text}
            placeholder='Spread some love'
            onChange={e => setText(e.target.value)}
            required></TextField>
          <Button
            type='submit'
            className='button'
            variant='contained'
            color='primary'
            size='large'>
            Submit
          </Button>
        </form>
        <figure>
          <img src={spreadLove} alt='spread love' />
        </figure>
      </Card>
    </ThemeProvider>
  );
};

CommentForm.propTypes = {
  addComment: PropTypes.func.isRequired,
};

export default connect(null, { addComment })(CommentForm);
