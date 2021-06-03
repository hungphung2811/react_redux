import Text from 'components/website/atoms/Text'
import React from 'react'
import { Link } from 'react-router-dom'

function Breadcrumb({ children }) {
    return (
        <div className="container flex px-32 justify-between items-center mx-auto py-10 text-center bg-gray-100">
            <Text variant='h3' className="text-xl font-mono font-semibold capitalize">{children}</Text>
            <div className='flex items-center'>
                <Text variant='span'>
                    <Link className="text-xs text-gray-600 text-opacity-70 mr-1" to='/home'>Homepage</Link>
                </Text>
                <Text variant='span' className="text-xs text-gray-600 text-opacity-90 mt-1">&gt;</Text>
                <Text variant='span' className="text-sm font-semibold text-gray-900 ml-1 mt-1">{children}</Text>
            </div>
        </div>
    )
}

export default Breadcrumb
