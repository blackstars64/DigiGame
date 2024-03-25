import axios from "axios";

export const GET_FULL_USERS = "GET_FULL_USERS";

export const getFullUsers = () => (dispatch) => {
  axios
    .get(`${import.meta.env.VITE_BACKEND_URL}/api/user/all`)
    .then((res) => {
      dispatch({
        type: GET_FULL_USERS,
        payload: res.data,
      });
    })
    .catch((err) => console.error(err));
};
