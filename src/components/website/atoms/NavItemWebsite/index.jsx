import React from 'react';
import { NavLink } from 'react-router-dom';

function NavItemWebsite({ children, to, ...props }) {
    return (
        <NavLink
            {...props}
            className='hover:text-yellow-500'
            activeClassName="font-bold text-yellow-500" to={to}
        >
            {children}
        </NavLink>
    )
}

export default NavItemWebsite;
