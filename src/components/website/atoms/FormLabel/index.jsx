import React from 'react'

function FormLabel({ id, label, require, ...props }) {
    return (
        <>
            <label
                {...props}
                htmlFor={id}
                className="block text-sm font-medium text-gray-700"
            >
                {label}
                <span className='ml-1 text-xs text-red-500'>{require ? '*' : ''}</span>
            </label>
        </>
    )
}

export default FormLabel
