import axios from "axios";

export const USER_COLLECTEDS = "USER_COLLECTEDS";
export const ADD_COLLECTED = "ADD_COLLECTED";

export const getUserCollecteds = (idUser) => {
  return (dispatch) => {
    return axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/api/collected/${idUser}`)
      .then((response) => {
        dispatch({
          type: USER_COLLECTEDS,
          payload: response.data,
        });
      });
  };
};

export const addCollected = (postDatas, digimonDate) => {
  return (dispatch) => {
    return axios
      .post(`${import.meta.env.VITE_BACKEND_URL}/api/collected`, postDatas)
      .then(() => {
        dispatch({
          type: ADD_COLLECTED,
          payload: digimonDate,
        });
      });
  };
};
