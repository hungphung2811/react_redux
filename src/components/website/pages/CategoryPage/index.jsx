import { addToCart } from 'actions/cartActions';
import ProductApi from 'api/productApi';
import Loading from 'components/common/molecules/Loading';
import Button from 'components/website/atoms/Button';
import ImageItem from 'components/website/atoms/ImageItem';
import Text from 'components/website/atoms/Text';
import Breadcrumb from 'components/website/molecules/Breadcrumb';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router'
import { Link } from 'react-router-dom';

function Category() {
    const { id } = useParams();

    const dispatch = useDispatch()
    const { listCart } = useSelector(state => state.cart);

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
                const dataProducts = await ProductApi.getByCategory(id);
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
        dispatch({ type: 'GET-TOTAL' })
    }, [listCart])

    const handleAddToCart = (product) => {
        dispatch(addToCart(product))
    }
    return (
        <>
            <Breadcrumb>category</Breadcrumb>
            <div className='px-[160px] mt-10'>
                <div className='flex'>

                    <div className='grid grid-cols-3 gap-[30px]'>
                        {products.list.map((product, index) => {
                            return (<div key={index}>
                                <Link to={`/detail/${product._id}`}>
                                    <ImageItem
                                        url={product.image}
                                        alt={product.name}
                                        className='w-[265px] h-[265px] object-cover'
                                    />
                                    <Text variant='h2'
                                        className='mt-3 text-[15px] font-semibold font-body'
                                    >
                                        {product.name}
                                    </Text>
                                </Link>
                                <div onClick={() => {
                                    handleAddToCart(product)
                                }}>
                                    <Button
                                        variant='btn-tag'
                                        size='small'
                                        bg='bg-blue-500'
                                        color='text-white'
                                        twCustom={true}
                                        classname='font-body font-medium text-[10px]'

                                    >add to cart</Button>
                                </div>
                            </div>)
                        })}
                    </div>
                    <div className='w-[300px] ml-[50px] bg-blue-500 z-10 sticky top-[105px] h-[100px]'>
                        side bar category
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
