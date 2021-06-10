import Button from 'components/common/atoms/Button'
import Text from 'components/common/atoms/Text'
import Breadcrumb from 'components/website/molecules/Breadcrumb'
import CartItem from 'components/website/molecules/CartItem'
import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

function CartPage() {
    const { listCart, amount, total } = useSelector(state => state.cart)
    if (!Array.isArray(listCart) || listCart.length === 0) {
        return (
            <div className='my-10 px-32 text-center'>
                <Text variant='span' className='block text-4xl font-semibold text-gray-200 mb-2'>
                    Cart is empty
                </Text>
                <Text
                    className='font-medium'
                >
                    Không có sản phẩm trong giỏ . quay trở lại
                    <Link
                        className='text-yellow-600 uppercase font-extrabold ml-1'
                        to='/shop'>
                        shop
                    </Link>
                </Text>
            </div>
        )
    }
    return (
        <>
            <Breadcrumb >
                cart
            </Breadcrumb>
            <div className='px-32 my-10'>
                <table className='w-full table-auto border-collapse text-center border border-gray-300'>
                    <thead>
                        <tr>
                            <th className='border border-gray-300 px-5 py-1'></th>
                            <th className='border border-gray-300 px-10 py-3 font-body text-sm text-gray-500 font-semibold'></th>
                            <th className='border border-gray-300 px-10 py-3 font-body text-sm text-gray-500 font-semibold'>Product</th>
                            <th className='border border-gray-300 px-10 py-3 font-body text-sm text-gray-500 font-semibold'>Price</th>
                            <th className='border border-gray-300 px-10 py-3 font-body text-sm text-gray-500 font-semibold'>Quantity</th>
                            <th className='border border-gray-300 px-10 py-3 font-body text-sm text-gray-500 font-semibold'>SubToTal</th>
                        </tr>
                    </thead>
                    <tbody className='text-[16px]'>
                        {listCart.map((cart, index) => {
                            return <CartItem cart={cart} key={index} />
                        })}
                    </tbody>
                </table>
                <div className='float-right mt-10'>
                    <Text varaint='span'
                        className='font-semibold text-[18px] mb-3'
                    > Totals </Text>
                    <table className='table-auto border-collapse'>
                        <tbody>
                            <tr>
                                <td className='border border-gray-300 px-5 py-2'>length</td>
                                <td className='border border-gray-300 px-20 py-2'>{amount}</td>
                            </tr>
                            <tr>
                                <td className='border border-gray-300 px-5 py-2'>Total</td>
                                <td className='border border-gray-300 px-20 py-2'>{total}</td>
                            </tr>
                        </tbody>
                    </table>
                    <Button
                        variant='btn-tag'
                        size='small'
                        color='text-white'
                        bg='bg-yellow-600'
                        twCustom={true}
                        classname='mt-3 font-semibold text-[18px] rounded-[100px] hover:bg-gray-900 transition-colors'
                    >
                        Checkout
                    </Button>
                </div>
                <div className='clear-right'></div>
            </div>
        </>
    )
}

export default CartPage
