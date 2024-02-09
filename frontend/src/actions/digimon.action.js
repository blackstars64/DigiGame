import axios from "axios";

export const GET_DIGIMONS = "GET_DIGIMONS";
export const GET_ONE_DIGIMONS = "GET_ONE_DIGIMONS";

export const getDigimons = () => {
  return (dispatch) => {
    return axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/api/digimons`)
      .then((response) => {
        dispatch({
          type: GET_DIGIMONS,
          payload: response.data,
        });
      });
  };
};

export const getOneDigimon = (idDigimon) => {
  return (dispatch) => {
    return axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/api/digimons/${idDigimon}`)
      .then((response) => {
        dispatch({
          type: GET_ONE_DIGIMONS,
          payload: response.data,
        });
      });
  };
};
