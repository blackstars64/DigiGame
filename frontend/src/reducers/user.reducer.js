/* eslint-disable default-param-last */
import { GET_USERS } from "../actions/user.action";

const initalState = {};

export default function userReducer(state = initalState, action) {
  switch (action.type) {
    case GET_USERS:
      return action.payload;
    case "GET_USERS_ALL":
      return action.payload;
    case "GET_USERS_ONE":
      return action.payload;
    default:
      return state;
  }
}
