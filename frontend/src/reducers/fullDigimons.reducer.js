import { GET_FULL_DIGIMONS } from "../actions/fullDigimon.action";

/* eslint-disable default-param-last */
const initalState = {};

export default function fullDigionsReducer(state = initalState, action) {
  switch (action.type) {
    case GET_FULL_DIGIMONS:
      return action.payload;

    default:
      return state;
  }
}
