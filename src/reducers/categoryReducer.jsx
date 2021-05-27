const initialState = {
    listCategories: [],
    loading: true,
    message: ''
}

const categoryReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_CATEGORIES':
            return { ...state, listCategories: action.payload };
        case 'GET_CATEGORIES_SUCCESS':
            return { ...state, loading: action.payload }
        default:
            return state;
    }
}

export default categoryReducer;
