/* eslint-disable default-param-last */
const initalState = {};

export default function messageReducer(state = initalState, action) {
  switch (action.type) {
    case "GET_MESSAGES":
      return action.payload;
    case "GET_ONE_MESSAGES":
      return action.payload;
    default:
      return state;
  }
}
