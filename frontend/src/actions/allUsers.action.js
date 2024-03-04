import axios from "axios";
import checkHttpStatus from "../utils/checkHttpStatus";

export const GET_ALL_USERS = "GET_ALL_USERS";

export const getAllUsers = () => {
  return (dispatch) => {
    return axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/api/user`)
      .then(checkHttpStatus)
      .then((response) => {
        dispatch({
          type: GET_ALL_USERS,
          payload: response.data,
        });
      });
  };
};
