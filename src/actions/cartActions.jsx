import { ADD_TO_CART, GET_TOTAL, REMOVE_CART_ITEM, SAVE_CART_TO_LOCAL } from "service/constants/actionTypeCartConstant"

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

export const removeCartItem = (cart) => {
    return {
        type: REMOVE_CART_ITEM,
        payload: cart
    }
}

export const saveCartToLocalStorage = (cart) => {
    return {
        type: SAVE_CART_TO_LOCAL,
        payload: cart
    }
}