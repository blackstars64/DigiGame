/* eslint-disable default-param-last */
const initalState = {};

export default function collectedReducer(state = initalState, action) {
  switch (action.type) {
    case "USER_COLLECTEDS":
      return action.payload;
    default:
      return state;
  }
}