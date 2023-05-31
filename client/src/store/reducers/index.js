import { combineReducers } from 'redux';
import categories from './categories';
import products from './products';
import productsCart from './productsCart';
import productsCheckout from './productsCheckout';
import productsOrder from './productsOrder';

const reducers = combineReducers({
    categories,
    products,
    productsCart,
    productsCheckout,
    productsOrder,
});

export default reducers;