import Text from 'components/common/atoms/Text'
import React from 'react'
import { GrFormNext } from 'react-icons/gr'
import { Link } from 'react-router-dom'

function Breadcrumb({ variant, label, children }) {
    if (variant === 'custom') {
        return (
            <div className="container flex px-32 justify-between items-center mx-auto py-8 text-center bg-gray-100">
                <Text variant='h3' className="text-xl font-mono font-semibold capitalize">{label}</Text>
                <div className='flex items-center'>
                    <Text variant='span'>
                        <Link className="text-xs text-gray-600 text-opacity-70 mr-1" to='/home'>Homepage</Link>
                    </Text>
                    <Text variant='span' className="text-xs text-gray-600 text-opacity-90 mt-1 mr-2">
                        <GrFormNext className='text-gray-200'/>
                    </Text>
                    <Text variant='span'>
                        <Link className="text-xs text-gray-600 text-opacity-70 mr-1" to='/shop'>{label}</Link>
                    </Text>
                    <Text variant='span' className="text-xs text-gray-600 text-opacity-90 mt-1">
                        <GrFormNext className='text-gray-200' />
                    </Text>
                    <Text variant='span' className="text-sm font-medium text-gray-900 ml-1 mt-1">{children}</Text>
                </div>
            </div>
        )
    }

    return (
        <div className="container flex px-32 justify-between items-center mx-auto py-8 text-center bg-gray-100">
            <Text variant='h3' className="text-xl font-mono font-semibold capitalize">{children}</Text>
            <div className='flex items-center'>
                <Text variant='span'>
                    <Link className="text-xs text-gray-600 text-opacity-70 mr-1" to='/home'>Homepage</Link>
                </Text>
                <Text variant='span' className="text-xs text-gray-600 text-opacity-90 mt-1">
                    <GrFormNext className='text-gray-200' />
                </Text>
                <Text variant='span' className="text-sm font-semibold text-gray-900 ml-1 mt-1">{children}</Text>
            </div>
        </div>
    )
}

export default Breadcrumb
