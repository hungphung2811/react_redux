const initialState = {
    listCategories: [],
    loading: false,
    message: ''
}

const categoryReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_CATEGORIES':
            return { ...state, listCategories: action.payload };

        case 'GET_CATEGORIES_SUCCESS':
            return { ...state, loading: action.payload }

        case 'DELETE_CATEGORY':
            const newListProduct = state.listCategories.filter(product => {
                return product._id !== action.payload
            })
            return {
                ...state, listCategories: newListProduct, loading: false
            }
        case 'EDIT_CATEGORY':
            return { ...state, listCategories: [...state.listCategories, action.payload], loading: false }

        default:
            return state;
    }
}

export default categoryReducer;
