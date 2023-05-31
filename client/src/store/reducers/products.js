import { 
    SET_PRODUCTS, SET_PRODUCT_ONE
 } from '../actions/products.js';

const initialState = {
    productsData: [],
    productOne: null,
};

function setProducts(state, payload) {
    const {data: productsData} = payload;
    return {
        ...state,
        productsData,
    }
}

function setProductOne(state, payload) {
    const {data: productOne} = payload;
    return {
        ...state,
        productOne,
    }
}

const productsReducer = function(state = initialState, action) {
    switch (action.type) {
        case SET_PRODUCTS:
            return setProducts(state, action.payload);
        case SET_PRODUCT_ONE:
            return setProductOne(state, action.payload);
        default:
            return state;
    }
}

export default productsReducer;