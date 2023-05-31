import { PRODUCT_CHECKOUT_SET } from '../actions/productsCheckout';

const initialState = {
    productsCheckoutData: [],
};

function setProductsCheckout(state, payload) {
    const {data: productsCheckoutData} = payload;
    return {
        ...state,
        productsCheckoutData,
    }
}

const checkoutReducer = function(state = initialState, action) {
    switch (action.type) {
        case PRODUCT_CHECKOUT_SET:
            return setProductsCheckout(state, action.payload);
        default:
            return state;
    }
}

export default checkoutReducer;