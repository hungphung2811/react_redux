import ProductApi from 'api/productApi';
import Loading from 'components/common/molecules/Loading';
import ImageItem from 'components/website/atoms/ImageItem';
import Text from 'components/website/atoms/Text';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom';

function Category() {
    const { id } = useParams();
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
    return (
        <>
            <div className='px-[160px]'>
                <div className='flex'>

                    <div className='grid grid-cols-3 gap-[30px]'>
                        {products.list.map((product, index) => {
                            return (<div key={index}>
                                <ImageItem
                                    url={product.image}
                                    alt={product.name}
                                    className='w-[265px] h-[265px] object-cover'
                                />
                                <Text heading='h2'
                                    className='mt-3 text-[15px] font-semibold font-body'
                                >
                                    {product.name}
                                </Text>
                            </div>)
                        })}
                    </div>
                    <div className='w-[300px] ml-[50px] bg-blue-400'>

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
