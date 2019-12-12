import React, { useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addPost } from "../../actions/post";
import postImg from "../../assets/illustrations/00_community.svg";
// Material-UI Components Imports
import light from "../../themes/light";
import { ThemeProvider } from "@material-ui/styles";
import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";
import { TextField } from "@material-ui/core";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";

const PostForm = ({ addPost }) => {
  const [formData, setFormData] = useState({
    title: "",
    text: "",
    img: ""
  });
  const { title, text, img } = formData;
  console.log(formData);

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
    <ThemeProvider theme={light}>
      <article className="post__article">
        <Card className="post__card">
          <figure className="post__figure">
            <img src={postImg} className="post_img" alt="postimg"></img>
          </figure>
          <form onSubmit={e => onSubmit(e)} className="post__form">
            <h4>Please write your post below</h4>
            <TextField
              label="Post Title"
              name="title"
              value={title}
              placeholder="Title"
              onChange={e => onChange(e)}
              margin="normal"
              variant="outlined"
              required
            />
            <TextField
              label="Post Content"
              variant="outlined"
              name="text"
              value={text}
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
              required
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
        </Card>
      </article>
    </ThemeProvider>
  );
};
PostForm.propTypes = {
  addPost: PropTypes.func.isRequired
};
export default connect(null, { addPost })(PostForm);
