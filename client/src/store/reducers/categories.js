import { SET_CATEGORIES, SET_CATEGORY } from "../actions/categories";

const initialState = {
  categoriesData: [],
  productsCategoryData: [],
};

function setCategories(state, { data }) {
    const categoriesData = data.categoriesData;
    return {
        ...state,
        categoriesData,
    }
}

function setCategory(state, { data }) {
    const productsCategoryData = data.productsCategoryData;
    return {
        ...state,
        productsCategoryData,
    }
}

const categoriesReducer = function(state = initialState, action) {
    switch (action.type) {
        case SET_CATEGORIES:
            return setCategories(state, action.payload);
        case SET_CATEGORY:
            return setCategory(state, action.payload);
        default:
            return state;
    }
}

export default categoriesReducer;