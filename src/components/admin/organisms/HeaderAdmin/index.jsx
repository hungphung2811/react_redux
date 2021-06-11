import React from 'react'
import { Link } from 'react-router-dom'
import { getFromLocalStorage } from 'service/utilities/localStorage'

function HeaderAdmin() {
    return (
        <>
            <header className="bg-white">
                <div className='flex justify-between bg-gray-700 text-xs font-medium text-white w-auto py-3 h-10'>
                    <nav className="">
                        header admin
                        <Link to='/home' className='ml-5'>
                            trang chủ
                        </Link>
                    </nav>
                    <div className='mr-10'>
                        <img className='w-5 h-5 rounded-full' src={getFromLocalStorage('user')?.user?.avatar} alt="" />
                    </div>
                </div>
            </header>

        </>
    )
}

export default HeaderAdmin
