import axios from "axios";

export const GET_FULL_DIGIMONS = "GET_FULL_DIGIMONS";

export const getFullDigimons = () => (dispatch) => {
  axios
    .get(`${import.meta.env.VITE_BACKEND_URL}/api/digimons/number`)
    .then((res) => {
      dispatch({
        type: GET_FULL_DIGIMONS,
        payload: res.data,
      });
    })
    .catch((err) => console.error(err));
};
