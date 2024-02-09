import axios from "axios";

export const USER_COLLECTEDS = "USER_COLLECTEDS";

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
