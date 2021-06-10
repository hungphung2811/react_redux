import { getFromLocalStorage, setToLocalStorage } from "service/utilities/localStorage";

const { ADD_TO_CART, GET_TOTAL, SAVE_CART_TO_LOCAL, REMOVE_CART_ITEM, CHANGE_AMOUNT_UP, CHANGE_AMOUNT_INCREASE, CHANGE_AMOUNT_DECREASE } = require("service/constants/actionTypeCartConstant");

const initialState = getFromLocalStorage('cart') || {
    listCart: [],
    total: 0,
    amount: 0,
    loading: true,
    message: '',
    erroring: '',
}

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            if (state.listCart.length === 0) {
                return (
                    {
                        ...state,
                        listCart: [...state.listCart, { ...action.payload, amount: 1 }]
                    }
                )
            } else {
                const cartInListCart = state.listCart.find(cart => {
                    return cart._id === action.payload._id
                })
                if (cartInListCart) {
                    const newListCart = state.listCart.map(cart => {
                        if (cart._id === action.payload._id) {
                            return { ...cart, amount: cart.amount += 1 }
                        }
                        return cart
                    })
                    return {
                        ...state,
                        listCart: newListCart
                    }
                } else {
                    return {
                        ...state,
                        listCart: [...state.listCart, { ...action.payload, amount: 1 }]
                    }
                }
            }

        case GET_TOTAL:
            let { total, amount } = state.listCart.reduce((cartTotal, cartItem) => {
                const { price, amount } = cartItem
                const itemTotal = parseFloat(price) * parseInt(amount)
                cartTotal.total += itemTotal
                cartTotal.amount += parseInt(amount)
                return cartTotal
            }, {
                total: 0,
                amount: 0
            })
            total = parseFloat(total.toFixed(2))
            return { ...state, listCart: state.listCart, total, amount }

        case SAVE_CART_TO_LOCAL:
            setToLocalStorage('cart', action.payload);
            return state;

        case REMOVE_CART_ITEM:
            return {
                ...state,
                listCart: state.listCart.filter(cart => {
                    return cart._id !== action.payload._id;
                })
            }

        case CHANGE_AMOUNT_INCREASE:
            const newCart = state.listCart.map(cart => {
                if (cart._id === action.payload._id) {
                    return { ...cart, amount: cart.amount + 1 }
                }
                return cart
            })
            return { ...state, listCart: newCart }

        case CHANGE_AMOUNT_DECREASE:
            console.log('xuong reducer');
            const tempCartDesc = state.listCart.map(cart => {
                console.log(action.payload);
                if (cart._id === action.payload._id) {
                    console.log('vao',cart);
                    let tempCart = { ...cart, amount: cart.amount - 1 }
                    if (tempCart.amount <= 0) {
                        const conFirmUser = window.confirm('ban muon xoa')
                        if (conFirmUser) {
                            return tempCart
                        } else {
                            return cart
                        }
                    }
                    return tempCart
                }
                return cart
            }).filter(cart => cart.amount > 0)
            console.log({ tempCartDesc});
            return { ...state, listCart: tempCartDesc }
        default:
            return state;
    }
}

export default cartReducer
