export const getCategories = (categories) => {
    return {
        type: 'GET_CATEGORIES',
        payload: categories
    }
}

export const getCategoriesStatus = (status) => {
    return {
        type: 'GET_CATEGORIES_SUCCESS',
        payload: status
    }
}