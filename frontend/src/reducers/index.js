import { combineReducers } from "redux";
import userReducer from "./user.reducer";
import digimonReducer from "./digimon.reducer";
import collectedReducer from "./collected.reducer";
import messageReducer from "./message.reducer";
import fullUsersReducer from "./fullUsers.reducer";
import allUsersReducer from "./allUsers.reducer";
import fullDigionsReducer from "./fullDigimons.reducer";

export default combineReducers({
  userReducer,
  digimonReducer,
  collectedReducer,
  messageReducer,
  fullUsersReducer,
  allUsersReducer,
  fullDigionsReducer,
});
