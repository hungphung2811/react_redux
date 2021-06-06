import { DELETE_PRODUCT, GET_PRODUCT } from "service/constants/actionTypeProductConstant";

const initialState = {
    listProducts: [],
    loading: true,
    erroring: null,
    message: '',
}

const productReducer = (state = initialState, action) => {
    switch (action.type) {

        case GET_PRODUCT:
            return { ...state, listProducts: action.payload, loading: false }
        case DELETE_PRODUCT:
            const newListProduct = state.listProducts.filter(product => {
                return product._id !== action.payload
            })
            return {
                ...state, listProducts: newListProduct, loading: false
            }
        default:
            return state;
    }
}

export default productReducer;
