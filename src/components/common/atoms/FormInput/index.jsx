import React from 'react'

function FormInput({ type, name, id, reg, error, placeholder, ...props }) {
    return (
        <>
            <input
                type={type} name={name} id={id}
                placeholder={placeholder}
                className={`${error ? 'border-2 border-red-300' : 'border-gray-300'} mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm rounded-md`}
                {...reg}
                {...props}
            />
        </>
    )
}

export default FormInput
