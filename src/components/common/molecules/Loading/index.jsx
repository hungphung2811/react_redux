import React from 'react'

function Loading() {
    return (
        <div className='fixed inset-0 bg-gray-500 bg-opacity-50 flex items-center justify-center'>
            <div className='text-white font-body font-semibold text-2xl'>
                Loading...
            </div>
        </div>
    )
}

export default Loading
