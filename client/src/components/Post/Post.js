import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Loader from "../Loader/Loader";
import { getPost } from "../../actions/post";

import PostItem from "../PostItem/PostItem";
import CommentForm from "../CommentForm/CommentForm";

const Post = ({ getPost, post: { post, loading }, match }) => {
  useEffect(() => {
    getPost(match.params.id);
  }, [getPost, match.params.id]);

  return loading || post === null ? (
    <Loader />
  ) : (
    <div>
      <Link to="/posts" className="btn">
        Back To Posts
      </Link>
      <PostItem post={post} />
      <CommentForm postId={post._id} />
    </div>
  );
};
Post.propTypes = {
  getPost: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  post: state.post
});

export default connect(mapStateToProps, { getPost })(Post);
