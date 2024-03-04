import { GET_FULL_USERS } from "../actions/fullUsers.action";

/* eslint-disable default-param-last */
const initalState = {};

export default function fullUsersReducer(state = initalState, action) {
  switch (action.type) {
    case GET_FULL_USERS:
      return action.payload;

    default:
      return state;
  }
}
