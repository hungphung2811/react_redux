import ProductApi from 'api/productApi';
import ListProducts from 'components/admin/organisms/ListProducts'
import Button from 'components/common/atoms/Button';
import Loading from 'components/common/molecules/Loading';
import React, { useEffect, useState } from 'react'

function ProductDashboardPage() {
    const [products, setProducts] = useState({
        listProducts: [],
        loading: true,
        erroring: null,
        message: '',
    })

    useEffect(() => {
        ; (async () => {
            try {
                const dataProducts = await ProductApi.getAll();
                setProducts({
                    ...products,
                    listProducts: [...products.listProducts, ...dataProducts],
                    loading: false
                })
            } catch (error) {
                setProducts({
                    ...products,
                    listProducts: [...products.listProducts],
                    loading: false,
                    erroring: error
                })
            }
        })();
    }, [])

    return (
        <>
            <div className={`${products.loading ? 'block' : 'hidden'}`}>
                <Loading />
            </div>
            <div>
                <div className="bg-gray-200 py-3">
                    <div className="px-4 mr-auto flex justify-end mb-1.5">
                        <Button
                        variant='btn-tag'
                        bg='bg-green-700'
                        twCustom = {true}
                        classname='px-3 py-1 rounded-md text-white font-body font-medium hover:bg-green-600'
                        >
                            Add new
                        </Button>
                        
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
