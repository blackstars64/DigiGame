import axios from "axios";
import { jwtDecode } from "jwt-decode";
import checkHttpStatus from "../utils/checkHttpStatus";

export const GET_USERS = "GET_USERS";
export const GET_ALL_USERS = "GET_ALL_USERS";
export const GET_ONE_USERS = "GET_ONE_USERS";

export const getUsers = () => {
  return (dispatch) => {
    return axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/api/user`)
      .then(checkHttpStatus)
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
      .then(checkHttpStatus)
      .then((response) => {
        dispatch({
          type: GET_ALL_USERS,
          payload: response.data,
        });
      });
  };
};

export const getOneUser = (token) => {
  const decodedToken = jwtDecode(token);
  if (decodedToken.exp * 1000 < Date.now()) {
    sessionStorage.removeItem("token");
    return null;
  }
  return (dispatch) => {
    return axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/api/user/${decodedToken.id}`)
      .then(checkHttpStatus)
      .then((response) => {
        const [data] = response.data;
        dispatch({
          type: GET_ONE_USERS,
          payload: data,
        });
      });
  };
};

/* ******************************* POST ****************************** */

export const ADD_USER = "ADD_USER";

export const addUser = (postDatas) => {
  return (dispatch) => {
    return axios
      .post(`${import.meta.env.VITE_BACKEND_URL}/api/user`, postDatas)
      .then(checkHttpStatus)
      .then(() => {
        dispatch({
          type: ADD_USER,
          payload: postDatas,
        });
      });
  };
};

export const LOGIN_USER = "LOGIN_USER";

export const login = (postDatas) => {
  return (dispatch) => {
    return axios
      .post(`${import.meta.env.VITE_BACKEND_URL}/api/login`, postDatas)
      .then(checkHttpStatus)
      .then((response) => {
        dispatch({
          type: LOGIN_USER,
          payload: response.data.token,
        });
      });
  };
};
