import axios from "axios";
import { setProductsOrder } from "../actions/productsOrder";

const API_URL = "http://localhost:5000/api";

export const getProductsOrder = () => {
  return (dispatch) =>
    axios
      .get(`${API_URL}/products-order`)
      .then((result) => dispatch(setProductsOrder(result.data)));
};