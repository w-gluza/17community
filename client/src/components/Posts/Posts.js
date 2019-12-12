import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Loader from '../Loader/Loader';
import { getPosts } from '../../actions/post';

import PostItem from '../PostItem/PostItem';
import PostForm from '../PostForm/PostForm';

const Posts = ({ getPosts, post: { posts, loading } }) => {
  useEffect(() => {
    getPosts();
  }, [getPosts]);

  return loading ? (
    <Loader />
  ) : (
    <section className='section'>
      <h3>Posts</h3>
      <PostForm />
      <section>
        {posts.map(post => (
          <PostItem key={post._id} post={post} />
        ))}
      </section>
    </section>
  );
};

Posts.propTypes = {
  getPosts: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  post: state.post,
});

export default connect(mapStateToProps, { getPosts })(Posts);
