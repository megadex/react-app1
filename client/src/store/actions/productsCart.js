export const PRODUCT_CART_GET = 'PRODUCT_CART_GET';
export const PRODUCT_CART_SET = 'PRODUCT_CART_SET';
export const PRODUCT_CART_PUT = 'PRODUCT_CART_PUT';
export const PRODUCT_CART_DEL = 'PRODUCT_CART_DEL';
export const PRODUCT_CART_CLEAN = 'PRODUCT_CART_CLEAN';

export const getProductsCart = () => {
    return {
        type: PRODUCT_CART_GET,
    }
}

export const setProductCart = (data) => {
    return {
        type: PRODUCT_CART_SET,
        payload: data,
    }
}

export const putProductCart = (data) => {
    return {
        type: PRODUCT_CART_PUT,
        payload: data,
    }
}

export const delProductCart = (data) => {
    return {
        type: PRODUCT_CART_DEL,
        payload: data,
    }
}

export const cleanProductsCart = () => {
    return {
        type: PRODUCT_CART_CLEAN,
    }
}