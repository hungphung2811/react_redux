import Button from 'components/common/atoms/Button'
import Text from 'components/common/atoms/Text'
import FormGroup from 'components/common/molecules/FormGroup'
import Breadcrumb from 'components/website/molecules/Breadcrumb'
import CartItem from 'components/website/molecules/CartItem'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import OrderApi from 'api/orderApi'
import { getFromLocalStorage } from 'service/utilities/localStorage'
import ProductApi from 'api/productApi'
import OrderDetailApi from 'api/orderDetailApi'
import Loading from 'components/common/molecules/Loading'
import { clearCart } from 'actions/cartActions'
import { saveCartToLocalStorage } from 'actions/cartActions'

function CartPage() {
    const { handleSubmit, register, reset, formState: { errors } } = useForm();
    const dispatch = useDispatch()
    const { listCart, amount, total } = useSelector(state => state.cart)
    const cartState = useSelector(state => state.cart)

    const [loading, setLoading] = useState(false)

    const onHandleSubmit = (data) => {
        setLoading(true);
        (async () => {
            try {
                const { user, token } = getFromLocalStorage('user')
                const dataOrder = await OrderApi.addOrder({ ...data, userId: user._id }, user._id, token)
                const carts = getFromLocalStorage('cart')?.listCart;
                carts.forEach(async cart => {
                    const orderDetail = { ...cart, _id: null, productId: cart._id, orderId: dataOrder._id };
                    await OrderDetailApi.add(orderDetail, user._id, token);
                    const product = await ProductApi.getOne(orderDetail.productId);
                    const newInstock = product.instock - orderDetail.amount;
                    const newProduct = { ...product, instock: newInstock }
                    await ProductApi.updateProduct(orderDetail.productId, newProduct, user._id, token);
                    dispatch(clearCart());
                    dispatch(saveCartToLocalStorage(cartState))
                    reset();
                    setLoading(false)
                    alert('order successful')
                })
            } catch (error) {
                setLoading(false)
                console.log(error.response);
            }
        })();
    }


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
            <div className={`${loading ? 'block' : 'hidden'}`}>
                <Loading />
            </div>
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
                <form onSubmit={handleSubmit(onHandleSubmit)}>
                    <div className='mt-10 flex justify-between'>
                        <div className='w-full mr-10'>

                            <div>
                                <FormGroup
                                    type='text'
                                    name='userName'
                                    id='userName'
                                    label='Người nhận'
                                    require={true}
                                    error={errors.name}
                                    reg={{ ...register('name', { required: true, }) }}
                                />
                                {errors.name && <p className='mt-3 text-xs font-medium text-red-500'>
                                    Vui lòng nhập đúng họ tên
                                    </p>}
                            </div>

                            <div className='mt-5'>
                                <FormGroup
                                    type='text'
                                    name='phoneNumber'
                                    id='phoneNumber'
                                    label='Số điện thoại'
                                    require={true}
                                    // error={errorsState.quantity}
                                    reg={{
                                        ...register('phone',
                                            {
                                                required: true,
                                                pattern: /^(0)+(32|33|34|35|36|37|38|39|56|58|59|70|76|77|78|79|81|82|83|84|85|86|88|89|90|91|92|93|94|96|97|98|99)+([0-9]){7}$/
                                            })
                                    }}
                                />
                                {errors.phone && <p className='mt-3 text-xs font-medium text-red-500'>
                                    Vui lòng nhập số điện thoại
                                    </p>}
                            </div>

                            <div className='mt-5'>
                                <FormGroup
                                    type='text'
                                    name='address'
                                    id='address'
                                    label='Địa chỉ'
                                    require={true}
                                    // error={errorsState.quantity}
                                    reg={{
                                        ...register('address',
                                            {
                                                required: true,
                                            }
                                        )
                                    }}
                                />
                                {errors.address && <p className='mt-3 text-xs font-medium text-red-500'>
                                    Vui lòng nhập đúng địa chỉ
                                    </p>}
                            </div>
                        </div>
                        <div>
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
                                        <td className='border border-gray-300 px-20 py-2'>${total}</td>
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
                    </div>
                </form>
            </div>
        </>
    )
}

export default CartPage
