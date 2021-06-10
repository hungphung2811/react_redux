import { increaseAmoutCart } from 'actions/cartActions'
import { saveCartToLocalStorage } from 'actions/cartActions'
import { decreaseAmoutCart } from 'actions/cartActions'
import { getTotalCart } from 'actions/cartActions'
import { removeCartItem } from 'actions/cartActions'
import Text from 'components/common/atoms/Text'
import React, { useEffect } from 'react'
import { HiOutlineArrowDown, HiOutlineArrowUp } from 'react-icons/hi'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { CHANGE_AMOUNT_DECREASE, CHANGE_AMOUNT_INCREASE } from 'service/constants/actionTypeCartConstant'

function CartItem({ cart, ...props }) {
    const dispatch = useDispatch()
    const cartState = useSelector(state => state.cart)

    const handleRemove = (cart) => {
        const userCofirm = window.confirm('ban cos muon xoa item')
        if (userCofirm) {
            dispatch(removeCartItem(cart))
            dispatch(saveCartToLocalStorage(cartState))
        }
    }

    const handleChangeAmount = (cart, type) => {
        if (type === CHANGE_AMOUNT_INCREASE) {
            dispatch(increaseAmoutCart(cart));
        }
        if (type === CHANGE_AMOUNT_DECREASE) {
            dispatch(decreaseAmoutCart(cart));
        }
    }
    return (
        <>
            <tr {...props}>
                <td className='border border-gray-300'>
                    <Text className='cursor-pointer'
                        onClick={() => { handleRemove(cart) }} variant='span'
                    >x
                    </Text>
                </td>
                <td className='px-5 py-2 border border-gray-300'>
                    <img className='mx-auto'
                        width="100"
                        height="100"
                        src={cart.image} />
                </td>
                <td className='border border-gray-300 font-medium hover:text-yellow-600'>
                    <Link to={`/detail/${cart._id}`}>
                        {cart.name}
                    </Link>
                </td>
                <td className='border border-gray-300'>
                    ${cart.price}
                </td>
                <td className='border border-gray-300 pl-12'>
                    <div className='flex'>
                        <Text variant='span'
                            className='bg-gray-200 rounded-full p-1'>
                            <HiOutlineArrowDown
                                onClick={() => { handleChangeAmount(cart, CHANGE_AMOUNT_DECREASE) }}
                            />
                        </Text>
                        <div className='mx-3 px-1'>
                            <input
                                className='w-5 h-5 px-1 bg-transparent border-none focus:outline-none'
                                type="text"
                                // defaultValue={cart.amount}
                                readOnly
                                value={cart.amount}
                            />
                        </div>
                        <Text variant='span'
                            className='bg-gray-200 rounded-full p-1'>
                            <HiOutlineArrowUp onClick={() => { handleChangeAmount(cart, CHANGE_AMOUNT_INCREASE) }} />
                        </Text>
                    </div>
                </td>
                <td className='border border-gray-300'>
                    ${cart.amount * cart.price}
                </td>
            </tr>
        </>
    )
}

export default CartItem
