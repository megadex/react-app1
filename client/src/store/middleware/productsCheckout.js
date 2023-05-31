import axios from "axios";
import { setProductsCheckout } from "../actions/productsCheckout";

const API_URL = "http://localhost:5000/api";

export const addProductsCheckout = (productsCheckout) => {
  return (dispatch) =>
    axios
      .post(`${API_URL}/products-checkout`, { productsCheckout })
      .then((result) => dispatch(setProductsCheckout(result.data)));
};
