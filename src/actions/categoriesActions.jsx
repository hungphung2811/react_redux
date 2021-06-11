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

export const deleteCategory = id => {
    return {
        type: 'DELETE_CATEGORY',
        payload: id
    }
}

export const updateCategory = category => {
    return {
        type: 'EDIT_CATEGORY',
        payload: category
    }
}