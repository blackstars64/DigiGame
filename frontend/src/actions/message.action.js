import axios from "axios";

export const GET_MESSAGES = "GET_MESSAGES";
export const GET_USER_MESSAGES = "GET_USER_MESSAGES";

export const getMessages = () => {
  return (dispatch) => {
    return axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/api/message`)
      .then((response) => {
        dispatch({
          type: GET_MESSAGES,
          payload: response.data,
        });
      });
  };
};

export const getUserMessages = (idUser) => {
  return (dispatch) => {
    return axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/api/message/user/${idUser}`)
      .then((response) => {
        dispatch({
          type: GET_USER_MESSAGES,
          payload: response.data,
        });
      });
  };
};
