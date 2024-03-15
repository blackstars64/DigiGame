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
      if (action.payload.name && action.payload.level && action.payload.img) {
        return {
          ...state,
          name: action.payload.name,
          level: action.payload.level,
          img: action.payload.img,
        };
      }
      return state;
    default:
      return state;
  }
}
