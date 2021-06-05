import React from 'react'

function ThTable({ children }) {
    return (
        <th scope="col"
            className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
            {children}
        </th>
    )
}

export default ThTable
