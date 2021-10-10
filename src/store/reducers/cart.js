let initialState = {
    productsCart: []
};

function get(state, payload) {
    let productsCart = payload;

    return {
        ...state,
        productsCart
    }
}

function remove(state, pDel) {
    let productsCart = [...state.productsCart].filter((p) => p.id !== pDel.id);

    return {
        ...state,
        productsCart
    }
}

let reducer = function(state = initialState, action) {
    switch (action.type) {
        case 'PRODUCT_CART_GET':
            return get(state, action.items);
        case 'PRODUCT_CART_REMOVE':
            return remove(state, action.i);
            // break;
        default:
            return state;
    }
}

export default reducer;