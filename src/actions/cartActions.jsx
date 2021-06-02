import { ADD_TO_CART } from "constants/actionTypeCart"

export const addToCart = (cart) => {
    return {
        type: ADD_TO_CART,
        payload: cart
    }
}