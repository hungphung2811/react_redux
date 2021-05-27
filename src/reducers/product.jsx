
const initialState = {
    products: [],
    loading: true
}

const productReducer = (state = initialState, action) => {
    switch (action.type) {

        case 'GET_PRODUCT':
            return { ...state, products: action.payload }
        default:
            return state;
    }
}

export default productReducer;
