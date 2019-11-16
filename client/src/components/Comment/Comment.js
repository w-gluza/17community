import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Moment from "react-moment";
import { deleteComment } from "../../actions/post";

const Comment = ({
  postId,
  comment: { _id, name, user, avatar, text, date },
  auth,
  deleteComment
}) => (
  <div>
    <Link to={`/profile/${user}`}>
      <img src={avatar} alt="avatar" />
      <p>{name}</p>
    </Link>
    <p>{text}</p>
    <p>
      Posted on: <Moment format="YYYY/MM/DD">{date}</Moment>
    </p>

    {!auth.loading && user === auth.user._id && (
      <button onClick={() => deleteComment(postId, _id)} type="button">
        DELETE COMMENT
      </button>
    )}
  </div>
);

Comment.propTypes = {
  deleteComment: PropTypes.func.isRequired,
  postId: PropTypes.string.isRequired,
  comment: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, { deleteComment })(Comment);
