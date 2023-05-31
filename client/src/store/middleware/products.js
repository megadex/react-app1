import axios from "axios";
import { setProducts, setProductOne } from "../actions/products";

const API_URL = "http://localhost:5000/api";

export const getProducts = () => {
  return (dispatch) =>
    axios
      .get(`${API_URL}/products`)
      .then((result) => dispatch(setProducts(result.data)));
};

export const getProductOne = (productId) => {
  return (dispatch) =>
    axios
      .get(`${API_URL}/products/${productId}`)
      .then((result) => dispatch(setProductOne(result.data)));
};