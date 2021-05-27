import { combineReducers } from 'redux';
import categoryReducer from './categoryReducer';
import productReducer from './product';
import todoReducer from './todo';

const rootReducer = combineReducers({
    todo: todoReducer,
    product: productReducer,
    category: categoryReducer
});

export default rootReducer;