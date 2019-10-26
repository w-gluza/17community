import { SET_ALERT, REMOVE_ALERT } from '../actions/types';

const initialState = [];

export default function(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case SET_ALERT:
      // Including the existing state (spread operator)
      return [...state, payload];
    case REMOVE_ALERT:
      // Filtering the state to get specific alert to remove
      return state.filter(alert => alert.id != payload);
    default:
      return state;
  }
}
