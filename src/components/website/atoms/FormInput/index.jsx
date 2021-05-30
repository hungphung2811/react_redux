import React from 'react'

function FormInput({reg,...props}) {
    return (
        <input
            type="text" name="name" id="name" autoComplete="given-name"
            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            // {...register('name')}
            {...reg}
        />
    )
}

export default FormInput
