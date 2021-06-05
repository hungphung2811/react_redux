import React from 'react'

function Text({ children, className, variant, ...props }) {
    switch (variant) {
        case 'h1':
            return (
                <h1 {...props} className={`font-body  ${className}`}>{children}</h1>
            )
        case 'h2':
            return (
                <h2 {...props} className={`font-body  ${className}`}>{children}</h2>
            )
            case 'span':
            return <span {...props} className={`font-body  ${className}`}>{children}</span>
        default:
            return (
                <p {...props} className={`font-body  ${className}`}>{children}</p>
            )
    }
}

export default Text
