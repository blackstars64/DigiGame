import { combineReducers } from "redux";
import userReducer from "./user.reducer";
import digimonReducer from "./digimon.reducer";
import collectedReducer from "./collected.reducer";
import messageReducer from "./message.reducer";

export default combineReducers({
  userReducer,
  digimonReducer,
  collectedReducer,
  messageReducer,
});
