import CategoryApi from 'api/categoryApi';
import ProductApi from 'api/productApi';
import React, { useEffect, useState } from 'react'

function DashBoardPage() {
    const [products, setProducts] = useState({
        length: 0,
        quantity: 0
    })

    const [categories, setCategories] = useState({
        length: 0,
    })

    useEffect(()=>{
        ; (async () => {
            try {
                const dataProducts = await ProductApi.getAll();
                setProducts({
                    ...products,
                    length: dataProducts.length,
                    quantity: dataProducts.reduce((total, product) => {
                        return total + parseInt(product.quantity);
                    }, 0)
                })

            } catch (error) {
                console.log(error);
            }
        })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() => {
        ; (async () => {
            try {
                const datacategories = await CategoryApi.getAll();
                setCategories({
                    ...categories,
                    length: datacategories.length
                })
            } catch (error) {
                console.log(error);
            }
        })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    return (
        <>
            <div className="pl-5 pt-10 bg-gray-200">
                <div className="flex">
                    <div className="bg-indigo-500 p-8 mr-3 shadow rounded text-white font-semibold uppercase">
                        products :
                        <p className="text-xs"> - length: <span>{products.length}</span></p>
                        <p className="text-xs"> - quantity: <span> {products.quantity} </span></p>
                    </div>
                    <div className="bg-red-500 p-8 mr-3 shadow rounded text-white font-semibold uppercase">
                        categories : <span> {categories.length}</span>
                    </div>
                    <div></div>
                </div>
            </div>

        </>
    )
}

export default DashBoardPage
