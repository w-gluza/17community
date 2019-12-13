import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Loader from "../Loader/Loader";

import PostItem from "../PostItem/PostItem";
import Comment from "../Comment/Comment";
import CommentForm from "../CommentForm/CommentForm";
import { getPost } from "../../actions/post";
import Button from "@material-ui/core/Button";

const Post = ({ getPost, post: { post, loading }, match }) => {
  useEffect(() => {
    getPost(match.params.id);
  }, [getPost, match.params.id]);

  return loading || post === null ? (
    <Loader />
  ) : (
    <section className="section section__post">
      <PostItem post={post} />
      <CommentForm postId={post._id} />
      <h3 className="heading__comments">Comments:</h3>
      {post.comments.map(comment => (
        <Comment key={comment._id} comment={comment} postId={post._id} />
      ))}
      <Button variant="contained">
        <Link to="/posts" className="btn">
          Back To Posts
        </Link>
      </Button>
    </section>
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
