import { GET_PRODUCT, DELETE_PRODUCT } from "service/constants/actionTypeProductConstant"

export const getProducts = (products) => {
    return {
        type: GET_PRODUCT,
        payload: products
    }
}

export const deleteProduct = (id) => {
    return {
        type: DELETE_PRODUCT,
        payload: id
    }
}