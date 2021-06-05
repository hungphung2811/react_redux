import Text from 'components/common/atoms/Text'
import React from 'react'
import { NavLink } from 'react-router-dom'

function SideBarItem({ to, label, icon }) {
    return (
        <li className="group">
            <NavLink
                activeClassName='bg-gray-400'
                to={to}
                className="flex pl-3 py-2 items-center text-gray-700 group-hover:bg-gray-300">
                {icon}
                <Text
                    variant='span'
                    className='flex-1 ml-3 text-[15px] capitalize'
                >
                    {label}
                </Text>
            </NavLink>
        </li>
    )
}

export default SideBarItem
