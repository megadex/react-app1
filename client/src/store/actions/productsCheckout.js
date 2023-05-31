export const PRODUCT_CHECKOUT_SET = "PRODUCT_CHECKOUT_SET";

export const setProductsCheckout = (data) => {
  return {
    type: PRODUCT_CHECKOUT_SET,
    payload: data,
  };
};
