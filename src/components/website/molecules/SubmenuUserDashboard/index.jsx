import { changeStatusLogin } from 'actions/authActions';
import AuthApi from 'api/authApi';
import ImageItem from 'components/common/atoms/ImageItem';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { deleteInLocalStorage, setToLocalStorage } from 'service/utilities/localStorage';

function SubmenuUserDashboard({ user }) {
    const [active, setActive] = useState(false);

    const toggleSubMenu = () => {
        setActive(() => !active);
    }

    const history = useHistory();
    const dispatch = useDispatch()

    const logOut = () => {
        console.log('log out');
        (async () => {
            await AuthApi.signOut();
            dispatch(changeStatusLogin(false))
            deleteInLocalStorage('user');
            setToLocalStorage('isLogged', false);
            history.push('/home')
        })();
    }
    return (
        <div className='px-3 text-gray-500 relative'>
            <ImageItem
                onClick={toggleSubMenu}
                width='w-5'
                className='h-5 ml-2 cursor-pointer'
                url={user.user.avatar}
                alt='user'
            />
            <ul className={`${active ? 'active' : ''} transition-opacity invisible opacity-0 absolute top-6 left-3 bg-white shadow-md`}>
                <li className='px-2 py-0.5 text-sm font-medium capitalize cursor-pointer'>
                    <Link to='/user/edit' onClick={toggleSubMenu}>
                        profile
                    </Link>
                </li>
                <li className='px-2 py-0.5 text-sm font-medium capitalize cursor-pointer'>
                    <Link to='/user/notification' onClick={toggleSubMenu}>
                        notification
                    </Link>
                </li>
                {user.user.role === 1 ?
                    <li className='px-2 py-0.5 text-sm font-medium capitalize cursor-pointer'>
                        <Link to='/admin'>
                            dashboard
                        </Link>
                    </li> : ''
                }
                <li className='px-2 py-0.5 text-sm font-medium capitalize cursor-pointer'>
                    <span onClick={logOut}>
                        logout
                    </span>
                </li>
            </ul>
        </div>
    )
}

export default SubmenuUserDashboard
