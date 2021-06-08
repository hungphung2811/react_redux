import ProductApi from 'api/productApi';
import Button from 'components/common/atoms/Button';
import ImageItem from 'components/common/atoms/ImageItem';
import Text from 'components/common/atoms/Text';
import Breadcrumb from 'components/website/molecules/Breadcrumb';
import React, { useEffect, useState } from 'react'
import { AiOutlineShareAlt } from 'react-icons/ai';
import { HiOutlineArrowDown, HiOutlineArrowUp } from 'react-icons/hi';
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
            <Breadcrumb variant='custom' label='shop'>
                The team watchers
            </Breadcrumb>
            <div className='my-10 px-32 grid grid-cols-2 gap-[45px]'>
                <div className='w-[560px]'>
                    <ImageItem
                        className='w-[560px] h-[715px]'
                        url={product.image}
                        alt={product.name}
                    />
                </div>
                <div>
                    <div className='border-b border-gray-200 pb-3'>
                        <Text variant='h1' className='text-[25px] font-semibold'>
                            {product.name}
                        </Text>
                    </div>
                    <div className='border-b border-gray-200 pb-3 mt-5'>
                        <Text className='text-[25px] font-semibold'>
                            £ {product.price}
                        </Text>
                    </div>
                    <div className='pb-3 mt-5'>
                        <Text className='text-[15px] font-body font-normal'>
                            {product.description}
                        </Text>
                    </div>
                    <div className='pb-3 mt-5 flex justify-between items-end'>
                        <div>
                            <div className='mb-3'>
                                <Text variant='span'
                                    className='font-semibold text-[17px]'>
                                    {product.instock} Instock
                                </Text>
                            </div>
                            <div className='flex'>
                                <Text variant='span'
                                    className='bg-gray-200 rounded-full p-1'>
                                    <HiOutlineArrowUp />
                                </Text>
                                <div className='mx-3 bg-gray-200 px-1'>
                                    <input
                                        className='w-5 h-5 px-1 bg-transparent border-none focus:outline-none'
                                        type="text" defaultValue={1} />
                                </div>
                                <Text variant='span'
                                    className='bg-gray-200 rounded-full p-1'>
                                    <HiOutlineArrowDown />
                                </Text>
                            </div>
                        </div>
                        <div>
                            <Button
                                variant='btn-tag'
                                size='small'
                                bg='bg-yellow-700'
                                twCustom={true}
                                classname='rounded-2xl text-white font-medium'
                            >
                                Add to cart
                            </Button>
                        </div>
                    </div>

                    <div className='mt-3'>
                        <Button
                        variant='btn-tag'
                        bg='bg-gray-300'
                        twCustom={true}
                        classname='py-[10px] font-medium font-body flex items-center text-gray-800'
                        >
                            <AiOutlineShareAlt className='mr-2'/>
                            <span className='text-[15px]'>
                                Share
                            </span>
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DetailPage
