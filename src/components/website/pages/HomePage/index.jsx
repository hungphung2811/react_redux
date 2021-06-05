import { getProducts } from 'actions/product';
import ProductApi from 'api/productApi';
import Text from 'components/common/atoms/Text';
import Banner from 'components/website/organisms/Banner';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function HomePage() {
    // const products = useSelector(state => state.product);
    const category = useSelector(state => state.category)
    const dispatch = useDispatch();

    useEffect(() => {
        (async () => {
            try {
                const products = await ProductApi.getAll();
                dispatch(getProducts(products));
            } catch (error) {

            }
        })();
    }, [dispatch])

    if (category.loading) {
        return <h1>loading ....</h1>
    }

    return (
        <div className='px-16'>
            <Banner />
            <Text
            className='text-center mt-20'
            >
                ! Use discount code: FIRSTIME to get
                <span className='text-yellow-600'> 10% off </span>
                your first order !
            </Text>
            
        </div>
    );
}

export default HomePage;
