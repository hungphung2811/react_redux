const { ADD_TO_CART, GET_TOTAL } = require("constants/actionTypeCart");

const initialState = {
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
            return { ...state, total, amount }
        default:
            return state;
    }
}

export default cartReducer
