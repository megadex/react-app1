import axios from "axios";
import { setCategories, setCategory } from "../actions/categories";

const API_URL = "http://localhost:5000/api";

export const getCategories = () => {
  return (dispatch) =>
    axios
      .get(`${API_URL}/categories`)
      .then((result) => dispatch(setCategories(result.data)));
};

export const getCategory = (categoryId) => {
  return (dispatch) =>
    axios
      .get(`${API_URL}/categories/${categoryId}`)
      .then((result) => dispatch(setCategory(result.data)));
};
