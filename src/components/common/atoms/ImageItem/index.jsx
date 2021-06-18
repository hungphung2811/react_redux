import React from 'react'

function ImageItem({ url, alt, className, width, ...props }) {
    return (
        <img {...props} src={url} alt={alt} className={`${width ? width : 'w-full'} ${className}`} />
    )
}

export default ImageItem
