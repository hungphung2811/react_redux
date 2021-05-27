import NavItemWebsite from 'components/website/atoms/NavItemWebsite';
import ListIcon from 'components/website/molecules/ListIcon';
import NavWebsite from 'components/website/molecules/NavWebsite';
import React from 'react';

function Header() {
    return (
        <div className='flex justify-between items-center py-8'>
            <div>
                <NavItemWebsite to='/home'>
                    <img src="https://cdn.jevelin.shufflehound.com/wp-content/uploads/sites/42/2018/03/Jevelin_logo_dark.png" alt="logo Fshop" />
                </NavItemWebsite>
            </div>

            <NavWebsite />

            <ListIcon />
        </div>

    )
}

export default Header
