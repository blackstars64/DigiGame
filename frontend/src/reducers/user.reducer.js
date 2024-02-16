/* eslint-disable default-param-last */
import {
  ADD_USER,
  LOGIN_USER,
  GET_ONE_USERS,
  UPDATE_USER,
} from "../actions/user.action";

const initalState = {};

export default function userReducer(state = initalState, action) {
  switch (action.type) {
    case ADD_USER:
      return [action.payload, ...state];
    case LOGIN_USER:
      if (action.payload) {
        sessionStorage.setItem("token", action.payload);
      }
      return state;
    case GET_ONE_USERS:
      return action.payload;
    case UPDATE_USER:
      if (action.payload.idImg) {
        return {
          ...state,
          profile_img: action.payload.idImg,
        };
      }
      if (
        action.payload.username &&
        action.payload.email &&
        action.payload.description
      ) {
        return {
          ...state,
          username: action.payload.username,
          email: action.payload.email,
          description: action.payload.description,
        };
      }
      return state;

    default:
      return state;
  }
}
