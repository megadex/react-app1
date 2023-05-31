import { PRODUCT_ORDER_SET } from '../actions/productsOrder';

const initialState = {
    productsOrderData: [],
};

function setProductsOrder(state, payload) {
    const {data: productsOrderData} = payload;
    return {
        ...state,
        productsOrderData,
    }
}

const orderReducer = function(state = initialState, action) {
    switch (action.type) {
        case PRODUCT_ORDER_SET:
            return setProductsOrder(state, action.payload);
        default:
            return state;
    }
}

export default orderReducer;