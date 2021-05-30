import UserNav from 'components/website/atoms/UserNav';
import React from 'react';
import { FaInstagram } from 'react-icons/fa';
import { FiFacebook, FiSearch, FiShoppingCart, FiTwitter } from 'react-icons/fi';

function ListIcon() {
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
                <UserNav />
            </li>
        </ul>
    )
}

export default ListIcon
