import axios from "axios";
import { toast } from "react-toastify";

export const GET_DIGIMONS = "GET_DIGIMONS";
export const ADD_DIGIMON = "ADD_DIGIMON";
export const DELETE_DIGIMON = "DELETE_DIGIMON";
export const UPDATE_DIGIMON = "UPDATE_DIGIMON";

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

export const addDigimon = (digimon) => {
  return (dispatch) => {
    return axios
      .post(`${import.meta.env.VITE_BACKEND_URL}/api/digimons`, digimon)
      .then((response) => {
        toast.success(`${digimon.name} added successfully 🐸`);
        dispatch({
          type: ADD_DIGIMON,
          payload: response.data.digimon,
        });
      });
  };
};

export const deleteDigimon = (idDigimon) => {
  return (dispatch) => {
    return axios
      .delete(`${import.meta.env.VITE_BACKEND_URL}/api/digimons/${idDigimon}`)
      .then((response) => {
        toast.success("Digimon deleted 🗑️");
        dispatch({
          type: DELETE_DIGIMON,
          payload: response.data,
        });
      });
  };
};

export const updateDigimon = (idDigimon, digimon) => {
  return (dispatch) => {
    return axios
      .put(
        `${import.meta.env.VITE_BACKEND_URL}/api/digimons/${idDigimon}`,
        digimon
      )
      .then((response) => {
        toast.success(`${digimon.name} updated successfully 🐉`);
        dispatch({
          type: UPDATE_DIGIMON,
          payload: response.data,
        });
      });
  };
};
