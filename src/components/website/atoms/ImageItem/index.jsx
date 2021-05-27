import React from 'react'

function ImageItem({ url, alt, ...props }) {
    return (
        <img {...props} src={url} alt={alt} className='w-full' />
    )
}

export default ImageItem
