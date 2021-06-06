import React from 'react'

function TdTable({ children, ...props }) {
    return (
        <td {...props} className="px-6 py-4 whitespace-nowrap text-[15px]">
            {children}
        </td>
    )
}

export default TdTable
