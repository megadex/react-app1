export const SET_PRODUCTS = 'SET_PRODUCTS';
export const SET_PRODUCT_ONE = 'SET_PRODUCT_ONE';

export const setProducts = (data) => {
    return {
        type: SET_PRODUCTS,
        payload: data,
    }
}

export const setProductOne = (data) => {
    return {
        type: SET_PRODUCT_ONE,
        payload: data,
    };
}
