import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { toast } from "react-toastify";
import checkHttpStatus from "../utils/checkHttpStatus";

export const GET_ONE_USERS = "GET_ONE_USERS";
export const ADD_USER = "ADD_USER";
export const LOGIN_USER = "LOGIN_USER";
export const UPDATE_USER = "UPDATE_USER";
export const UPDATE_DIGIPOINT = "UPDATE_DIGIPOINT";

/* ******************************* GET ****************************** */

export const getOneUser = (token) => {
  return (dispatch) => {
    const decodedToken = jwtDecode(token);
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

export const addUser = (postDatas) => {
  return (dispatch) => {
    return axios
      .post(`${import.meta.env.VITE_BACKEND_URL}/api/user`, postDatas)
      .then(checkHttpStatus)
      .then(() => {
        toast.success("Welcome to DigiGame ✌️");
        dispatch({
          type: ADD_USER,
          payload: postDatas,
        });
      });
  };
};

export const login = (postDatas) => {
  return (dispatch) => {
    return axios
      .post(`${import.meta.env.VITE_BACKEND_URL}/api/login`, postDatas)
      .then(checkHttpStatus)
      .then((response) => {
        toast.success(`Welcome! 👋`);
        dispatch({
          type: LOGIN_USER,
          payload: response.data.token,
        });
        dispatch(getOneUser(response.data.token));
      });
  };
};

/* ******************************* PUT ****************************** */

export const updateUser = (id, postDatas) => {
  return (dispatch) => {
    return axios
      .put(`${import.meta.env.VITE_BACKEND_URL}/api/user/${id}`, postDatas)
      .then(checkHttpStatus)
      .then(() => {
        toast.success("Profile updated! 🎉");
        dispatch({
          type: UPDATE_USER,
          payload: postDatas,
        });
      });
  };
};

export const updateDigiPoint = (id, postDatas) => {
  return (dispatch) => {
    return axios
      .put(
        `${import.meta.env.VITE_BACKEND_URL}/api/user/digipoint/${id}`,
        postDatas
      )
      .then(checkHttpStatus)
      .then(() => {
        dispatch({
          type: UPDATE_DIGIPOINT,
          payload: postDatas,
        });
      });
  };
};
