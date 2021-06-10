import { getTotalCart } from 'actions/cartActions';
import { saveCartToLocalStorage } from 'actions/cartActions';
import { removeCartItem } from 'actions/cartActions';
import ImageItem from 'components/common/atoms/ImageItem';
import Text from 'components/common/atoms/Text';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function CartPreviewItem({ cartItem, ...props }) {
    const dispatch = useDispatch();
    const cartState = useSelector(state => state.cart)

    const handleRemoveCartItem = (cart) => {
        const userCofirm = window.confirm('ban cos muon xoa item')
        if (userCofirm) {
            dispatch(removeCartItem(cart))
            console.log(cartState);
            dispatch(saveCartToLocalStorage(cartState))
        }
    }

    return (
        <li {...props} className='px-3 py-1 flex justify-between items-center'>
            <ImageItem
                className='w-8 object-contain'
                url={cartItem.image}
            />
            <div>
                <Text
                    variant='span'
                    className='text-[12px] text-white font-body font-medium'
                >
                    {cartItem.name}
                </Text>

                <div>
                    <Text
                        variant='span'
                        className='mr-2 text-[12px] text-white font-body font-thin'
                    >
                        {cartItem.amount}
                    </Text>
                            x
                            <Text
                        variant='span'
                        className='ml-2 text-[17px] text-yellow-600 font-semibold'
                    >
                        $ {cartItem.price}
                    </Text>
                </div>
            </div>
            <div>
                <Text
                    onClick={() => { handleRemoveCartItem(cartItem) }}
                    variant='span'
                    className='text-xs cursor-pointer p-2'>
                    x
                        </Text>
            </div>
        </li>
    )
}

export default CartPreviewItem
