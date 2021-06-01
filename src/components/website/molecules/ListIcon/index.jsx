import ImageItem from 'components/website/atoms/ImageItem';
import UserNav from 'components/website/atoms/UserNav';
import React from 'react';
import { FaInstagram } from 'react-icons/fa';
import { FiFacebook, FiSearch, FiShoppingCart, FiTwitter } from 'react-icons/fi';

function ListIcon() {
    const getUserFronLocal = () => {
        return JSON.parse(localStorage.getItem('user')) || undefined;
    }
    const user = getUserFronLocal();
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
            <li className='px-3 text-gray-500'>
                <FiShoppingCart cursor='pointer' />
            </li>
            <li>
                {user ?
                    <ImageItem
                        className='w-5 h-5 ml-2'
                        url={user.user.avatar}
                        alt='user'
                    />
                    : <UserNav />}
            </li>
        </ul>
    )
}

export default ListIcon
