import axios from "axios";
import { toast } from "react-toastify";
import checkHttpStatus from "../utils/checkHttpStatus";

export const GET_ALL_USERS = "GET_ALL_USERS";
export const DELETE_USER = "DELETE_USER";

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

export const deleteUser = (id) => {
  return (dispatch) => {
    return axios
      .delete(`${import.meta.env.VITE_BACKEND_URL}/api/user/${id}`)
      .then(() => {
        toast.success("User deleted 🗑️");
        dispatch({
          type: DELETE_USER,
          payload: id,
        });
      });
  };
};
