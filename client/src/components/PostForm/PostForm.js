import React, { useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addPost } from "../../actions/post";

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
      console.log(await toBase64(file));
      formData.img = await toBase64(file);
      await addPost(formData);
    }

    Main();
  };

  return (
    <article>
      <p>Please write your post below</p>
      <form onSubmit={e => onSubmit(e)}>
        <input
          accept="image/*"
          id="inputGroupFile01"
          type="file"
          name="img"
          value={img}
          onChange={e => onChange(e)}
        />
        <textarea
          name="text"
          value={text}
          placeholder="Add something cool"
          onChange={e => onChange(e)}
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
