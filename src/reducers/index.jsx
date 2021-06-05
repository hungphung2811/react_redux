import { combineReducers } from 'redux';
import authReducer from './authReducer';
import cartReducer from './cartReducer';
import categoryReducer from './categoryReducer';
import productReducer from './product';

const rootReducer = combineReducers({
    product: productReducer,
    category: categoryReducer,
    cart: cartReducer,
    auth: authReducer,
});

export default rootReducer;