import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Moment from 'react-moment';
import { addLike, removeLike, deletePost } from '../../actions/post';

// Material-UI Components Imports
import light from '../../themes/light';
import { ThemeProvider } from '@material-ui/styles';
import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  CardActions,
} from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';
import CommentOutlinedIcon from '@material-ui/icons/CommentOutlined';
import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined';
import Button from '@material-ui/core/Button';

const PostItem = ({
  auth,
  post: { _id, avatar, user, name, img, title, text, likes, comments, date },
  addLike,
  removeLike,
  deletePost,
}) => {
  return (
    <section className='post-item'>
      <ThemeProvider theme={light}>
        <Card>
          <CardHeader
            avatar={
              <Link to={`/profile/${user}`}>
                <Avatar src={avatar} aria-label='avatar' className='avatar' />
              </Link>
            }
            title={name}
            subheader={<Moment format='DD/MM/YYYY'>{date}</Moment>}
          />
          {img && <CardMedia className='media' image={img} />}
          <CardContent>
            <div className='postitem__heading'>
              <h5>{title}</h5>{' '}
              <span>
                <IconButton aria-label='like' onClick={() => addLike(_id)}>
                  <FavoriteIcon />
                </IconButton>
                <span className='post__likes-counter'>
                  {likes.length > 0 && <span>| {likes.length} |</span>}
                </span>
              </span>
            </div>
            <p className='post-paragraph'>{text}</p>
          </CardContent>
          <CardActions>
            <Button
              variant='contained'
              color='primary'
              startIcon={<CommentOutlinedIcon />}>
              <Link to={`/posts/${_id}`} className='post__link'>
                See more{' '}
                {comments.length > 0 && <span>| {comments.length} |</span>}
              </Link>
            </Button>

            {!auth.loading && user === auth.user._id && (
              <Button
                variant='contained'
                color='secondary'
                onClick={() => deletePost(_id)}
                startIcon={<DeleteOutlineOutlinedIcon />}>
                Delete
              </Button>
            )}
          </CardActions>
        </Card>
      </ThemeProvider>
    </section>
  );
};

PostItem.propTypes = {
  post: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  addLike: PropTypes.func.isRequired,
  removeLike: PropTypes.func.isRequired,
  deletePost: PropTypes.func.isRequired,
};

const mapStateToProops = state => ({
  auth: state.auth,
});
export default connect(mapStateToProops, { addLike, removeLike, deletePost })(
  PostItem,
);
