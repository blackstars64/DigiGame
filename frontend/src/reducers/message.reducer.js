import {
  ADD_MESSAGE,
  GET_MESSAGES,
  GET_USER_MESSAGES,
} from "../actions/message.action";

/* eslint-disable default-param-last */
const initalState = [];

export default function messageReducer(state = initalState, action) {
  switch (action.type) {
    case GET_MESSAGES:
      return action.payload;
    case GET_USER_MESSAGES:
      return action.payload;
    case ADD_MESSAGE:
      return [...state, action.payload];
    default:
      return state;
  }
}
