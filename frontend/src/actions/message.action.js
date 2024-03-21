import axios from "axios";

export const GET_MESSAGES = "GET_MESSAGES";
export const GET_USER_MESSAGES = "GET_USER_MESSAGES";
export const ADD_MESSAGE = "ADD_MESSAGE";
export const UPDATE_MESSAGE = "UPDATE_MESSAGE";

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
      .get(`${import.meta.env.VITE_BACKEND_URL}/api/message/${idUser}`)
      .then((response) => {
        dispatch({
          type: GET_USER_MESSAGES,
          payload: response.data,
        });
      });
  };
};

export const addMessage = (message, username) => {
  return (dispatch) => {
    return axios
      .post(`${import.meta.env.VITE_BACKEND_URL}/api/message`, message)
      .then(() => {
        // Convertir la date en format ISO 8601
        const receivedDate = new Date().toISOString();

        dispatch({
          type: ADD_MESSAGE,
          payload: { ...message, received: receivedDate, username },
        });
      });
  };
};

export const updateMessage = (message) => {
  return (dispatch) => {
    return axios
      .put(
        `${import.meta.env.VITE_BACKEND_URL}/api/message/${message.id}`,
        message
      )
      .then((response) => {
        dispatch({
          type: UPDATE_MESSAGE,
          payload: response.data,
        });
      });
  };
};
