import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Moment from "react-moment";
import { addLike, removeLike, deletePost } from "../../actions/post";

const PostItem = ({
  auth,
  post: { _id, avatar, user, name, img, title, text, likes, comments, date },
  addLike,
  removeLike,
  deletePost
}) => {
  return (
    <section className="post-item">
      <figure>{img && <img src={img} alt="main post" />}</figure>
      <Link to={`/profile/${user}`} className="author">
        <img src={avatar} alt="avatar" />
        <p>{name}</p>
      </Link>
      <article>
        <h4>{title}</h4>
        <p>{text}</p>
      </article>
      <p>
        <Moment format="YYYY/MM/DD">{date}</Moment>
      </p>
      <div className="likes">
        <p>Likes: {likes.length > 0 && <span>{likes.length}</span>}</p>
        <button onClick={() => addLike(_id)}>Add Like</button>
        <button onClick={() => removeLike(_id)}>RemoveLike</button>
      </div>
      <Link to={`/posts/${_id}`}>
        See more
        <p>Comments: {comments.length > 0 && <span>{comments.length}</span>}</p>
      </Link>
      {!auth.loading && user === auth.user._id && (
        <button onClick={() => deletePost(_id)}>Delete</button>
      )}
    </section>
  );
};

PostItem.propTypes = {
  post: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  addLike: PropTypes.func.isRequired,
  removeLike: PropTypes.func.isRequired,
  deletePost: PropTypes.func.isRequired
};

const mapStateToProops = state => ({
  auth: state.auth
});
export default connect(mapStateToProops, { addLike, removeLike, deletePost })(
  PostItem
);
