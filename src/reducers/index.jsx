import { combineReducers } from 'redux';
import cartReducer from './cartReducer';
import categoryReducer from './categoryReducer';
import productReducer from './product';

const rootReducer = combineReducers({
    product: productReducer,
    category: categoryReducer,
    cart: cartReducer
});

export default rootReducer;