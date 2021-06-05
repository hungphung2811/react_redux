import React from 'react'

function RowTable({ children, hover, ...props }) {
    return (
        <tr {...props} className={`${hover ? 'hover:bg-gray-200' : ''}`}>
            {children}
        </tr>
    )
}

export default RowTable
