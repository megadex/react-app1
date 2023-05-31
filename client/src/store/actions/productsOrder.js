export const PRODUCT_ORDER_SET = 'PRODUCT_ORDER_SET';

export const setProductsOrder = (data) => {
    return {
        type: PRODUCT_ORDER_SET,
        payload: data,
    }
}