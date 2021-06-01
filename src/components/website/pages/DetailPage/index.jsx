import ProductApi from 'api/productApi';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'

function DetailPage() {
    const { id } = useParams();
    const [product, setProduct] = useState({
        product: {},
        loading: true,
        erroring: null
    })
    useEffect(() => {
        (async () => {
            try {
                const product = await ProductApi.getOne(id);
                console.log(product);
                setProduct({
                    ...product,
                    product,
                    loading: false,
                    erroring: null
                })
            } catch (error) {
                console.log(error);
                setProduct({
                    ...product,
                    product: {},
                    loading: false,
                    erroring: error
                })
            }
        })();
    }, [id])
    return (
        <div>
            detail page website {id}
        </div>
    )
}

export default DetailPage
