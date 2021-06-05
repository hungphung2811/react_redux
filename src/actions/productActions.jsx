import { GET_PRODUCT } from "service/constants/actionTypeProductConstant"

export const getProducts = (products) => {
    return {
        type: GET_PRODUCT,
        payload: products
    }
}