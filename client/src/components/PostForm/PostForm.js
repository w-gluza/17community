import React, { useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addPost } from "../../actions/post";
import theme from "../../theme";
import { ThemeProvider } from "@material-ui/styles";
import Button from "@material-ui/core/Button";
import { TextField } from "@material-ui/core";

import CloudUploadIcon from "@material-ui/icons/CloudUpload";

const PostForm = ({ addPost }) => {
  const [formData, setFormData] = useState({
    text: "",
    img: ""
  });
  const { text, img } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    const toBase64 = file =>
      new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
      });
    async function Main() {
      const file = e.target.img.files[0];
      formData.img = await toBase64(file);
      await addPost(formData);
    }

    Main();
  };

  return (
    <ThemeProvider theme={theme}>
      <article className="post__article">
        <p>Please write your post below</p>
        <form onSubmit={e => onSubmit(e)} className="post__form">
          {/* <TextField
            label="Post Title doesn't work"
            className="form__field"
            name="postTitle"
            // onChange={handleChange("name")}
            margin="normal"
            variant="outlined"
            required
          /> */}
          <TextField
            label="Post content"
            variant="outlined"
            name="text"
            value={text}
            className="form__field"
            placeholder="Add something cool"
            onChange={e => onChange(e)}
            required
          />
          <input
            name="img"
            accept="image/*"
            style={{ display: "none" }}
            id="postImg"
            multiple
            type="file"
            value={img}
            onChange={e => onChange(e)}
          />
          <label htmlFor="postImg">
            <Button
              component="span"
              variant="contained"
              color="default"
              startIcon={<CloudUploadIcon />}
            >
              Upload
            </Button>
          </label>
          <Button
            type="submit"
            className="button"
            variant="contained"
            color="primary"
            size="large"
          >
            Submit
          </Button>
        </form>
      </article>
    </ThemeProvider>
  );
};
PostForm.propTypes = {
  addPost: PropTypes.func.isRequired
};
export default connect(null, { addPost })(PostForm);
