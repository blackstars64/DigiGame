/* eslint-disable default-param-last */
const initalState = {};

export default function digimonReducer(state = initalState, action) {
  switch (action.type) {
    case "GET_DIGIMONS":
      return action.payload;
    case "GET_ONE_DIGIMONS":
      return action.payload;
    default:
      return state;
  }
}
