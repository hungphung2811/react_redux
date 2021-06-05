import Text from 'components/common/atoms/Text'
import React from 'react'
import { FiHome, FiShoppingCart } from 'react-icons/fi';
import { BiLayer } from 'react-icons/bi';
import { MdReport } from 'react-icons/md';
import { BsFileEarmarkText, BsNewspaper, BsPeople } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import SideBarItem from 'components/admin/molecules/SidebarItem'

function SideBarAdmin() {
    return (
        <>
            <aside className="pt-2 font-body text-[10px] bg-gray-100 col-span-2 shadow border-r-2 border-gray-200">
                <div className="mt-3 pl-3">
                    <h2 className="text-green-500 text-xl font-semibold">
                        <Link to='/admin'>
                            Admin Fpolyshop
                        </Link>
                    </h2>
                </div>
                <div className="mt-4 font-medium text-sm">
                    <ul>
                        <SideBarItem to='/admin/dashboard' icon={<FiHome />} label='Dashboard' />
                        <SideBarItem to='/admin/order' icon={<BsFileEarmarkText />} label='order' />
                        <SideBarItem to='/admin/product' icon={<FiShoppingCart />} label='product' />
                        <SideBarItem to='/admin/category' icon={<BiLayer />} label='categories' />
                        <SideBarItem to='/admin/customer' icon={<BsPeople />} label='customer' />
                        <SideBarItem to='/admin/blog' icon={<BsNewspaper />} label='blog' />
                        <SideBarItem to='/admin/report' icon={<MdReport />} label='report' />
                    </ul>
                </div>
            </aside>

        </>
    )
}

export default SideBarAdmin
