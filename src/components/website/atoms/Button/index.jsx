import React from 'react'

function Button({ children, variant, className, ...props }) {
    switch (variant) {
        case 'black':
            return (
                <button
                    {...props}
                    className={`bg-gray-900 font-body px-2 py-1 ${className}`}
                >
                    {children}
                </button>
            )
        case 'custom':
            return (
                <button
                    {...props}
                    className={className}
                >
                    {children}
                </button>
            )
        default:
            return (
                <button
                    {...props}
                    className={className}
                >
                    {children}
                </button>
            )
    }

}

export default Button
