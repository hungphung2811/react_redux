import CategoryApi from 'api/categoryApi';
import ProductApi from 'api/productApi';
import Button from 'components/common/atoms/Button';
import ImageItem from 'components/common/atoms/ImageItem';
import Text from 'components/common/atoms/Text';
import Breadcrumb from 'components/website/molecules/Breadcrumb';
import CardProduct from 'components/website/molecules/CardProduct';
import React, { useEffect, useState } from 'react'
import { AiOutlineShareAlt } from 'react-icons/ai';
import { HiOutlineArrowDown, HiOutlineArrowUp } from 'react-icons/hi';
import { useParams } from 'react-router'

function DetailPage() {
    const { id } = useParams();
    const [product, setProduct] = useState({
        product: {},
        productRelated: [],
        loading: true,
        erroring: null
    })
    useEffect(() => {
        (async () => {
            try {
                const product = await ProductApi.getOne(id);

                const category = await CategoryApi.getOne(product.categoryId);
                const dataProductRelated = await ProductApi.getItemsByOption({ categoryId: category._id, _limit: 5, _sort: 'createdAt', _order: 'desc' });
                setProduct({
                    ...product,
                    product,
                    productRelated: dataProductRelated,
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
    }, [id, product])

    return (
        <>
            <Breadcrumb variant='custom' label='shop'>
                The team watchers
            </Breadcrumb>
            <div className='my-10 px-24 flex justify-between'>
                <div className='w-[550px] mr-[45px]'>
                    <ImageItem
                        className='w-[550px]'
                        url={product.image}
                        alt={product.name}
                    />
                </div>
                <div className='w-full'>
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
                    <div className='pb-3 mt-5 flex items-end'>
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
                        <div className='ml-40'>
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
                            <AiOutlineShareAlt className='mr-2' />
                            <span className='text-[15px]'>
                                Share
                            </span>
                        </Button>
                    </div>
                </div>
            </div>

            <div className="mt-10 px-24">
                <form action="">
                    <div class="mt-1">
                        <textarea id="about"
                            name="about" rows="3"
                            class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
                            placeholder="Bình luận"></textarea>
                    </div>
                    <div className='mt-2'>
                        <Button
                            variant='btn-tag'
                            color='text-white'
                            bg='bg-blue-600'
                        >Gửi bình luận</Button>
                    </div>
                </form>
            </div>

            <div className='my-10 flex justify-between'>
                <div className='px-24 grid grid-cols-5 gap-[10px]'>
                    {product.productRelated.map((product, index) => {
                        return <CardProduct product={product} key={index} />
                    })}
                </div>

            </div>
        </>
    )
}

export default DetailPage
