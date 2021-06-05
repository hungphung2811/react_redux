import { ADD_TO_CART, GET_TOTAL, SAVE_CART_TO_LOCAL } from "service/constants/actionTypeCart"

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

export const saveCartToLocalStorage = (cart) => {
    return {
        type: SAVE_CART_TO_LOCAL,
        payload: cart
    }
}