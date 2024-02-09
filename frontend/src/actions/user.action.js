import axios from "axios";

export const GET_USERS = "GET_USERS";
export const GET_ALL_USERS = "GET_ALL_USERS";
export const GET_ONE_USERS = "GET_ONE_USERS";

export const getUsers = () => {
  return (dispatch) => {
    return axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/api/user`)
      .then((response) => {
        dispatch({
          type: GET_USERS,
          payload: response.data,
        });
      });
  };
};

export const getAllUsers = () => {
  return (dispatch) => {
    return axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/api/user/all`)
      .then((response) => {
        dispatch({
          type: GET_ALL_USERS,
          payload: response.data,
        });
      });
  };
};

export const getOneUser = (idUser) => {
  return (dispatch) => {
    return axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/api/user/${idUser}`)
      .then((response) => {
        dispatch({
          type: GET_ONE_USERS,
          payload: response.data,
        });
      });
  };
};
