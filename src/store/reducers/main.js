let initialState = {
    products: [],
    addingProduct: false,
    newProduct: null,
    selectedProduct: {
        id: '',
        title: '',
        description: '',
        price: '',
        inCart: ''
    }
};

function get(state, payload) {
    let products = payload;

    return {
        ...state,
        products
    }
}

function remove(state, pDel) {
    let products = [...state.products].filter((p) => p.id !== pDel.id);
    
    let selProduct = state.selectedProduct;
    let newSelProduct = {
        id: '',
        title: '',
        description: '',
        price: '',
        inCart: ''
    }
    let selectedProduct = (selProduct.id === pDel.id) ? newSelProduct : selProduct;

    return {
        ...state,
        products,
        selectedProduct
    }
}

function select(state, payload) {
    let selectedProduct = payload;

    return {
        ...state,
        selectedProduct
    }
}

function addMode(state) {
    let addingProduct = true;
    let newProduct = {
        id: '',
        title: '',
        description: '',
        price: '',
        inCart: false
    }

    return {
        ...state,
        addingProduct,
        newProduct
    }
}

function cancel(state) {
    let selectedProduct = {
        id: '',
        title: '',
        description: '',
        price: '',
        inCart: ''
    }

    return {
        ...state,
        selectedProduct
    }
}

function cancelCreate(state) {
    let addingProduct = false;
    let newProduct = null;

    return {
        ...state,
        addingProduct,
        newProduct
    }
}

function create(state, payload) {
    let products = [...state.products].push(payload);
    let addingProduct = false;
    let newProduct = null;
  
    return {
        ...state,
        products,
        addingProduct,
        newProduct
    }
}

function update(state) {
    let selectedProduct = {
        id: '',
        title: '',
        description: '',
        price: '',
        inCart: ''
    }
  
    return {
        ...state,
        selectedProduct
    }
}

function change(state, event) {
    let selectedProduct = {...state.selectedProduct};
    
    selectedProduct[event.target.name] = event.target.value;
    selectedProduct.price = Number(selectedProduct.price);

    return {
        ...state,
        selectedProduct
    }
}

function changeCreate(state, event) {
    let newProduct = {...state.newProduct};

    newProduct[event.target.name] = event.target.value;
    newProduct.price = Number(newProduct.price);

    return {
        ...state,
        newProduct
    }
}

let reducer = function(state = initialState, action) {
    switch (action.type) {
        case 'PRODUCT_GET':
            return get(state, action.items);
        case 'PRODUCT_REMOVE':
            return remove(state, action.i);
        case 'PRODUCT_SELECT':
            return select(state, action.i);
        case 'PRODUCT_ADD_MODE':
            return addMode(state);
        case 'PRODUCT_CANCEL':
            return cancel(state);
        case 'PRODUCT_CANCEL_CREATE':
            return cancelCreate(state);
        case 'PRODUCT_CREATE':
            return create(state, action.items);
        case 'PRODUCT_UPDATE':
            return update(state);
        case 'PRODUCT_CHANGE':
            return change(state, action.e);
        case 'PRODUCT_CHANGE_CREATE':
            return changeCreate(state, action.e);
            // break;
        default:
            return state;
    }
}

export default reducer;