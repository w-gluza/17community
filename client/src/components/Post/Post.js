import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Moment from "react-moment";
import { addLike, removeLike } from "../../actions/post";

const Post = ({
  auth,
  post: { _id, avatar, user, name, text, likes, comments, date },
  addLike,
  removeLike
}) => (
  <article>
    <img src={avatar} alt="avatar" />
    <p>{name}</p>
    <p>{text}</p>
    <p>
      <Moment format="YYYY/MM/DD">{date}</Moment>
    </p>
    <p>Likes: {likes.length}</p>
    <button onClick={() => addLike(_id)}>Add Like</button>
    <button onClick={() => removeLike(_id)}>RemoveLike</button>
    <Link to={`/post/${_id}`}>
      <p>Comments: {comments.length > 0 && <span>{comments.length}</span>}</p>
    </Link>
    {!auth.loading && user === auth.user._id && <button>Delete</button>}
  </article>
);

Post.propTypes = {
  post: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProops = state => ({
  auth: state.auth
});
export default connect(mapStateToProops, { addLike, removeLike })(Post);
