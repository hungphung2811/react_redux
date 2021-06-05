import FormInput from 'components/common/atoms/FormInput'
import FormLabel from 'components/common/atoms/FormLabel'
import React from 'react'

function FormGroup({ label, type, name, id, reg, error, require, ...props }) {
    return (
        <div>
            <FormLabel
                id={id}
                label={label}
                require={require}
                {...props}
            />

            <FormInput
                type={type}
                name={name}
                id={id}
                reg={reg}
                error={error}
                {...props}
            />
        </div>
    )
}

export default FormGroup
