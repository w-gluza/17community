import axios from "axios";
import { setAlert } from "./alert";

import {
  GET_PROFILE,
  GET_PROFILES,
  PROFILE_ERROR,
  CLEAR_PROFILE,
  ACCOUNT_DELETED
} from "./types";

// Get current profile

export const getCurrentProfile = () => async dispatch => {
  try {
    const response = await axios.get("/api/profile/me");

    dispatch({
      type: GET_PROFILE,
      payload: response.data
    });
  } catch (error) {
    dispatch({
      type: PROFILE_ERROR,
      payload: { msg: error.response.statusText, status: error.response.status }
    });
  }
};

// Get all profiles from DB

export const getProfiles = () => async dispatch => {
  dispatch({ type: CLEAR_PROFILE });
  try {
    const response = await axios.get("/api/profile");

    dispatch({
      type: GET_PROFILES,
      payload: response.data
    });
  } catch (error) {
    dispatch({
      type: PROFILE_ERROR,
      payload: { msg: error.response.statusText, status: error.response.status }
    });
  }
};

// Get profile by ID

export const getProfileById = userId => async dispatch => {
  try {
    const response = await axios.get(`/api/profile/user/${userId}`);

    dispatch({
      type: GET_PROFILE,
      payload: response.data
    });
  } catch (error) {
    dispatch({
      type: PROFILE_ERROR,
      payload: { msg: error.response.statusText, status: error.response.status }
    });
  }
};

// Create || update profile
export const createProfile = (
  formData,
  history,
  edit = false
) => async dispatch => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json"
      }
    };

    const response = await axios.post("/api/profile", formData, config);

    dispatch({
      type: GET_PROFILE,
      payload: response.data
    });

    dispatch(setAlert(edit ? "Profile Updated" : "Profile Created", "success"));

    if (!edit) {
      history.push("/dashboard");
    }
  } catch (error) {
    const errors = error.response.data.errors;

    if (errors) {
      errors.forEach(error => dispatch(setAlert(error.msg, "danger")));
    }

    dispatch({
      type: PROFILE_ERROR,
      payload: { msg: error.response.statusText, status: error.response.status }
    });
  }
};

// DELETE ACCOUNT

export const deleteAccount = () => async dispatch => {
  if (
    window.confirm(
      "Are you sure you want to delete your account? Deleting your account is permanent and will remove all content including posts, comments, and profile avatar."
    )
  ) {
    try {
      const response = await axios.delete("/api/profile");

      dispatch({
        type: CLEAR_PROFILE
      });
      dispatch({
        type: ACCOUNT_DELETED
      });

      dispatch(setAlert("Your account has been successfully deleted"));
    } catch (error) {
      dispatch({
        type: PROFILE_ERROR,
        payload: {
          msg: error.response.statusText,
          status: error.response.status
        }
      });
    }
  }
};
