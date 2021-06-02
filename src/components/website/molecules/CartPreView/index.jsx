import ImageItem from 'components/website/atoms/ImageItem'
import Text from 'components/website/atoms/Text'
import React from 'react'
import { FiCheck, FiEye } from 'react-icons/fi'
import { useSelector } from 'react-redux'

function CartPreView() {
    const { listCart, total } = useSelector(state => state.cart)
    return (
        <>
            {listCart.map((cart, index) => {
                return <li className='px-3 py-1 flex justify-between items-center'>
                    <ImageItem
                        className='w-8 object-contain'
                        url={cart.image}
                    />
                    <div>
                        <Text
                            variant='span'
                            className='text-[12px] text-white font-body font-medium'
                        >
                            {cart.name}
                        </Text>

                        <div>
                            <Text
                                variant='span'
                                className='mr-2 text-[12px] text-white font-body font-thin'
                            >
                                {cart.amount}
                            </Text>
                            x
                            <Text
                                variant='span'
                                className='ml-2 text-[17px] text-yellow-600 font-semibold'
                            >
                                $ {cart.price}
                            </Text>
                        </div>
                    </div>
                    <div>
                        <Text variant='span' className='text-xs'>
                            x
                        </Text>
                    </div>
                </li>
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
                    <Text
                        varian='span'
                        className='pl-3 flex items-center'
                    >
                        <FiEye className='mr-2' />
                        View cart
                    </Text>
                </div>
                <div>
                    <Text
                        varian='span'
                        className='pl-3 flex items-center'
                    >
                        <FiCheck className='mr-2' />
                        Check out
                    </Text>
                </div>
            </div>
        </>
    )
}

export default CartPreView
