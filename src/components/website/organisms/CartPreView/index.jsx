import Text from 'components/common/atoms/Text'
import CartPreviewItem from 'components/website/molecules/CartPreviewItem'
import React from 'react'
import { FiCheck, FiEye } from 'react-icons/fi'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

function CartPreView() {
    const { listCart, total } = useSelector(state => state.cart)
    return (
        <>
            {listCart.map((cart, index) => {
                return <CartPreviewItem cartItem={cart} key={index} />
            })}
            <div className='border-t py-2 mt-3 border-gray-600 text-center'>
                <Text
                    variant='span'
                    className='font-medium uppercase text-gray-500'
                >
                    subtotal:
                    <Text
                        variant='span'
                        className='text-sm ml-2'
                    >
                        $ {total}
                    </Text>
                </Text>
            </div>
            <div className='grid grid-cols-2 py-2 text-center text-[17px] text-white font-body font-medium border-t border-gray-600'>
                <div className='border-r border-gray-300'>
                    <Link
                        to='/cart'
                        className='pl-3 flex items-center'
                    >
                        <FiEye className='mr-2' />
                            View cart
                    </Link>
                </div>
                <div>
                    <Link
                        className='pl-3 flex items-center'
                        to='/checkout'>
                        <FiCheck className='mr-2' />
                            Check out
                        </Link>
                </div>
            </div>
        </>
    )
}

export default CartPreView
