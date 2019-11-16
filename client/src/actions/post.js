import axios from "axios";
import { setAlert } from "./alert";

import { GET_POSTS, POST_ERROR, UPDATE_LIKES } from "./types";

// Getting posts by get request

export const getPosts = () => async dispatch => {
  try {
    const response = await axios.get("/api/posts");

    dispatch({
      type: GET_POSTS,
      payload: response.data
    });
  } catch (error) {
    dispatch({
      type: POST_ERROR,
      payload: {
        msg: error.response.statusText,
        status: error.response.status
      }
    });
  }
};

// Add Like

export const addLike = id => async dispatch => {
  try {
    const response = await axios.put(`/api/posts/like/${id}`);

    dispatch({
      type: UPDATE_LIKES,
      payload: { id, likes: response.data }
    });
  } catch (error) {
    dispatch({
      type: POST_ERROR,
      payload: {
        msg: error.response.statusText,
        status: error.response.status
      }
    });
  }
};

// Remove Like

export const removeLike = id => async dispatch => {
  try {
    const response = await axios.put(`/api/posts/unlike/${id}`);

    dispatch({
      type: UPDATE_LIKES,
      payload: { id, likes: response.data }
    });
  } catch (error) {
    dispatch({
      type: POST_ERROR,
      payload: {
        msg: error.response.statusText,
        status: error.response.status
      }
    });
  }
};
