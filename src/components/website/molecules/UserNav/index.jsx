import React, { useState } from 'react'
import { FiUser } from 'react-icons/fi';
import { Link } from 'react-router-dom';

function UserNav() {
    const [active, setActive] = useState(false);
    const toggleSubMenu = () => {
        setActive(() => !active);
    }
    return (
        <div className='px-3 text-gray-500 relative'>
            <FiUser onClick={toggleSubMenu} cursor='pointer' />
            <ul className={`${active ? 'active' : ''} transition-opacity invisible opacity-0 absolute top-6 left-3 bg-white shadow-md`}>
                <li className='px-2 py-0.5 text-sm font-semibold capitalize cursor-pointer'>
                    <Link to='/buyer/register' onClick={toggleSubMenu}>
                        register
                    </Link>
                </li>
                <li className='px-2 py-0.5 text-sm font-semibold capitalize cursor-pointer'>
                    <Link to='/buyer/login' onClick={toggleSubMenu}>
                        login
                    </Link>
                </li>
                <li className='px-2 py-0.5 text-sm font-semibold capitalize cursor-pointer'>
                    <Link to='/buyer/logout' onClick={toggleSubMenu}>
                        logout
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default UserNav
