import React from 'react'

function Text({ children, className, heading, ...props }) {
    switch (heading) {
        case 'h1':
            return (
                <h1 {...props} className={`font-body  ${className}`}>{children}</h1>
            )
        case 'h2':
            return (
                <h2 {...props} className={`font-body  ${className}`}>{children}</h2>
            )
        default:
            return (
                <p {...props} className={`font-body  ${className}`}>{children}</p>
            )
    }
}

export default Text
