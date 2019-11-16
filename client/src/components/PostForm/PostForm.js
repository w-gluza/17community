import React, { useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addPost } from "../../actions/post";

const PostForm = ({ addPost }) => {
  const [text, setText] = useState("");

  return (
    <article>
      <p>Please write your post below</p>
      <form
        onSubmit={e => {
          e.preventDefault();
          addPost({ text });
          setText("");
        }}
      >
        <textarea
          name="text"
          value={text}
          placeholder="Add something cool"
          onChange={e => setText(e.target.value)}
          required
        ></textarea>
        <button type="submit">Submit</button>
      </form>
    </article>
  );
};

PostForm.propTypes = {
  addPost: PropTypes.func.isRequired
};

export default connect(null, { addPost })(PostForm);
