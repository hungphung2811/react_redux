import { getCategoriesStatus } from 'actions/categoriesActions';
import { getCategories } from 'actions/categoriesActions';
import CategoryApi from 'api/categoryApi';
import NavItemWebsite from 'components/website/atoms/NavItemWebsite';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function NavWebsite() {
    const { listCategories } = useSelector(state => state.category);
    const { amount ,listCart } = useSelector(state => state.cart);
    const dispatch = useDispatch();
    useEffect(() => {
        (async () => {
            try {
                const dataCategories = await CategoryApi.getAll();
                dispatch(getCategories(dataCategories));
                dispatch(getCategoriesStatus(false));
            } catch (error) {
                console.log(error);
            }
        })();
    }, [dispatch]);

    return (
        <ul className='flex items-center text-[15px] font-body font-medium capitalize'>
            <li className='px-3'>
                <NavItemWebsite to='/home'>home</NavItemWebsite>
            </li>
            <li className='px-3'>
                <NavItemWebsite to='/shop'>shop</NavItemWebsite>
            </li>
            <li className='px-3'>
                {console.log({listCart,amount})}
                {amount}
            </li>
            {
                listCategories.map((category, index) => {
                    return <li className='px-3' key={index}>
                        <NavItemWebsite to={`/category/${category._id}`}>
                            {category.cateName}
                        </NavItemWebsite>
                    </li>
                })
            }
        </ul>
    )
}

export default NavWebsite
