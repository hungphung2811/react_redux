import React from 'react';
import { FaInstagram } from 'react-icons/fa';
import { FiFacebook, FiSearch, FiShoppingCart, FiTwitter } from 'react-icons/fi';

function ListIcon() {
    return (
        <ul className='flex items-center'>
            <li className='px-3 text-gray-500'>
                <a href="#">
                    <FiFacebook />
                </a>
            </li>
            <li className='px-3 text-gray-500'>
                <a href="#">
                    <FiTwitter />
                </a>
            </li>
            <li className='px-3 text-gray-500'>
                <a href="#">
                    <FaInstagram />
                </a>
            </li>
            <li className='px-3 text-gray-500'>
                <a href="#">
                    <FiSearch />
                </a>
            </li>
            <li className='px-3 text-gray-500'>
                <a href="#">
                    <FiShoppingCart />
                </a>
            </li>
        </ul>
    )
}

export default ListIcon
