import { GET_ALL_USERS } from "../actions/allUsers.action";

/* eslint-disable default-param-last */
const initalState = {};

export default function allUserReducer(state = initalState, action) {
  switch (action.type) {
    case GET_ALL_USERS:
      return action.payload;
    default:
      return state;
  }
}
