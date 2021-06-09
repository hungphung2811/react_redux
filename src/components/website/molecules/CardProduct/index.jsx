import { saveCartToLocalStorage } from 'actions/cartActions'
import { getTotalCart } from 'actions/cartActions'
import { addToCart } from 'actions/cartActions'
import ImageItem from 'components/common/atoms/ImageItem'
import Text from 'components/common/atoms/Text'
import React, { useEffect } from 'react'
import { FiShoppingCart } from 'react-icons/fi'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

function CardProduct({ product, ...props }) {
    const dispatch = useDispatch()
    const cart = useSelector(state => state.cart)
    const { listCart} = useSelector(state => state.cart)

    useEffect(() => {
        dispatch(getTotalCart());
        dispatch(saveCartToLocalStorage(cart));
    }, [listCart])

    const handleAddToCart = (product) => {
        dispatch(addToCart(product))
        dispatch(saveCartToLocalStorage(cart))
    }

    return (
        <div className='mb-5' {...props}>
            <Link to={`/detail/${product._id}`}>
                <ImageItem
                    url={product.image}
                    alt={product.name}
                    className='w-[265px] h-[265px] object-cover'
                />
            </Link>
            <div className='mt-3 px-1 flex justify-between items-center'>
                <Link to={`/detail/${product._id}`}>
                    <Text variant='h2'
                        className='mt-3 text-[15px] font-semibold font-body'
                    >
                        {product.name}
                    </Text>
                </Link>
                <Text className='mt-2 bg-gray-200 text-center px-1.5 py-1 rounded-xl cursor-pointer'
                    variant='span'
                    onClick={() => {
                        handleAddToCart(product)
                    }}>
                    <FiShoppingCart className='text-gray-500 text-[15px]' />
                </Text>
            </div>
            <div className='px-1 flex text-[15px] mt-2 font-semibold'>
                £
                                    <Text className='ml-5' variant='span'>
                    {product.price}
                </Text>
            </div>

        </div>
    )
}

export default CardProduct
