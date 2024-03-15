import {
  ADD_DIGIMON,
  DELETE_DIGIMON,
  GET_DIGIMONS,
  UPDATE_DIGIMON,
} from "../actions/digimon.action";

/* eslint-disable default-param-last */
const initalState = [];

export default function digimonReducer(state = initalState, action) {
  switch (action.type) {
    case GET_DIGIMONS:
      return action.payload;
    case ADD_DIGIMON:
      return [...state, action.payload];
    case DELETE_DIGIMON:
      return state.filter(
        (digimon) => digimon.id !== Number(action.payload.id)
      );
    case UPDATE_DIGIMON:
      return state.map((digimon) => {
        if (digimon.id === action.payload.digimon[0].id) {
          return action.payload.digimon[0];
        }
        return digimon;
      });
    default:
      return state;
  }
}
