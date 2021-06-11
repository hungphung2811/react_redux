import { getProducts } from 'actions/productActions';
import CategoryApi from 'api/categoryApi';
import ProductApi from 'api/productApi';
import Button from 'components/common/atoms/Button';
import FormInput from 'components/common/atoms/FormInput';
import ImageItem from 'components/common/atoms/ImageItem';
import Text from 'components/common/atoms/Text';
import Loading from 'components/common/molecules/Loading';
import CardProduct from 'components/website/molecules/CardProduct';
import VerticalBanner from 'components/website/molecules/VerticalBanner';
import Banner from 'components/website/organisms/Banner';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function HomePage() {
    // const products = useSelector(state => state.product);
    const category = useSelector(state => state.category)
    const dispatch = useDispatch();
    const [categoriesFeature, setCategoriesFeature] = useState([])
    const [top8NewProducts, setTop8NewProducts] = useState([])

    useEffect(() => {
        ; (async () => {
            try {
                const products = await ProductApi.getAll();
                dispatch(getProducts(products));
            } catch (error) {

            }
        })();
    }, [dispatch])


    useEffect(() => {
        ; (async () => {
            try {
                const dataCategoriesFeature = await CategoryApi.getItemsByOption({ limit: 3, });
                setCategoriesFeature(dataCategoriesFeature)
            } catch (error) {
                console.log(error);
            }
        })();
    }, [])

    useEffect(() => {
        ; (async () => {
            try {
                const dataTop8NewProducts = await ProductApi.getItemsByOption({ _limit: 8, _sort: 'createdAt', _order: 'desc' });
                setTop8NewProducts(dataTop8NewProducts)
            } catch (error) {
                console.log(error);
            }
        })();
    }, [])

    return (
        <>
            <section className={`${category.loading ? 'block' : 'hidden'}`}>
                <Loading />
            </section>
            <section className='px-16'>
                <Banner />
                <Text
                    className='text-center mt-20'
                >
                    ! Use discount code: FIRSTIME to get
                <span className='text-yellow-600'> 10% off </span>
                your first order !
                </Text>
            </section>
            <section className='mt-14 px-32 grid grid-cols-3 gap-[20px]'>
                {categoriesFeature.map((category, index) => {
                    return <VerticalBanner key={index}
                        url={category.image}
                        text={category.cateName}
                        className={{
                            customBlock: `${index === 0 ? '' : 'transform -translate-x-5'}`,
                            customText: `${index === 0 ? 'transform translate-x-5' : ''}`
                        }}
                        button={index === 0 ?
                            (<Button
                                variant='btn-tag'
                                color='text-white'
                                dark
                                twCustom={true}
                                classname='animate-fromToToBottom mb-8 font-semibold text-[15px] hover:bg-yellow-700 transition-colors'
                            >
                                New collection
                            </Button>
                            )
                            : index === 2 ?
                                (
                                    <Button
                                        variant='btn-tag'
                                        color='text-white'
                                        twCustom={true}
                                        classname='animate-fromToToBottom mb-8 font-semibold text-[15px] bg-yellow-600 hover:bg-gray-700 transition-colors'
                                    >
                                        Hot
                                    </Button>
                                )
                                : ''}
                        linkTo={`/category/${category._id}`}
                        linkLabel='Show more'
                    />
                })}
            </section>
            <section className='mt-14 px-32'>
                <Text variant='h2'
                    className='mb-[20px] text-[44px] font-body font-semibold text-center'
                >
                    Ideas for inspiration
                </Text>
                <ImageItem
                    url='https://firebasestorage.googleapis.com/v0/b/save-image-b463c.appspot.com/o/banner%2Fbanner.jpg?alt=media&token=0f1f379b-5b90-415a-b54f-07aa8ff41391'
                    atl='banner'
                />
                <div className='mt-10 flex justify-between items-start'>
                    <div className='w-[45%]'>
                        <Text variant='h4'
                            className='text-[26px] font-body font-semibold'
                        >
                            Find the closest store to your location
                    </Text>
                        <Text
                            className='text-[15px] font-body font-medium'
                        >
                            Quisque ut aliquam nunc, at finibus ante. Sed dignissim, nulla a fermentum egestas, odio
                    </Text>
                    </div>
                    <div>
                        <Button
                            variant='btn-tag'
                            size='small'
                            dark
                            color='text-white'
                            twCustom={true}
                            classname='font-body font-semibold hover:bg-yellow-600 transition-colors rounded'
                        >
                            Find now
                        </Button>
                    </div>
                </div>
            </section>
            <section className='mt-20 px-32'>
                <Text varaint='h2'
                    className='mb-10 font-body font-semibold text-[44px] text-center mx-auto w-[450px]'
                >
                    Great deals for new products
                </Text>
                <div className='grid grid-cols-4 gap-[30px]'>
                    {top8NewProducts.map((product, index) => {
                        return (
                            <CardProduct key={index} product={product} />
                        )
                    })}
                </div>
            </section>

            <section className='mt-40'>
                <div>
                    <Text className='font-body font-semibold text-[35px] text-center'>
                        Join the newsletter
                </Text>
                    <Text className='mt-3 font-body font-medium text-[15px] text-center'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
                </Text>
                </div>
                <div className='mt-10 mb-20 w-[50%] mx-auto flex items-center'>
                    {/* type, name, id, */}
                    <FormInput type='text'
                        name='subcribe'
                        id='subribe'
                        placeholder='Please enter your email here ...' />
                    <Button
                        variant='btn-tag'
                        dark
                        color='text-white'
                        twCustom={true}
                        size='xs'
                        classname='ml-5 rounded'
                    >
                        Subcribe
                    </Button>
                </div>
            </section>

        </>
    );
}

export default HomePage;
