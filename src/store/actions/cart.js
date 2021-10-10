export const get = (items) => {
    return {
        type: 'PRODUCT_CART_GET',
        items
    }
}

export const remove = (i) => {
    return {
        type: 'PRODUCT_CART_REMOVE',
        i
    };
}