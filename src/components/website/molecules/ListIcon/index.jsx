import Text from 'components/common/atoms/Text';
import UserNav from 'components/website/molecules/UserNav';
import React, { useState } from 'react';
import { FaInstagram } from 'react-icons/fa';
import { FiFacebook, FiSearch, FiShoppingCart, FiTwitter } from 'react-icons/fi';
import { useSelector } from 'react-redux';
import { getFromLocalStorage } from 'service/utilities/localStorage';
import CartPreView from '../CartPreView';
import SubmenuUserDashboard from '../SubmenuUserDashboard';

function ListIcon() {
    const user = getFromLocalStorage('user');
    const { isLogged } = useSelector(state => state.auth)
    const { amount } = useSelector(state => state.cart);
    const [showCartPreview, setShowCartPreview] = useState(false);

    return (
        <ul className='flex items-center'>
            <li className='px-3 text-gray-500'>
                <a href="facebook.com" target='_blank' rel='noopener noreperrer'>
                    <FiFacebook />
                </a>
            </li>
            <li className='px-3 text-gray-500'>
                <a href="twitter.com" target='_blank' rel='noopener noreperrer'>
                    <FiTwitter />
                </a>
            </li>
            <li className='px-3 text-gray-500'>
                <a href="instagram.com" target='_blank' rel='noopener noreperrer'>
                    <FaInstagram />
                </a>
            </li>
            <li className='px-3 text-gray-500'>
                <FiSearch cursor='pointer' />
            </li>
            <li className='px-3 text-gray-500 relative'>
                <div onClick={() => {
                    setShowCartPreview(!showCartPreview)
                }}
                >
                    <FiShoppingCart cursor='pointer' />
                    <Text
                        variant='span'
                        className='absolute w-[18px] h-[18px] text-center top-0 right-0 bg-yellow-600 text-[12px] cursor-pointer text-white font-medium font-body rounded-lg transform -translate-x-1 -translate-y-2'
                    >{amount}
                    </Text>
                </div>
                <ul className={`${showCartPreview ? 'visible opacity-100' : 'opacity-0 invisible'} shadow-md fixed w-[300px] top-16 right-0 transform transition-all duration-200 bg-[#303030]`}>
                    <CartPreView />
                </ul>
            </li>
            <li>
                {(user && isLogged) ?
                    <SubmenuUserDashboard user={user} />
                    // <ImageItem
                    //     onClick={logOut}
                    //     className='w-5 h-5 ml-2'
                    //     url={user.user.avatar}
                    //     alt='user'
                    // />
                    : <UserNav />}

            </li>
        </ul>
    )
}

export default ListIcon
