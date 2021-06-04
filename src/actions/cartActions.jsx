import { ADD_TO_CART, GET_TOTAL } from "constants/actionTypeCart"

export const addToCart = (cart) => {
    return {
        type: ADD_TO_CART,
        payload: cart
    }
}

export const getTotalCart = () => {
    return {
        type: GET_TOTAL
    }
}