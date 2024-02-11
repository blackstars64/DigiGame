/* eslint-disable default-param-last */
import {
  GET_USERS,
  GET_ALL_USERS,
  ADD_USER,
  LOGIN_USER,
  GET_ONE_USERS,
} from "../actions/user.action";

const initalState = {};

export default function userReducer(state = initalState, action) {
  switch (action.type) {
    case GET_USERS:
      return action.payload;
    case GET_ALL_USERS:
      return action.payload;
    case ADD_USER:
      return [action.payload, ...state];
    case LOGIN_USER:
      if (action.payload) {
        sessionStorage.setItem("token", action.payload);
      }
      return state;
    case GET_ONE_USERS:
      return action.payload;
    default:
      return state;
  }
}
