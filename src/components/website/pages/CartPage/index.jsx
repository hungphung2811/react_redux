import Button from 'components/common/atoms/Button'
import Text from 'components/common/atoms/Text'
import Breadcrumb from 'components/website/molecules/Breadcrumb'
import CartItem from 'components/website/molecules/CartItem'
import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

function CartPage() {
    const { listCart } = useSelector(state => state.cart)
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
                <div className='float-right mt-5'>
                    <Text varaint='span'
                        className='font-semibold text-[18px]'
                    > Totals </Text>
                    <table className='table-auto border-collapse'>
                        <tbody>
                            <tr>
                                <td className='border border-gray-300'>length</td>
                                <td className='border border-gray-300'></td>
                            </tr>
                            <tr>
                                <td>total</td>
                            </tr>
                        </tbody>
                    </table>
                    <Button
                        variant='btn-tag'
                        size='small'
                        color='text-white'
                        bg='bg-yellow-600'
                        twCustom={true}
                        classname='font-semibold text-[18px] rounded hover:bg-gray-900 transition-colors'
                    >
                        <Link to='/checkout'>
                            Checkout
                        </Link>
                    </Button>
                </div>
                <div className='clear-right'></div>
            </div>
        </>
    )
}

export default CartPage
