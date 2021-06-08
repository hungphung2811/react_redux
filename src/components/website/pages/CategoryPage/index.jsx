import { addToCart, getTotalCart, saveCartToLocalStorage } from 'actions/cartActions';
import ProductApi from 'api/productApi';
import ImageItem from 'components/common/atoms/ImageItem';
import Text from 'components/common/atoms/Text';
import Loading from 'components/common/molecules/Loading';
import AsideFilter from 'components/website/molecules/AsideFilter';
import Breadcrumb from 'components/website/molecules/Breadcrumb';
import React, { useEffect, useState } from 'react';
import { FiShoppingCart } from 'react-icons/fi';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

function Category() {
    const { id } = useParams();

    const dispatch = useDispatch()
    const { listCart } = useSelector(state => state.cart);
    const cart = useSelector(state => state.cart);

    const [products, setProducts] = useState({
        list: [],
        loading: true,
        erroring: null
    })

    useEffect(() => {
        setProducts({
            ...products,
            loading: true
        });

        (async () => {
            try {
                let dataProducts;
                if (id) {
                    dataProducts = await ProductApi.getByCategory(id);
                } else {
                    dataProducts = await ProductApi.getAll();
                }
                setProducts({
                    list: [...dataProducts],
                    loading: false,
                    erroring: null
                })
            } catch (error) {
                console.log(error);
                setProducts({
                    list: [...products.list],
                    loading: false,
                    erroring: error
                })
            }
        })();
    }, [id])

    useEffect(() => {
        dispatch(getTotalCart());
        dispatch(saveCartToLocalStorage(cart));
    }, [listCart])

    const handleAddToCart = (product) => {
        dispatch(addToCart(product))
        dispatch(saveCartToLocalStorage(cart))
    }
    return (
        <>
            <Breadcrumb>category</Breadcrumb>
            <div className='px-[160px] mt-10'>
                <div className='flex'>

                    <div className='grid grid-cols-3 gap-[30px]'>
                        {products.list.map((product, index) => {
                            return (<div className='mb-5' key={index}>
                                <Link to={`/detail/${product._id}`}>
                                    <ImageItem
                                        url={product.image}
                                        alt={product.name}
                                        className='w-[265px] h-[265px] object-cover'
                                    />
                                </Link>
                                <div className='mt-3 flex justify-between items-center'>
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
                                <div className='flex text-[15px] mt-2 font-semibold'>
                                    £
                                    <Text className='ml-5' variant='span'>
                                        {product.price}
                                    </Text>
                                </div>

                            </div>)
                        })}
                    </div>
                    <div className='w-[300px] ml-[50px] bg-blue-500 z-10 h-[100px]'>
                        <AsideFilter />
                    </div>
                </div>
            </div>
            <div className={`${products.loading ? 'block' : 'hidden'}`}>
                <Loading />
            </div>
        </>
    )
}

export default Category
