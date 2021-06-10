import { getProducts } from 'actions/productActions';
import ProductApi from 'api/productApi';
import ListProducts from 'components/admin/organisms/ListProducts';
import Loading from 'components/common/molecules/Loading';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function ProductDashboardPage() {
    const products = useSelector(state => state.product)
    const dispatch = useDispatch()
    useEffect(() => {
        ; (async () => {
            try {
                // const dataProducts = await ProductApi.getAll();
                const dataProducts = await ProductApi.getItemsByOption({ _limit: 10, _sort: 'createdAt', _order: 'desc' });
                dispatch(getProducts(dataProducts))
            } catch (error) {
                console.log(error);
            }
        })();
    }, [dispatch])

    return (
        <>
            <div className={`${products.loading ? 'block' : 'hidden'}`}>
                <Loading />
            </div>
            <div>
                <div className="bg-gray-200 py-3">
                    <div className="px-4 mr-auto flex justify-end mb-1.5">
                        <Link
                            to='/admin/product/addnew'
                            className='px-3 py-1 text-[15px] rounded-[5px] text-white font-body font-medium bg-green-700 hover:bg-green-600'
                        >
                            Add new
                        </Link>
                    </div>
                    <div className="flex flex-col">
                        <div className="-my-2 overflow-x-auto">
                            <div className="py-2 align-middle inline- min-w-full sm:px-3 lg:px-4">
                                <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-sm" id="list-products">
                                    <ListProducts products={products.listProducts} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductDashboardPage
