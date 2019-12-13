import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Moment from "react-moment";
import { deleteComment } from "../../actions/post";

// Material-UI Components Imports

import light from "../../themes/light";
import { ThemeProvider } from "@material-ui/styles";
import { Avatar, Card, CardContent, CardHeader } from "@material-ui/core";

import Button from "@material-ui/core/Button";

const Comment = ({
  postId,
  comment: { _id, name, user, avatar, text, date },
  auth,
  deleteComment
}) => (
  <ThemeProvider theme={light}>
    <Card className="submitted_comment-card">
      <CardHeader
        avatar={
          <Link to={`/profile/${user}`}>
            <Avatar src={avatar} aria-label="avatar" className="avatar" />
          </Link>
        }
        title={name}
        subheader={<Moment format="DD.MM.YYYY">{date}</Moment>}
      />

      <CardContent>
        <p className="comment__text">{text}</p>
        {!auth.loading && user === auth.user._id && (
          <Button
            variant="contained"
            color="secondary"
            onClick={() => deleteComment(postId, _id)}
            type="button"
          >
            DELETE COMMENT
          </Button>
        )}
      </CardContent>
    </Card>
  </ThemeProvider>
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
