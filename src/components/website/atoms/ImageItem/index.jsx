import React from 'react'

function ImageItem({ url, alt,className, ...props }) {
    return (
        <img {...props} src={url} alt={alt} className={`${className} w-full`} />
    )
}

export default ImageItem
