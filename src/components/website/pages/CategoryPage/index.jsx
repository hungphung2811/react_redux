import ProductApi from 'api/productApi';
import Loading from 'components/common/molecules/Loading';
import AsideFilter from 'components/website/molecules/AsideFilter';
import Breadcrumb from 'components/website/molecules/Breadcrumb';
import CardProduct from 'components/website/molecules/CardProduct';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

function Category() {
    const { id } = useParams();

    // const dispatch = useDispatch()
    // const { listCart } = useSelector(state => state.cart);
    // const cart = useSelector(state => state.cart);

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id])

    // useEffect(() => {
    //     dispatch(getTotalCart());
    //     dispatch(saveCartToLocalStorage(cart));
    // }, [listCart])

    return (
        <>
            <Breadcrumb>category</Breadcrumb>
            <div className='px-[160px] mt-10'>
                <div className='flex'>

                    <div className='grid grid-cols-3 gap-[30px]'>
                        {products.list.map((product, index) => {
                            return (
                                <CardProduct key={index} product={product} />
                            )
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
