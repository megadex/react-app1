import {
  PRODUCT_CART_GET,
  PRODUCT_CART_SET,
  PRODUCT_CART_PUT,
  PRODUCT_CART_DEL,
  PRODUCT_CART_CLEAN,
} from "../actions/productsCart";

const initialState = {
  productsCartData: [],
};

function getProductsCart(state) {
  return {
    ...state,
  };
}

function setProductCart(state, product) {
  const products = [...state.productsCartData, product];

  return {
    ...state,
    productsCartData: products,
  };
}

function putProductCart(state, product) {
  const products = [...state.productsCartData];
  const index = products.findIndex((item) => item.id === product.id);
  products.splice(index, 1, product);

  return {
    ...state,
    productsCartData: products,
  };
}

function delProductCart(state, productId) {
  const products = [...state.productsCartData];
  const index = products.findIndex((item) => item.id === productId);
  products.splice(index, 1);

  return {
    ...state,
    productsCartData: products,
  };
}

function cleanProductsCart(state) {
  return {
    ...state,
    productsCartData: [],
  };
}

const cartReducer = function (state = initialState, action) {
  switch (action.type) {
    case PRODUCT_CART_GET:
      return getProductsCart(state);
    case PRODUCT_CART_SET:
      return setProductCart(state, action.payload);
    case PRODUCT_CART_PUT:
      return putProductCart(state, action.payload);
    case PRODUCT_CART_DEL:
      return delProductCart(state, action.payload);
    case PRODUCT_CART_CLEAN:
      return cleanProductsCart(state);
    default:
      return state;
  }
};

export default cartReducer;
